import * as THREE from "three";
import { gsap } from "gsap";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

// ============================================
// 1. TouchTexture Class
// ============================================
class TouchTexture {
  constructor() {
    this.size = 64;
    this.width = this.height = this.size;
    this.maxAge = 64;
    this.radius = 0.16 * this.size;
    this.speed = 1 / this.maxAge;
    this.trail = [];
    this.last = null;
    this.initTexture();
  }

  initTexture() {
    this.canvas = document.createElement("canvas");
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.ctx = this.canvas.getContext("2d");
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    this.texture = new THREE.Texture(this.canvas);
  }

  update() {
    this.clear();
    let speed = this.speed;
    for (let i = this.trail.length - 1; i >= 0; i--) {
      const point = this.trail[i];
      let f = point.force * speed * (1 - point.age / this.maxAge);
      point.x += point.vx * f;
      point.y += point.vy * f;
      point.age++;
      if (point.age > this.maxAge) {
        this.trail.splice(i, 1);
      } else {
        this.drawPoint(point);
      }
    }
    this.texture.needsUpdate = true;
  }

  clear() {
    this.ctx.fillStyle = "black";
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  addTouch(point) {
    let force = 0,
      vx = 0,
      vy = 0;
    const last = this.last;
    if (last) {
      const dx = point.x - last.x;
      const dy = point.y - last.y;
      if (dx === 0 && dy === 0) return;
      const dd = dx * dx + dy * dy;
      let d = Math.sqrt(dd);
      vx = dx / d;
      vy = dy / d;
      force = Math.min(dd * 20000, 2.0);
    }
    this.last = { x: point.x, y: point.y };
    this.trail.push({ x: point.x, y: point.y, age: 0, force, vx, vy });
  }

  drawPoint(point) {
    const pos = { x: point.x * this.width, y: (1 - point.y) * this.height };
    let intensity =
      point.age < this.maxAge * 0.3
        ? Math.sin((point.age / (this.maxAge * 0.3)) * (Math.PI / 2))
        : -(1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7)) *
          (1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7) - 2);
    intensity *= point.force;

    let color = `${((point.vx + 1) / 2) * 255}, ${
      ((point.vy + 1) / 2) * 255
    }, ${intensity * 255}`;
    let offset = this.size * 5;
    this.ctx.shadowOffsetX = offset;
    this.ctx.shadowOffsetY = offset;
    this.ctx.shadowBlur = this.radius;
    this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;
    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - offset, pos.y - offset, this.radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

// ============================================
// 2. VisualManager Class
// ============================================
export class VisualManager {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.uniforms = null;
    this.touchTexture = null;
    this.clock = new THREE.Clock();
    this.animationFrameId = null;

    // Shader Source
    this.vertexShader = `
      varying vec2 vUv;
      void main() {
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        vUv = uv;
      }
    `;

