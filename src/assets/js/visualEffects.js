import * as THREE from "three";

const vertexShader = `
    varying vec2 vUv;
    void main() {
      vec3 pos = position.xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.);
      vUv = uv;
    }
  `;

const fragmentShader = `
    uniform float uTime;
    uniform vec2 uResolution;
    uniform vec3 uColor1;
    uniform vec3 uColor2;
    uniform vec3 uColor3;
    uniform vec3 uColor4;
    uniform vec3 uColor5;
    uniform vec3 uColor6;
    uniform float uSpeed;
    uniform float uIntensity;
    uniform sampler2D uTouchTexture;
    uniform float uGrainIntensity;
    uniform float uZoom;
    uniform vec3 uDarkNavy;
    uniform float uGradientSize;
    uniform float uGradientCount;
    uniform float uColor1Weight;
    uniform float uColor2Weight;

    varying vec2 vUv;

    #define PI 3.14159265359

    // Grain function for film grain effect
    float grain(vec2 uv, float time) {
      vec2 grainUv = uv * uResolution * 0.5;
      float grainValue = fract(sin(dot(grainUv + time, vec2(12.9898, 78.233))) * 43758.5453);
      return grainValue * 2.0 - 1.0;
    }

    vec3 getGradientColor(vec2 uv, float time) {
      float gradientRadius = uGradientSize;

      // Multiple animated centers
      vec2 center1 = vec2(0.5 + sin(time * uSpeed * 0.4) * 0.4, 0.5 + cos(time * uSpeed * 0.5) * 0.4);
    vec2 center2 = vec2(0.5 + cos(time * uSpeed * 0.6 + 1.0) * 0.5, 0.5 + sin(time * uSpeed * 0.45 + 0.5) * 0.5);
    vec2 center3 = vec2(0.5 + sin(time * uSpeed * 0.35 + 2.0) * 0.45, 0.5 + cos(time * uSpeed * 0.55 + 1.5) * 0.45);
    vec2 center4 = vec2(0.5 + cos(time * uSpeed * 0.5 + 3.0) * 0.4, 0.5 + sin(time * uSpeed * 0.4 + 2.5) * 0.4);
    vec2 center5 = vec2(0.5 + sin(time * uSpeed * 0.7 + 4.0) * 0.35, 0.5 + cos(time * uSpeed * 0.6 + 3.5) * 0.35);
    vec2 center6 = vec2(0.5 + cos(time * uSpeed * 0.45 + 5.0) * 0.5, 0.5 + sin(time * uSpeed * 0.65 + 4.5) * 0.5);

      float dist1 = length(uv - center1);
      float dist2 = length(uv - center2);
      float dist3 = length(uv - center3);
      float dist4 = length(uv - center4);
      float dist5 = length(uv - center5);
      float dist6 = length(uv - center6);

      float influence1 = 1.0 - smoothstep(0.0, gradientRadius, dist1);
      float influence2 = 1.0 - smoothstep(0.0, gradientRadius, dist2);
      float influence3 = 1.0 - smoothstep(0.0, gradientRadius, dist3);
      float influence4 = 1.0 - smoothstep(0.0, gradientRadius, dist4);
      float influence5 = 1.0 - smoothstep(0.0, gradientRadius, dist5);
      float influence6 = 1.0 - smoothstep(0.0, gradientRadius, dist6);

      float totalInfluence = (influence1 + influence2 + influence3 + influence4 + influence5 + influence6) / uGradientCount;

      // Touch Texture influence
      vec4 touch = texture2D(uTouchTexture, uv);
      float touchIntensity = touch.r * 0.5 + touch.g * 0.5;

      // Color mixing
      vec3 colorA = mix(uColor1, uColor2, sin(uTime * 0.5));
      vec3 colorB = mix(uColor3, uColor4, cos(uTime * 0.4));

      vec3 blendedColor = mix(uDarkNavy, colorA, uColor1Weight * (influence1 + influence3 + influence5));
      blendedColor = mix(blendedColor, colorB, uColor2Weight * (influence2 + influence4 + influence6));

      blendedColor = mix(blendedColor, uDarkNavy, 0.4);
      blendedColor += touchIntensity * 0.5;

      return blendedColor;
    }

    void main() {
      vec2 uv = vUv;

      uv = (uv - 0.5) / uZoom + 0.5;

      vec3 finalColor = getGradientColor(uv, uTime);

      // Add Film Grain
      float noise = grain(gl_FragCoord.xy / uResolution.xy, uTime);
      finalColor += noise * uGrainIntensity;

      gl_FragColor = vec4(finalColor, 1.0);
    }
  `;

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
    let force = 0;
    let vx = 0;
    let vy = 0;
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
    const pos = {
      x: point.x * this.width,
      y: (1 - point.y) * this.height,
    };

    let intensity = 1;
    if (point.age < this.maxAge * 0.3) {
      intensity = Math.sin((point.age / (this.maxAge * 0.3)) * (Math.PI / 2));
    } else {
      const t = 1 - (point.age - this.maxAge * 0.3) / (this.maxAge * 0.7);
      intensity = -t * (t - 2);
    }
    intensity *= point.force;

    const radius = this.radius;
    let color = `${((point.vx + 1) / 2) * 255}, ${
      ((point.vy + 1) / 2) * 255
    }, ${intensity * 255}`;

    let offset = this.size * 5;
    this.ctx.shadowOffsetX = offset;
    this.ctx.shadowOffsetY = offset;
    this.ctx.shadowBlur = radius * 1;
    this.ctx.shadowColor = `rgba(${color},${0.2 * intensity})`;

    this.ctx.beginPath();
    this.ctx.fillStyle = "rgba(255,0,0,1)";
    this.ctx.arc(pos.x - offset, pos.y - offset, radius, 0, Math.PI * 2);
    this.ctx.fill();
  }
}

