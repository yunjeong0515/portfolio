<template>
  <q-page class="aboutpage-container">
    <section class="visual-section">
      <div class="gradient-overlay"></div>
      <canvas id="BlobBg"></canvas>
      <div class="wrapper">
        <div class="contents-wrap">
          <div class="title-wrap">
            <div class="keyworld-wrap">
              <span class="bracket font_ibm font_500">[</span>
              <span class="typing-text font_ibm font_500">{{
                currentEnText
              }}</span>
              <span class="bracket font_ibm font_500">]</span>
            </div>
            <span class="stac-text font_ibm">Publisher</span>
          </div>
          <div class="intro-text">
            <span>안녕하세요! 최적의 디지털 경험을 설계하는 </span>
            <span>퍼블리셔, 이윤정입니다.</span>
          </div>
          <div class="profile-img">
            <img
              src="../assets/imgs/about/profile_img01.png"
              alt="이윤정 프로필이미지"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="rolling-section">
      <div class="rolling-wrapper">
        <div class="rolling-content">
          <div class="rolling-item" v-for="n in 10" :key="'name-' + n">
            <span class="font_mon font_300">LEE YUNJEONG</span>
            <div class="circle-icon">
              <div class="dev-icon">
                <svg width="105" height="58" viewBox="0 0 105 58" fill="none">
                  <path
                    d="M77.2891 41.3765L98.6214 29.5825V29.0669L77.2891 17.3374V10.4414L105.002 25.9734V32.676L77.2891 48.208V41.3765Z"
                    fill="white"
                  />
                  <path
                    d="M38.5156 57.8744L60.2346 0H66.4861L44.7671 57.8744H38.5156Z"
                    fill="white"
                  />
                  <path
                    d="M0 32.676V25.9734L27.7127 10.4414V17.2729L6.38036 29.0669V29.5825L27.7127 41.312V48.208L0 32.676Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="rolling-wrapper">
        <div class="rolling-content">
          <div class="rolling-item" v-for="n in 10" :key="'job-' + n">
            <span class="font_mon font_300">PUBLISHER</span>
            <div class="rolling-icon">
              <img src="../assets/imgs/about/mac_3d_icon.png" alt="mac" />
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bio-section parallax__item">
      <div class="wrapper">
        <div class="bio-content-wrap">
          <div class="bio-row row01">
            <div class="video-box">
              <video
                autoplay
                muted
                loop
                src="../assets/video/bio03.mp4"
              ></video>
            </div>
            <span class="bio-text font_ibm">I'm Yunjeong Lee!</span>
          </div>
          <div class="bio-row row02">
            <span class="bio-text font_ibm font_400">A Web Publisher </span>
            <div class="video-box">
              <video
                autoplay
                muted
                loop
                src="../assets/video/bio02.mp4"
              ></video>
            </div>
          </div>
          <div class="bio-row row03">
            <span class="bio-text font_ibm font_400"
              >delivering optimal digital experiences.</span
            >
          </div>
          <div class="bio-row row04">
            <span class="bio-text font_ibm font_400">Defining the web</span>
            <div class="video-box">
              <video
                autoplay
                muted
                loop
                src="../assets/video/bio03.mp4"
              ></video>
            </div>
            <span class="bio-text font_ibm font_400">since July 2024.</span>
          </div>
        </div>
      </div>
    </section>
    <section class="intro-section" ref="introSection">
      <div class="pin-wrapper">
        <div class="wrapper">
          <div class="title-wrap">
            <span class="sub-title font_ibm">What started it?</span>
            <h2 class="split-text font_ibm en-text font_400">
              Curiosity about how design is implemented <br />on the web led me
              to start my career <br />as a publisher.
            </h2>
            <p class="kr-text font_ibm font_400">
              디자인이 웹사이트에서 구현되는 과정에 대한 호기심으로 퍼블리셔의
              길을 시작했습니다.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="horizontal-section" ref="horizontalSection">
      <div class="pin-wrapper">
        <div class="horizontal-inner" ref="horizontalInner">
          <div class="identity-section one-page">
            <div class="wrapper">
              <div class="contents-inner">
                <div class="img-area">
                  <div class="profile-img">
                    <img
                      src="../assets/imgs/about/profile_img02.png"
                      alt="이윤정 프로필이미지"
                    />
                  </div>
                </div>
                <div class="text-area">
                  <div class="title-wrap">
                    <h2 class="font_ibm font_400">&lt;Identity/&gt;</h2>
                    <p class="font_400">
                      단순히 보이는 화면을 만드는 것이 아니라, <br />시간이
                      지나도 유지되고 확장될 수 있는 코드를 고민합니다.
                    </p>
                  </div>
                  <div class="scrolling-svg-text">
                    <svg
                      viewBox="0 0 1000 200"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        id="wavePath"
                        d="M0,100 C150,200 350,0 500,100 C650,200 850,0 1000,100"
                        fill="transparent"
                      />

                      <text>
                        <textPath href="#wavePath" startOffset="0%">
                          not just visual, but sustainable
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="focus-section one-page">
            <div class="inner">
              <div class="title-wrap reveal-text">
                <h2 class="font_ibm font_400">&lt;Focus/&gt;</h2>
                <p class="font_500">
                  유지보수를 전제로 마크업합니다.<br />
                  반복을 줄이고, 수정에 강한 구조를 선호합니다.
                </p>
              </div>
              <div class="fluid-container planet-sphere">
                <div class="stage">
                  <div class="txt" ref="focusTxt">FOCUS ON EXPERIENCE</div>
                  <div class="grain"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="workflow-section one-page is-dark-bg">
            <div class="content-wrap">
              <div class="inner">
                <div class="title-wrap reveal-text">
                  <h2 class="font_ibm">&lt;Workflow/&gt;</h2>
                  <p>
                    디자인 의도를 이해하고 <br />구조를 해석해 웹 위에
                    구현합니다.
                  </p>
                </div>
                <div class="workflow-tags">
                  <span class="tag font_mon font_700">DESIGN</span>
                  <span class="tag font_mon font_700">CODE</span>
                  <span class="tag font_mon font_700">EXPERIENCE</span>
                </div>
              </div>
            </div>
          </div>
          <div class="experience-section one-page is-dark-bg">
            <div class="content-wrap">
              <div class="inner">
                <div class="title-wrap reveal-text">
                  <h2 class="font_ibm">&lt;Experience/&gt;</h2>
                  <p>
                    실제 서비스 환경에서 사용되는 코드를 만들어왔습니다.<br />
                    디자이너, 프론트엔드 개발자와 협업하며 <br />
                    운영·유지보수·개선까지 이어지는 작업을 경험해왔습니다.
                  </p>
                </div>
                <div class="img-wrap">
                  <div class=""></div>
                  <div class="macbook-img">
                    <img src="../assets/imgs/about/macbook.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="skills-section">
      <div class="fixed-area">
        <h2 class="bg-title font_ibm" ref="bgTitle">Skills</h2>
      </div>
      <div class="wrapper">
        <div class="skill-card" data-title="HTML">
          <div class="skill-info">
            <div class="title-wrap">
              <h3 class="font_ibm font_500">HTML</h3>
              <span class="font_ibm">The Semantic Structure</span>
            </div>
            <p>
              단순히 화면에 텍스트를 보이게 하는 것을 넘어, 시맨틱
              마크업(Semantic Markup) 원칙을 철저히 지켜 검색 엔진 최적화(SEO)와
              웹 접근성의 기초를 단단하게 다지는 역할을 수행합니다.
            </p>
          </div>
        </div>

        <div class="skill-card" data-title="CSS">
          <div class="skill-info">
            <div class="title-wrap">
              <h3 class="font_ibm font_500">CSS</h3>
              <span class="font_ibm"
                >Pixel-Perfect Styling & Responsive UX</span
              >
            </div>
            <p>
              디자인 시스템을 픽셀 단위로 정확하게 구현합니다. @media 쿼리와
              Flexbox/Grid를 활용하여 모든 디바이스에 최적화된 반응형 사용자
              경험을 제공합니다.
            </p>
          </div>
        </div>

        <div class="skill-card" data-title="JavaScript">
          <div class="skill-info">
            <div class="title-wrap">
              <h3 class="font_ibm font_500">JavaScript</h3>
              <span class="font_ibm"
                >Dynamic Interaction & Problem Solving</span
              >
            </div>
            <p>
              사용자 경험을 향상시키는 동적인 인터랙션을 구현합니다. 순수
              JavaScript를 이용해 복잡한 비즈니스 로직을 효율적으로 처리하고,
              발생하는 문제를 능동적으로 해결합니다.
            </p>
          </div>
        </div>

        <div class="skill-card" data-title="jQuery">
          <div class="skill-info">
            <div class="title-wrap">
              <h3 class="font_ibm font_500">jQuery</h3>
              <span class="font_ibm"
                >Efficient DOM Control & Cross-Browser Stability</span
              >
            </div>
            <p>
              간결한 문법을 활용하여 DOM 조작 및 애니메이션을 효율적으로
              구현합니다. 복잡한 크로스 브라우징 이슈를 최소화하며, 빠르고
              안정적인 웹 인터랙션을 제공합니다.
            </p>
          </div>
        </div>

        <div class="skill-card" data-title="Vue.js">
          <div class="skill-info">
            <div class="title-wrap">
              <h3 class="font_ibm font_500">Vue.js</h3>
              <span class="font_ibm"
                >Component-Driven Architecture & Reactive UI</span
              >
            </div>
            <p>
              Quasar Framework를 활용하여 웹, 모바일(하이브리드 앱), 데스크톱
              환경에 대응하는 통합적인 UI를 구축합니다. Material Design 기반의
              컴포넌트로 일관성 있는 사용자 경험을 제공합니다.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="project-section">
      <div class="title-wrap">
        <span class="">SELECTED</span>
        <h2>PROJECT</h2>
        <span class="">2024~2025</span>
      </div>
    </section>
    <section class="vision-section" ref="sectionRef">
      <div class="wrapper">
        <div class="canvas-inner">
          <div class="physics-canvas" ref="canvasContainer"></div>
          <div class="contents-wrap">
            <span class="title font_ibm">&lt;Vision/&gt;</span>
            <div class="text-wrap">
              <span class="main-text font_mon font_700">CREATIVE CODE</span>
              <div class="sub-text">
                <span>깔끔하고 구조화된 코드를 작성하여 </span>
                <span class="row02"
                  >디자인과 기능을 안정적으로 구현합니다.</span
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
// ⭐ useMouse는 @vueuse/core에서, 나머지는 vue 자체에서 가져옵니다.
import { useMouse } from "@vueuse/core";
import { shallowRef, ref } from "vue";
import * as THREE from "three";
import * as Matter from "matter-js";
import { RoundedBoxGeometry } from "three/addons/geometries/RoundedBoxGeometry.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// 외부로 분리한 Three.js 로직 임포트
import { initBlobBackground } from "src/assets/js/visualEffects";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "AboutPage",

  data() {
    return {
      texts: [
        { en: "User-Centric" },
        { en: "Pixel-Perfect" },
        { en: "Semantic" },
        { en: "Responsive" },
        { en: "Accessible" },
        { en: "Optimized" },
        { en: "Interactive" },
      ],
      index: 0,
      currentEnText: "",
      enIndex: 0,
      isDeleting: false,
      typingSpeed: 80,
      deletingSpeed: 70,
      delayAfterTyping: 2000,
      timer: null,
      rollingTls: [],
    };
  },

  methods: {
    // 1. 헤더 타이핑 애니메이션
    typeEn() {
      clearTimeout(this.timer);
      const currentIndex = this.index % this.texts.length;
      const currentFullText = this.texts[currentIndex].en;

      if (!this.isDeleting) {
        this.currentEnText = currentFullText.substring(0, this.enIndex + 1);
        this.enIndex++;
        if (this.enIndex >= currentFullText.length) {
          this.isDeleting = true;
          this.timer = setTimeout(this.typeEn, this.delayAfterTyping);
          return;
        }
      } else {
        this.currentEnText = currentFullText.substring(0, this.enIndex - 1);
        this.enIndex--;
        if (this.enIndex <= 0) {
          this.isDeleting = false;
          this.index = (this.index + 1) % this.texts.length;
        }
      }
      this.timer = setTimeout(
        this.typeEn,
        this.isDeleting ? this.deletingSpeed : this.typingSpeed
      );
    },

    initRollingText() {
      const wrappers = document.querySelectorAll(".rolling-content");
      if (wrappers.length === 0) return;

      wrappers.forEach((el, idx) => {
        const isSecondLine = idx === 1;
        const width = el.offsetWidth / 2; // 전체 컨텐츠의 절반

        const startX = isSecondLine ? -width : 0;
        const endX = isSecondLine ? 0 : -width;

        // 1. 기본 무한 루프 설정
        gsap.set(el, { x: startX });
        const tl = gsap.to(el, {
          x: endX,
          duration: 35,
          ease: "none",
          repeat: -1,
        });

        // 2. 스크롤 속도 감지 및 가속 (ScrollTrigger)
        ScrollTrigger.create({
          trigger: ".rolling-section",
          start: "top bottom",
          end: "bottom top",
          onUpdate: (self) => {
            // 스크롤 속도 계산 (절대값)
            const velocity = Math.abs(self.getVelocity() / 150);
            const speed = 1 + velocity;

            // 속도 증가 (TimeScale 조절)
            gsap.to(tl, { timeScale: speed, duration: 0.3 });

            // 원래 속도로 부드럽게 복귀
            gsap.to(tl, { timeScale: 1, delay: 0.5, duration: 1 });
          },
        });

        // 나중에 해제하기 위해 배열에 저장
        this.rollingTls.push(tl);
      });
    },

    // 2. 인트로 섹션: 글자 쪼개기 및 한 글자씩 채워지는 애니메이션
    initIntroAnimation() {
      const targets = document.querySelectorAll(".intro-section .split-text");
      if (targets.length === 0) return;

      targets.forEach((target) => {
        const content = target.innerHTML;
        target.innerHTML = "";
        const parts = content.split(/(<br\s*\/?>)/i);
        parts.forEach((part) => {
          if (part.toLowerCase().startsWith("<br")) {
            target.innerHTML += part;
          } else {
            [...part].forEach((char) => {
              const span = document.createElement("span");
              span.classList.add("char");
              span.innerText = char === " " ? "\u00A0" : char;
              target.appendChild(span);
            });
          }
        });
      });

      const enChars = document.querySelectorAll(".en-text .char");
      const krText = document.querySelector(".kr-text");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top top",
          end: "+=2000",
          pin: true,
          scrub: 1,
          anticipatePin: 1,
        },
      });

      tl.to(enChars, {
        color: "#fff",
        opacity: 1,
        stagger: 0.1,
        ease: "none",
      })
        .to(krText, {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        })
        .to({}, { duration: 1 });
    },

    // 3. Bio 섹션: 아래에서 위로 순차적 등장
    initBioReveal() {
      const rows = document.querySelectorAll(
        ".bio-row, .row01, .row02, .row03 .row04"
      );
      rows.forEach((row) => {
        const children = row.children;
        gsap.set(children, { opacity: 0, y: 50 });
        gsap.to(children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: row,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },

    initFocus3DText() {
      const textElement = this.$refs.focusTxt;
      const stage = document.querySelector(".stage");
      if (!textElement || !stage) return;

      const rawText = textElement.textContent.trim();
      const characters = rawText.split("");
      textElement.innerHTML = "";

      // 1. 회전 반경 설정 (글자 수에 따라 유동적으로)
      const radiusVal = Math.max(200, characters.length * 15);
      const radius = -radiusVal;
      const duration = 20;

      // 2. 구(Sphere) 생성 - 글자 궤도보다 작게 설정 (radius의 약 80%)
      const sphere = document.createElement("div");
      sphere.className = "sphere";
      const sphereSize = radiusVal * 1.2; // 지름이 radius보다 약간 작게 설계

      Object.assign(sphere.style, {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: `${sphereSize}px`,
        height: `${sphereSize}px`,
        background: "radial-gradient(circle at 30% 30%, #555, #000)",
        borderRadius: "50%",
        // 구를 Z축으로 살짝 뒤로 밀어 앞글자가 파묻히는 것 방지
        transform: "translate(-50%, -50%) translateZ(-50px)",
        boxShadow: "0 0 50px rgba(255,255,255,0.1)",
        zIndex: 0,
      });
      textElement.appendChild(sphere);

      // 3. 글자 생성
      const charElements = characters.map((char) => {
        const span = document.createElement("span");
        span.innerText = char === " " ? "\u00A0" : char;
        span.className = "char";
        Object.assign(span.style, {
          position: "absolute",
          left: "50%",
          top: "50%",
          display: "inline-block",
          // 회전 중심을 명확히 설정
          transformOrigin: `50% 50% ${radius}px`,
          transformStyle: "preserve-3d",
          color: "#fff",
          zIndex: 10, // 구보다 높은 우선순위
          pointerEvents: "none",
        });
        textElement.appendChild(span);
        return span;
      });

      // 4. 전체 틀 기울기
      gsap.set(textElement, {
        rotationZ: 15,
        rotationX: 5,
        transformStyle: "preserve-3d",
        perspective: "1000px", // 원근감 추가
      });

      // 5. 애니메이션 실행
      const mainTl = gsap.timeline({ repeat: -1 });

      charElements.forEach((char, i) => {
        const startAngle = (i / charElements.length) * 360;

        mainTl.fromTo(
          char,
          {
            rotationY: startAngle,
            xPercent: -50,
            yPercent: -50,
          },
          {
            rotationY: startAngle - 360,
            duration: duration,
            ease: "none",
          },
          0
        );
      });
    },
    // 4. 가로 스크롤 메인 제어 (가장 중요)
    initHorizontalScroll() {
      const horiSection = document.querySelector(".horizontal-section");
      const horiInner = document.querySelector(".horizontal-inner");
      const planet = document.querySelector(".planet-sphere");

      if (!horiSection || !horiInner) return;

      const scrollTween = gsap.to(horiInner, {
        x: () => -(horiInner.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: horiSection,
          start: "top top",
          end: () => `+=${horiInner.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      window.addEventListener("resize", () => {
        ScrollTrigger.refresh();
      });

      const revealSections = document.querySelectorAll(".one-page");
      revealSections.forEach((section) => {
        const elements = section.querySelectorAll(
          ".reveal-text h2, .reveal-text p"
        );

        if (elements.length > 0) {
          gsap.to(elements, {
            clipPath: "inset(0 0% 0 0)", // 오른쪽 가림막을 0%로 (전체 다 보임)
            duration: 1.2,
            stagger: 0.3, // 제목 나오고 본문 나오는 간격
            ease: "power2.inOut", // 부드럽게 채워지는 느낌
            scrollTrigger: {
              trigger: section,
              containerAnimation: scrollTween,
              start: "left 70%", // 화면에 30% 정도 들어왔을 때 시작
              toggleActions: "play none none reverse",
            },
          });
        }
      });

      // 기존 배경색 & 행성 로직
      ScrollTrigger.create({
        trigger: ".focus-section",
        containerAnimation: scrollTween,
        start: "left 60%",
        onEnter: () => {
          gsap.to(horiSection, { backgroundColor: "#000000", duration: 0.8 });
          if (planet)
            gsap.to(planet, {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "back.out(1.7)",
            });
        },
        onLeaveBack: () => {
          gsap.to(horiSection, { backgroundColor: "#ffffff", duration: 0.8 });
          if (planet)
            gsap.to(planet, { opacity: 0, scale: 0.5, duration: 0.8 });
        },
      });

      this.initIdentityAnimation(scrollTween);
    },

    // 5. Identity 섹션: 프로필 이미지 등장 및 SVG 텍스트 드로잉
    initIdentityAnimation(scrollTween) {
      const identitySec = document.querySelector(".identity-section");
      if (!identitySec) return;

      const profileImg = identitySec.querySelector(".profile-img");
      const titleTexts = identitySec.querySelectorAll(
        ".title-wrap h2, .title-wrap p"
      );
      const svgTarget = identitySec.querySelector(".scrolling-svg-text svg");

      // 1. 초기값 설정 (가장 먼저 실행)
      gsap.set(profileImg, { opacity: 0, x: -50 });
      gsap.set(titleTexts, { opacity: 0, y: 20 });

      if (svgTarget) {
        // CSS보다 JS 세팅이 우선되도록 확실히 가림
        gsap.set(svgTarget, {
          opacity: 1,
          clipPath: "inset(0% 100% 0% 0%)",
          webkitClipPath: "inset(0% 100% 0% 0%)",
        });
      }

      // 2. 프로필 & 텍스트: "딱" 등장
      gsap.to([profileImg, ...titleTexts], {
        opacity: 1,
        x: 0,
        y: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: identitySec,
          containerAnimation: scrollTween,
          start: "left 70%",
          toggleActions: "play none none reverse",
        },
      });

      // 3. SVG 텍스트: 스크롤 진행도에 맞춰 마스킹 해제
      if (svgTarget) {
        gsap.fromTo(
          svgTarget,
          {
            clipPath: "inset(0% 100% 0% 0%)",
            webkitClipPath: "inset(0% 100% 0% 0%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            webkitClipPath: "inset(0% 0% 0% 0%)",
            ease: "none",
            scrollTrigger: {
              trigger: ".scrolling-svg-text",
              containerAnimation: scrollTween,
              start: "left 30%",
              end: "center center",
              scrub: 1,
              immediateRender: false,
            },
          }
        );
      }
    },
    initVisionPhysics() {
      const container = this.$refs.canvasContainer;
      const mainTextEl = document.querySelector(".main-text");
      const subTextEl = document.querySelector(".sub-text");
      if (!container || !mainTextEl || !subTextEl) return;

      const { Engine, Render, Runner, Bodies, Composite, Events, Body } =
        Matter;

      const engine = Engine.create();
      const runner = Runner.create();
      const render = Render.create({
        element: container,
        engine: engine,
        options: {
          width: container.clientWidth,
          height: container.clientHeight,
          background: "transparent",
          wireframes: false,
          pixelRatio: window.devicePixelRatio || 1,
        },
      });

      const wallThickness = 100;

      // 1. 고정 벽 생성
      const ground = Bodies.rectangle(
        container.clientWidth / 2,
        container.clientHeight + wallThickness / 2,
        container.clientWidth,
        wallThickness,
        { isStatic: true, render: { visible: false } }
      );

      const leftWall = Bodies.rectangle(
        -wallThickness / 2,
        container.clientHeight / 2,
        wallThickness,
        container.clientHeight * 2,
        { isStatic: true, render: { visible: false } }
      );

      const rightWall = Bodies.rectangle(
        container.clientWidth + wallThickness / 2,
        container.clientHeight / 2,
        wallThickness,
        container.clientHeight * 2,
        { isStatic: true, render: { visible: false } }
      );

      const getRectBody = (el) => {
        const rect = el.getBoundingClientRect();
        const cRect = container.getBoundingClientRect();
        return Bodies.rectangle(
          rect.left - cRect.left + rect.width / 2,
          rect.top - cRect.top + rect.height / 2,
          rect.width,
          rect.height,
          { isStatic: true, render: { visible: false } }
        );
      };

      const mainWall = getRectBody(mainTextEl);
      const subWall = getRectBody(subTextEl);

      // 2. 단어 객체 생성
      const words = [
        "DESIGN",
        "RESPONSIVE",
        "PUBLISHING",
        "UX/UI",
        "SEMANTIC",
        "INTERACTIVE",
        "CLEAN CODE",
        "OPTIMIZED",
        "ACCESSIBILITY",
        "ANIMATION",
      ];
      const wordBodies = words.map((word, i) => {
        return Bodies.rectangle(
          Math.random() * container.clientWidth,
          -100 - i * 150,
          word.length * 18 + 30,
          45,
          {
            restitution: 0.5,

            render: { fillStyle: "transparent", strokeStyle: "transparent" },
            friction: 0.1,
            label: word,
            chamfer: { radius: 22 }, // 더 둥글게
          }
        );
      });

      const mousePos = { x: 0, y: 0 };

      container.addEventListener("mousemove", (e) => {
        const rect = container.getBoundingClientRect();
        mousePos.x = e.clientX - rect.left;
        mousePos.y = e.clientY - rect.top;
      });

      // ⭐ 마우스 효과 로직
      Events.on(engine, "beforeUpdate", () => {
        const forceRange = 150;
        const forceStrength = 0.000003; // 살짝 움직이는 강도

        wordBodies.forEach((body) => {
          const dx = body.position.x - mousePos.x;
          const dy = body.position.y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < forceRange) {
            const force = (forceRange - distance) * forceStrength;
            Body.applyForce(body, body.position, {
              x: dx * force,
              y: dy * force,
            });
          }
        });
      });

      Composite.add(engine.world, [
        ground,
        leftWall,
        rightWall,
        mainWall,
        subWall,
        ...wordBodies,
      ]);

      // 4. 커스텀 렌더링 (화질 보정 및 배경 제거 테두리 박스)
      Events.on(render, "afterRender", () => {
        const ctx = render.context;
        wordBodies.forEach((body) => {
          const { x, y } = body.position;
          const angle = body.angle;
          const label = body.label;

          const fixedWidth = label.length * 18 + 30;
          const fixedHeight = 45;
          const r = 22; // 둥근 모서리

          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);

          // 테두리 박스 그리기
          ctx.beginPath();
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 1.2;
          ctx.roundRect(
            -fixedWidth / 2,
            -fixedHeight / 2,
            fixedWidth,
            fixedHeight,
            r
          );
          ctx.stroke();

          // 글자 그리기
          ctx.font = "500 20px IBM Plex Sans KR";
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(label, 0, 0);

          ctx.restore();
        });
      });

      Render.run(render);

      ScrollTrigger.create({
        trigger: ".vision-section",
        start: "top 60%",
        onEnter: () => {
          Runner.run(runner, engine);
        },
        once: true,
      });

      window.addEventListener("resize", () => {
        if (!container) return;
        render.canvas.width = container.clientWidth;
        render.canvas.height = container.clientHeight;
        const newMainWall = getRectBody(mainTextEl);
        const newSubWall = getRectBody(subTextEl);
        Body.setPosition(mainWall, newMainWall.position);
        Body.setPosition(subWall, newSubWall.position);
        Body.setPosition(ground, {
          x: container.clientWidth / 2,
          y: container.clientHeight + wallThickness / 2,
        });
        Body.setPosition(leftWall, {
          x: -wallThickness / 2,
          y: container.clientHeight / 2,
        });
        Body.setPosition(rightWall, {
          x: container.clientWidth + wallThickness / 2,
          y: container.clientHeight / 2,
        });
      });
    },
  },

  setup() {
    const blobEffect = shallowRef(null); // 분리된 인스턴스를 담을 공간
    const containerRef = ref(null);
    const { x: mouseX, y: mouseY } = useMouse();

    const handleMouseMove = (e) => {
      gsap.to(".box", {
        duration: 0.6,
        rotationY: (i) =>
          45 +
          (i / projects.length) * 206.5 +
          90 * (e.clientX / window.innerWidth),
      });
    };

    const initGSAPProjectList = (container) => {
      if (!container || projects.length === 0) return;
      gsap.set(container, { perspective: 800 });
      projects.forEach((project, i) => {
        const b = document.createElement("div");
        b.classList.add("box");
        b.style.background = `hsl(${(i / projects.length) * 360}, 100%, 50%)`;
        container.appendChild(b);
        gsap.set(b, {
          position: "absolute",
          left: "50%",
          top: "50%",
          x: "-50%",
          y: "-50%",
          z: 600,
          width: 300,
          height: 600,
          borderRadius: 20,
          transformOrigin: "50% 50% 1200%",
          rotationY: 90 + (i / projects.length) * 206.5,
        });
      });
      window.addEventListener("mousemove", handleMouseMove);
    };

    return {
      mouseX,
      mouseY,
      containerRef,
      initGSAPProjectList,
      blobEffect,
      handleMouseMove,
    };
  },

  mounted() {
    // 1. 분리된 Three.js 배경 초기화
    const canvas = document.getElementById("BlobBg");
    if (canvas) {
      this.blobEffect = initBlobBackground(canvas);
    }

    // 2. 타이핑 및 애니메이션 실행
    this.typeEn();
    this.$nextTick(() => {
      this.initBioReveal();
      this.initIntroAnimation();
      this.initHorizontalScroll();
      this.rollingTls = this.initRollingText();
      this.initVisionPhysics();
      if (this.containerRef) this.initGSAPProjectList(this.containerRef);
      // Workflow 마스크 로직 호출 (생략됨, 필요시 추가)
      setTimeout(() => {
        console.log("3D 텍스트 초기화 시도...");
        this.initFocus3DText();
      }, 500);
    });
  },

  beforeUnmount() {
    clearTimeout(this.timer);
    // 1. Three.js 배경 정리 (분리된 파일의 destroy 함수 호출)
    if (this.blobEffect) this.blobEffect.destroy();

    // window.removeEventListener("mousemove", this.handleMouseMove);
    // ScrollTrigger.getAll().forEach((t) => t.kill());
    // this.rollingTls.forEach((tl) => tl.kill());
  },
};
</script>