    this.fragmentShader = `
      uniform float uTime;
      uniform vec2 uResolution;
      uniform vec3 uColor1, uColor2, uColor3, uColor4, uColor5, uColor6;
      uniform float uSpeed, uIntensity, uGrainIntensity, uZoom, uGradientSize, uGradientCount, uColor1Weight, uColor2Weight;
      uniform vec3 uDarkNavy;
      uniform sampler2D uTouchTexture;
      varying vec2 vUv;

      float grain(vec2 uv, float time) {
        float grainValue = fract(sin(dot(uv * uResolution * 0.5 + time, vec2(12.9898, 78.233))) * 43758.5453);
        return grainValue * 2.0 - 1.0;
      }

      vec3 getGradientColor(vec2 uv, float time) {
        float rad = uGradientSize;
        vec2 centers[6];
        centers[0] = vec2(0.5 + sin(time * uSpeed * 0.4) * 0.4, 0.5 + cos(time * uSpeed * 0.5) * 0.4);
        centers[1] = vec2(0.5 + cos(time * uSpeed * 0.6 + 1.0) * 0.5, 0.5 + sin(time * uSpeed * 0.45 + 0.5) * 0.5);
        centers[2] = vec2(0.5 + sin(time * uSpeed * 0.35 + 2.0) * 0.45, 0.5 + cos(time * uSpeed * 0.55 + 1.5) * 0.45);
        centers[3] = vec2(0.5 + cos(time * uSpeed * 0.5 + 3.0) * 0.4, 0.5 + sin(time * uSpeed * 0.4 + 2.5) * 0.4);
        centers[4] = vec2(0.5 + sin(time * uSpeed * 0.7 + 4.0) * 0.35, 0.5 + cos(time * uSpeed * 0.6 + 3.5) * 0.35);
        centers[5] = vec2(0.5 + cos(time * uSpeed * 0.45 + 5.0) * 0.5, 0.5 + sin(time * uSpeed * 0.65 + 4.5) * 0.5);

        float inf[6];
        for(int i=0; i<6; i++) inf[i] = 1.0 - smoothstep(0.0, rad, length(uv - centers[i]));

        vec4 touch = texture2D(uTouchTexture, uv);
        vec3 colorA = mix(uColor1, uColor2, sin(uTime * 0.5));
        vec3 colorB = mix(uColor3, uColor4, cos(uTime * 0.4));
        vec3 blended = mix(uDarkNavy, colorA, uColor1Weight * (inf[0] + inf[2] + inf[4]));
        blended = mix(blended, colorB, uColor2Weight * (inf[1] + inf[3] + inf[5]));
        return mix(blended, uDarkNavy, 0.4) + (touch.r * 0.5 + touch.g * 0.5) * 0.5;
      }

      void main() {
        vec2 uv = (vUv - 0.5) / uZoom + 0.5;
        vec3 finalColor = getGradientColor(uv, uTime);
        finalColor += grain(gl_FragCoord.xy / uResolution.xy, uTime) * uGrainIntensity;
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    this.onResize = this.onResize.bind(this);
    this.onMouseMove = this.onMouseMove.bind(this);
    this.animate = this.animate.bind(this);
  }

  // --- 배경 Blob 초기화 ---
  initBlob() {
    const width = window.innerWidth;
    const height = window.innerHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.OrthographicCamera(
      width / -2,
      width / 2,
      height / 2,
      height / -2,
      1,
      1000
    );
    this.camera.position.z = 1;

    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas,
      antialias: true,
    });
    this.renderer.setSize(width, height);
    this.renderer.setPixelRatio(window.devicePixelRatio);

    this.touchTexture = new TouchTexture();

    const baseColor = new THREE.Vector3(0.33, 0.53, 0.96); // #5486F5
    const brightColor = new THREE.Vector3(0.5, 0.7, 1.0);

    this.uniforms = {
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(width, height) },
      uColor1: { value: brightColor },
      uColor3: { value: brightColor },
      uColor5: { value: brightColor },
      uColor2: { value: baseColor },
      uColor4: { value: baseColor },
      uColor6: { value: baseColor },
      uDarkNavy: { value: baseColor },
      uSpeed: { value: 1.2 },
      uIntensity: { value: 1.8 },
      uGrainIntensity: { value: 0.02 },
      uZoom: { value: 1.0 },
      uGradientSize: { value: 0.5 },
      uGradientCount: { value: 4.0 },
      uColor1Weight: { value: 1.0 },
      uColor2Weight: { value: 1.0 },
      uTouchTexture: { value: this.touchTexture.texture },
    };

    const geometry = new THREE.PlaneGeometry(width, height);
    const material = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      vertexShader: this.vertexShader,
      fragmentShader: this.fragmentShader,
    });

    this.scene.add(new THREE.Mesh(geometry, material));
    window.addEventListener("resize", this.onResize);
    window.addEventListener("mousemove", this.onMouseMove);
    this.animate();
  }

  // --- 가로 스크롤 내부 Glass Cube 초기화 ---
  initFocusCube(containerId, scrollTween) {
    const container = document.getElementById(containerId);
    if (!container) return;

    const fScene = new THREE.Scene();
    const fCamera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      10
    );
    fCamera.position.z = 3;

    const fRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    fRenderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(fRenderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.0);
    fScene.add(ambient);

    const createTextTexture = (text) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      canvas.width = canvas.height = 1024;
      ctx.fillStyle = "#fff";
      ctx.font = "Bold 140px sans-serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(text, 512, 512);
      return new THREE.CanvasTexture(canvas);
    };

    const labels = ["Focus", "Logic", "Clean", "Speed", "Refactor", "Strong"];
    const materials = labels.map(
      (label) =>
        new THREE.MeshPhysicalMaterial({
          map: createTextTexture(label),
          transmission: 0.95,
          roughness: 0.15,
          thickness: 1.0,
          ior: 1.45,
          transparent: true,
          clearcoat: 0.5,
        })
    );

    const geo = new RoundedBoxGeometry(1.2, 1.2, 1.2, 10, 0.15);
    const mesh = new THREE.Mesh(geo, materials);
    fScene.add(mesh);

    const animateCube = () => {
      mesh.rotation.y += 0.005;
      mesh.rotation.x += 0.003;
      fRenderer.render(fScene, fCamera);
      this.cubeFrameId = requestAnimationFrame(animateCube);
    };
    animateCube();

    if (scrollTween) {
      gsap.to(mesh.rotation, {
        y: Math.PI * 4,
        scrollTrigger: {
          trigger: ".focus-section",
          containerAnimation: scrollTween,
          start: "left 50%",
          end: "right 20%",
          scrub: 2,
        },
      });
    }
  }

  onResize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (this.camera && this.renderer) {
      this.camera.left = w / -2;
      this.camera.right = w / 2;
      this.camera.top = h / 2;
      this.camera.bottom = h / -2;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(w, h);
      this.uniforms.uResolution.value.set(w, h);
    }
  }

  onMouseMove(e) {
    if (this.touchTexture) {
      this.touchTexture.addTouch({
        x: e.clientX / window.innerWidth,
        y: (window.innerHeight - e.clientY) / window.innerHeight,
      });
    }
  }

  animate() {
    const delta = this.clock.getDelta();
    if (this.uniforms && this.touchTexture) {
      this.uniforms.uTime.value += delta;
      this.touchTexture.update();
    }
    if (this.renderer) this.renderer.render(this.scene, this.camera);
    this.animationFrameId = requestAnimationFrame(this.animate);
  }

  destroy() {
    cancelAnimationFrame(this.animationFrameId);
    cancelAnimationFrame(this.cubeFrameId);
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("mousemove", this.onMouseMove);
    if (this.renderer) this.renderer.dispose();
  }
}