export function initBlobBackground(canvasElement) {
  if (!canvasElement) return null;

  const width = window.innerWidth;
  const height = window.innerHeight;
  const clock = new THREE.Clock();

  const camera = new THREE.OrthographicCamera(
    width / -2,
    width / 2,
    height / 2,
    height / -2,
    1,
    1000
  );
  camera.position.z = 1;

  const scene = new THREE.Scene();
  const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
    antialias: true,
  });
  renderer.setSize(width, height);
  renderer.setPixelRatio(window.devicePixelRatio);

  const touchTexture = new TouchTexture();
  const newBaseColor = new THREE.Vector3(0.33, 0.53, 0.96);
  const brightBlobColor = new THREE.Vector3(0.5, 0.7, 1.0);

  const uniforms = {
    uTime: { value: 0 },
    uResolution: { value: new THREE.Vector2(width, height) },
    uColor1: { value: brightBlobColor },
    uColor3: { value: brightBlobColor },
    uColor5: { value: brightBlobColor },
    uColor2: { value: newBaseColor },
    uColor4: { value: newBaseColor },
    uColor6: { value: newBaseColor },
    uSpeed: { value: 1.2 },
    uIntensity: { value: 1.8 },
    uTouchTexture: { value: touchTexture.texture },
    uGrainIntensity: { value: 0.02 },
    uZoom: { value: 1.0 },
    uDarkNavy: { value: newBaseColor },
    uGradientSize: { value: 0.5 },
    uGradientCount: { value: 4.0 },
    uColor1Weight: { value: 1.0 },
    uColor2Weight: { value: 1.0 },
  };

  const geometry = new THREE.PlaneGeometry(width, height, 1, 1);
  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader,
    fragmentShader,
  });

  const mesh = new THREE.Mesh(geometry, material);
  scene.add(mesh);

  let animationFrameId;

  const animate = () => {
    const delta = clock.getDelta();
    uniforms.uTime.value += delta;
    touchTexture.update();
    renderer.render(scene, camera);
    animationFrameId = requestAnimationFrame(animate);
  };

  const onResize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    camera.left = w / -2;
    camera.right = w / 2;
    camera.top = h / 2;
    camera.bottom = h / -2;
    camera.updateProjectionMatrix();
    renderer.setSize(w, h);
    uniforms.uResolution.value.set(w, h);

    mesh.geometry.dispose();
    mesh.geometry = new THREE.PlaneGeometry(w, h, 1, 1);
  };

  const onMouseMove = (event) => {
    const x = event.clientX / window.innerWidth;
    const y = (window.innerHeight - event.clientY) / window.innerHeight;
    touchTexture.addTouch({ x, y });
  };

  window.addEventListener("resize", onResize);
  window.addEventListener("mousemove", onMouseMove);
  animate();

  // 컴포넌트 언마운트 시 정리를 위한 객체 반환
  return {
    destroy: () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(animationFrameId);
      renderer.dispose();
      material.dispose();
      geometry.dispose();
    },
  };
}
