<template>
  <q-page class="aboutpage-container">
    <section class="visual-section">
      <div class="gradient-overlay"></div>
      <canvas id="BlobBg"></canvas>
      <div class="wrapper">
        <div class="contents-wrap">
          <div class="title-wrap">
            <div class="keyworld-wrap">
              <span class="bracket font_ibm font_500">&lt;/</span>
              <span class="typing-text font_ibm font_500">{{
                currentEnText
              }}</span>
              <span class="bracket font_ibm font_500">&gt;</span>
            </div>
            <span class="stac-text font_ibm">Publisher</span>
          </div>
          <div class="intro-text">
            <span>안녕하세요! 최적의 디지털 경험을 설계하는 </span>
            <span>퍼블리셔, 이윤정입니다.</span>
          </div>
          <div class="scroll-icon">
            <span class="font_ibm">SCROLL</span>
            <div class="icon">
              <img src="../assets/imgs/icon/arrow_down_b9.svg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="profile-section">
      <div class="wrapper">
        <div class="title">
          <h2 class="font_ibm">
            기획을 디자인하고 <br class="m-br" />코드로 완성하는, <br />
            디자인하는 퍼블리셔 이윤정입니다.
          </h2>
          <div class="profile-img">
            <img
              src="../assets/imgs/about/profile_img01.png"
              alt="이윤정 프로필 사진"
            />
          </div>
        </div>
        <div class="content-wrap">
          <div class="info-area">
            <div class="sub-section personal">
              <h3 class="font_mon font_700">
                {{ profileData.personal.title }}
              </h3>
              <ul class="info-list">
                <li
                  v-for="item in profileData.personal.items"
                  :key="item.label"
                  class="item"
                >
                  <dt class="font_mon font_600 label">{{ item.label }}</dt>
                  <dd class="font_ibm value">{{ item.value }}</dd>
                </li>
              </ul>
            </div>

            <div class="sub-section experience">
              <h3 class="font_mon font_700">Experience</h3>
              <ul class="info-list">
                <li v-for="exp in profileData.experience" :key="exp.date">
                  <span class="date font_mon">{{ exp.date }}</span>
                  <span class="text font_ibm">{{ exp.text }}</span>
                </li>
              </ul>
            </div>

            <div class="sub-section education">
              <h3 class="font_mon font_700">Education</h3>
              <ul class="info-list">
                <li v-for="edu in profileData.education" :key="edu.date">
                  <span class="date font_mon">{{ edu.date }}</span>
                  <span class="text font_ibm">{{ edu.text }}</span>
                </li>
              </ul>
            </div>

            <div class="sub-section activities">
              <h3 class="font_mon font_700">Campus Activities</h3>
              <ul class="info-list">
                <li v-for="act in profileData.activities" :key="act.date">
                  <span class="date font_mon">{{ act.date }}</span>
                  <span class="text font_ibm">{{ act.text }}</span>
                </li>
              </ul>
            </div>

            <div class="sub-section license">
              <h3 class="font_mon font_700">License</h3>
              <ul class="info-list">
                <li v-for="license in profileData.licenses" :key="license.date">
                  <span class="date font_mon">{{ license.date }}</span>
                  <span class="text font_ibm">{{ license.text }}</span>
                </li>
              </ul>
            </div>

            <div class="sub-section skills">
              <h3 class="font_mon font_700">Skills</h3>
              <div class="skills-wrap">
                <span
                  v-for="skill in profileData.skills"
                  :key="skill"
                  class="skill-item font_mon"
                >
                  {{ skill }}
                </span>
              </div>
            </div>
          </div>

          <div class="profile-img">
            <img
              src="../assets/imgs/about/profile_img01.png"
              alt="이윤정 프로필 사진"
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
                playsinline
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
                playsinline
                src="../assets/video/bio02.mp4"
              ></video>
            </div>
          </div>
          <div class="bio-row row03">
            <span class="bio-text font_ibm font_400"
              >delivering optimal <br class="m-br" />digital experiences.</span
            >
          </div>
          <div class="bio-row row04">
            <span class="bio-text font_ibm font_400">Defining the web</span>
            <div class="video-box">
              <video
                autoplay
                muted
                loop
                playsinline
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
              Curiosity about how <br class="m-br" />design is implemented
              <br />on the web led me <br class="m-br" />to start my career
              <br />as a publisher.
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
                <div class="text-area">
                  <div class="title-wrap">
                    <h2 class="font_ibm font_400">&lt;Identity/&gt;</h2>
                    <p class="font_400">
                      단순히 보이는 화면을 만드는 것이 아니라, <br />시간이
                      지나도 유지되고 확장될 수 있는 코드를 고민합니다.
                    </p>
                  </div>
                  <div class="icon-list">
                    <div class="icon-item">
                      <img
                        src="../assets/imgs/about/identity01.png"
                        alt="아이콘1"
                      />
                    </div>
                    <div class="icon-item">
                      <img
                        src="../assets/imgs/about/identity02.png"
                        alt="아이콘2"
                      />
                    </div>
                    <div class="icon-item">
                      <img
                        src="../assets/imgs/about/identity03.png"
                        alt="아이콘3"
                      />
                    </div>
                    <div class="icon-item">
                      <img
                        src="../assets/imgs/about/identity04.png"
                        alt="아이콘4"
                      />
                    </div>
                  </div>
                  <!-- <div class="scrolling-svg-text">
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
                  </div> -->
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
                  <div class="code-greeting">
                    <span class="font_ibm font_500">&gt; Hello,</span>
                    <span class="font_ibm font_500">world !</span>
                  </div>
                  <div class="code-symbol">
                    <span class="font_ibm">&lt;/&gt;</span>
                  </div>
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
    <section class="skills-section" ref="skillsSection">
      <div class="fixed-area">
        <h2 class="section-title font_ibm">&lt;/Skills&gt;</h2>
        <span class="bg-title font_ibm font_500" ref="bgTitle"></span>
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
      <div class="project-header">
        <span class="sub-title font_ibm">SELECTED</span>
        <h2 class="main-title font_mon">PROJECT</h2>
      </div>

      <div class="swiper project-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide project-item">
            <div class="thumb">
              <img
                src="../../src/assets/imgs/projects/herue/thumb01.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-slide project-item">
            <div class="thumb">
              <img
                src="../../src/assets/imgs/projects/kmusical/thumb01.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-slide project-item">
            <div class="thumb">
              <img
                src="../../src/assets/imgs/projects/hanwhalife/thumb01.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-slide project-item">
            <div class="thumb">
              <img
                src="../../src/assets/imgs/projects/seoul80/thumb01.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-slide project-item">
            <div class="thumb">
              <img
                src="../../src/assets/imgs/projects/rebound/thumb01.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="swiper-slide project-item">
            <div class="thumb">
              <img src="../../src/assets/imgs/projects/pi/thumb01.jpg" alt="" />
            </div>
          </div>
          <div class="swiper-slide project-item">
            <div class="thumb">
              <img
                src="../../src/assets/imgs/projects/louche9/thumb01.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="more-btn-wrap">
        <router-link to="/projects" class="more-btn font_ibm">
          MORE THE PROJECT
        </router-link>
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
import Swiper from "swiper";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

gsap.registerPlugin(ScrollTrigger);

export default {
  name: "AboutPage",

  data() {
    return {
      texts: [
        { en: "User-Centric" },
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
      horizontalScrollTween: null,
      visionInstance: null,
      handleResize: null,
      profileData: {
        personal: {
          title: "Personal Information",
          items: [
            { label: "Name", value: "이윤정" },
            { label: "Birth", value: "1998.05.15" },
            { label: "Tel", value: "010-2717-5354" },
            { label: "Email", value: "dbswjd2825@naver.com" },
          ],
        },
        experience: [
          { date: "2024.07 ~", text: "(주)크레딧 웹퍼블리셔" },
          { date: "2021.10 - 2023.10", text: "의료법인혜원의료재단 사무" },
        ],
        education: [
          {
            date: "2023.12 - 2024.04",
            text: "이지디자인컴퓨터학원 교육\n[웹디자인&웹퍼블리싱 UI/UX 콘텐츠개발]",
          },
          { date: "2017.03 - 2021.02", text: "청주대학교 의료경영학과 전공" },
          { date: "2014.03 - 2017.02", text: "충북여자고등학교" },
        ],
        activities: [
          { date: "2019.03 - 2020.02", text: "청주대학교 총학생회 홍보부장" },
          {
            date: "2018.03 - 2019.02",
            text: "청주대학교 동아리연합회 홍보차장",
          },
        ],
        licenses: [
          { date: "2024.04", text: "웹디자인기능사" },
          { date: "2024.02", text: "GTQ그래픽기술자격 1급" },
          { date: "2021.07", text: "운전면허 2종 보통" },
          { date: "2021.03", text: "보건의료정보관리사" },
          { date: "2020.11", text: "사회조사분석사(2급)" },
        ],
        skills: [
          "html5",
          "css",
          "JavaScript",
          "Vue.js",
          "SCSS",
          "GSAP",
          "Figma",
          "XD",
          "Photoshop",
          "Illustrator",
        ],
      },
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

        // 💡 수정된 부분: <br> 태그와 그 안의 속성(class 등)까지 모두 캡처하도록 정규식 변경
        const parts = content.split(/(<br[^>]*>)/i);

        parts.forEach((part) => {
          if (part.toLowerCase().startsWith("<br")) {
            // 분리된 part가 <br ...> 형태라면 HTML로 직접 삽입
            target.innerHTML += part;
          } else {
            // 일반 텍스트일 경우에만 한 글자씩 쪼개서 span 생성
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

    // 가로 스크롤 메인 제어 (모든 내부 애니메이션의 기준)
    initHorizontalScroll() {
      const horiSection = document.querySelector(".horizontal-section");
      const horiInner = document.querySelector(".horizontal-inner");
      const planet = document.querySelector(".planet-sphere");

      if (!horiSection || !horiInner) return;

      let mm = gsap.matchMedia();

      // ✅ 768px 이상: 모든 효과 활성화
      mm.add("(min-width: 768px)", () => {
        // 1. 가로 스크롤 본체
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

        // 2. 등장 애니메이션 (reveal-text)
        const revealSections = document.querySelectorAll(".one-page");
        revealSections.forEach((section) => {
          const elements = section.querySelectorAll(
            ".reveal-text h2, .reveal-text p"
          );
          if (elements.length > 0) {
            gsap.to(elements, {
              clipPath: "inset(0 0% 0 0)",
              duration: 1.2,
              stagger: 0.3,
              ease: "power2.inOut",
              scrollTrigger: {
                trigger: section,
                containerAnimation: scrollTween,
                start: "left 70%",
                toggleActions: "play none none reverse",
              },
            });
          }

          // 3. 워크플로우 태그 등장
          const tags = section.querySelectorAll(".workflow-tags .tag");
          if (tags.length > 0) {
            gsap.fromTo(
              tags,
              { opacity: 0, x: 50 },
              {
                opacity: 1,
                x: 0,
                duration: 0.8,
                stagger: 0.4,
                ease: "back.out(1.2)",
                scrollTrigger: {
                  trigger: section,
                  containerAnimation: scrollTween,
                  start: "left 40%",
                  toggleActions: "play none none reverse",
                },
              }
            );
          }
        });

        // 4. 배경색 및 행성 효과
        ScrollTrigger.create({
          trigger: ".focus-section",
          containerAnimation: scrollTween,
          start: "left 60%",
          onEnter: () => {
            gsap.to(horiSection, { backgroundColor: "#000000", duration: 0.8 });
            if (planet)
              gsap.to(planet, { opacity: 1, scale: 1, duration: 1.2 });
          },
          onLeaveBack: () => {
            gsap.to(horiSection, { backgroundColor: "#ffffff", duration: 0.8 });
            if (planet)
              gsap.to(planet, { opacity: 0, scale: 0.5, duration: 0.8 });
          },
        });

        // 5. 기타 가로 스크롤 종속 메서드 호출
        this.initIdentityAnimation(scrollTween);
        this.initExperienceFloating(scrollTween);

        // ✅ 리턴 함수: 모바일로 돌아올 때 모든 스타일 초기화 (핵심)
        return () => {
          gsap.set(".reveal-text h2, .reveal-text p", { clearProps: "all" });
          gsap.set(".workflow-tags .tag", { clearProps: "all" });
          gsap.set(horiInner, { clearProps: "all" });
          gsap.set(horiSection, { clearProps: "all" });
          if (planet) gsap.set(planet, { clearProps: "all" });
        };
      });

      mm.add("(max-width: 767px)", () => {
        // 1. 초기 상태 설정 (클립패스 제거 및 아래로 살짝 내림)
        const fadeElements = document.querySelectorAll(
          ".one-page .reveal-text h2, .one-page .reveal-text p, .one-page .workflow-tags .tag"
        );

        gsap.set(fadeElements, {
          opacity: 0,
          y: 40,
          clipPath: "none",
          visibility: "visible",
        });

        // 2. 스크롤 시 Fade-Up (Batch 사용으로 성능 최적화)
        ScrollTrigger.batch(fadeElements, {
          start: "top 90%", // 화면 하단에서 10% 올라왔을 때 실행
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.15,
              ease: "power2.out",
              overwrite: true,
            });
          },
        });

        // 3. Identity 아이콘 등 기타 요소도 동일하게 적용 가능
        const iconItems = document.querySelectorAll(".icon-item");
        gsap.set(iconItems, { opacity: 0, scale: 0.8 });

        ScrollTrigger.batch(iconItems, {
          start: "top 85%",
          onEnter: (batch) => {
            gsap.to(batch, {
              opacity: 1,
              scale: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "back.out(1.7)",
            });
          },
        });

        const focusSection = document.querySelector(".focus-section");
        const horiSection = document.querySelector(".horizontal-section");

        if (focusSection && horiSection) {
          ScrollTrigger.create({
            trigger: focusSection,
            start: "top 50%", // 섹션의 상단이 화면 중간에 왔을 때
            end: "bottom 50%", // 섹션의 하단이 화면 중간을 지나갈 때
            onEnter: () => {
              gsap.to(horiSection, {
                backgroundColor: "#0E0E0E",
                duration: 0.8,
              });
            },
            onEnterBack: () => {
              // 아래에서 위로 다시 올라올 때 블랙으로
              gsap.to(horiSection, {
                backgroundColor: "#0E0E0E",
                duration: 0.8,
              });
            },
            onLeaveBack: () => {
              // 맨 위로 돌아가면 다시 흰색으로
              gsap.to(horiSection, {
                backgroundColor: "#ffffff",
                duration: 0.8,
              });
            },
          });
        }
      });
    },
    initFocus3DText() {
      const textElement = this.$refs.focusTxt;
      if (!textElement) return;

      const rawText = textElement.textContent.trim();
      const characters = rawText.split("");
      textElement.innerHTML = "";

      const isMobile = window.innerWidth < 768;
      const winW = window.innerWidth;

      // 1. 회전 반경 설정 (모바일에서 구가 너무 커지지 않게 상한선)
      let radiusVal = isMobile
        ? Math.max(100, characters.length * 8)
        : Math.max(200, characters.length * 15);

      if (isMobile && radiusVal > winW * 0.35) {
        radiusVal = winW * 0.35;
      }

      const radius = -radiusVal;
      const duration = 25;

      // 2. 구(Sphere) 생성
      const sphere = document.createElement("div");
      sphere.className = "sphere";
      // 구체 크기를 반경보다 약간 작게 해서 글자가 구체를 '감싸도록' 설계
      const sphereSize = radiusVal * 1.8;

      Object.assign(sphere.style, {
        position: "absolute",
        left: "50%",
        top: "50%",
        width: `${sphereSize}px`,
        height: `${sphereSize}px`,
        background:
          "radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.02))",
        borderRadius: "50%",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(2px)",
        // ✅ 핵심: 구체를 Z축 뒤로 아주 멀리 밀어냅니다. (-200px 이상)
        // 이렇게 해야 회전하는 글자가 구체 앞쪽 공간을 확보할 수 있습니다.
        transform: `translate(-50%, -50%) translateZ(${
          isMobile ? -250 : -300
        }px)`,
        zIndex: 0,
        pointerEvents: "none",
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
          // ✅ 글자의 회전 중심축 설정
          transformOrigin: `50% 50% ${radius}px`,
          transformStyle: "preserve-3d",
          color: "#fff",
          fontSize: isMobile ? "12px" : "18px",
          fontWeight: "500",
          // ✅ 글자가 어떤 상황에서도 구체보다 앞에 보이도록 높은 z-index 부여
          zIndex: 10,
          pointerEvents: "none",
          backfaceVisibility: "visible",
        });
        textElement.appendChild(span);
        return span;
      });

      // 4. 전체 컨테이너 설정
      gsap.set(textElement, {
        rotationZ: 15,
        rotationX: 10,
        transformStyle: "preserve-3d",
        // ✅ 원근감을 높여서 앞뒤 거리감을 확실하게 줍니다.
        perspective: isMobile ? "1000px" : "1500px",
      });

      // 5. 애니메이션 로직
      const mainTl = gsap.timeline({ repeat: -1 });
      charElements.forEach((char, i) => {
        const startAngle = (i / charElements.length) * 360;
        mainTl.fromTo(
          char,
          {
            rotationY: startAngle,
            xPercent: -50,
            yPercent: -50,
            // 시작 시점에 살짝 앞으로 당겨주는 초기값 (필요시)
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

    // 2. Identity 섹션 애니메이션
    initIdentityAnimation(scrollTween) {
      const identitySec = document.querySelector(".identity-section");
      if (!identitySec) return;

      const titleTexts = identitySec.querySelectorAll(
        ".title-wrap h2, .title-wrap p"
      );
      const iconItems = identitySec.querySelectorAll(".icon-item");

      // 1. 초기 상태 설정
      gsap.set(titleTexts, { opacity: 0, y: 30 });
      gsap.set(iconItems, { opacity: 0, scale: 0.5, y: 20 });

      // 2. 타임라인 생성
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: identitySec,
          containerAnimation: scrollTween,
          start: "left 70%",
          toggleActions: "play none none reverse",
        },
      });

      tl.to(titleTexts, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
      }).to(
        iconItems,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.15, // ✅ 순차적으로 나타남
          ease: "back.out(1.7)",
          // ✅ 등장이 완료되면 CSS 클래스 추가하여 둥둥 효과 시작
          onComplete: () => {
            iconItems.forEach((item) => item.classList.add("is-floating"));
          },
        },
        "-=0.3"
      );
    },

    initExperienceFloating(scrollTween) {
      const container = document.querySelector(".experience-section .img-wrap");
      if (!container) return;

      const macbook = container.querySelector(".macbook-img");
      const symbol = container.querySelector(".code-symbol");
      const greeting = container.querySelector(".code-greeting");

      // 1. [등장] yPercent를 사용하여 위치 충돌을 방지합니다.
      // CSS의 원래 위치(bottom 5%)를 0으로 잡고, 아래(150%)에서 올라오게 합니다.
      gsap.fromTo(
        [macbook, symbol, greeting],
        {
          yPercent: 150, // y 대신 yPercent 사용 (CSS 위치 기준 아래쪽)
          opacity: 0,
          scale: 0.5,
        },
        {
          yPercent: 0, // 제자리로 도착
          opacity: 1,
          scale: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "back.out(1.5)",
          scrollTrigger: {
            trigger: ".experience-section",
            containerAnimation: scrollTween,
            start: "left 75%",
            toggleActions: "play none none reverse",
            // 나타나는 도중에 둥둥 모션이 섞이지 않도록 완료 후 실행
            onComplete: () => startFloating(),
          },
        }
      );

      // 2. [둥둥] y 값을 상대값("-=20")으로 조절
      const startFloating = () => {
        // 이미 애니메이션이 돌고 있다면 중복 방지
        if (gsap.getTweensOf(macbook).length > 1) return;

        // 맥북 본체
        gsap.to(macbook, {
          y: "-=25",
          duration: 3,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        // 코드 심볼
        gsap.to(symbol, {
          y: "+=30",
          x: "-=15",
          rotation: "-=8",
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.2,
        });

        // 인사말
        gsap.to(greeting, {
          y: "-=35",
          x: "+=20",
          rotation: "+=5",
          duration: 4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: 0.4,
        });
      };
    },
    initSkillsAnimation() {
      const section = this.$refs.skillsSection;
      const cards = gsap.utils.toArray(".skill-card");
      const bgTitle = this.$refs.bgTitle;
      const projectSection = document.querySelector(".project-section");

      if (!section || cards.length === 0 || !bgTitle || !projectSection) return;

      // 초기 세팅: projectSection을 미리 아래에 대기시킴 (덮는 효과를 위해)
      gsap.set(projectSection, { y: "100vh" });
      gsap.set(cards, { y: "110vh" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          // ⭐ 여백 방지: 카드가 6개 기준이면 약 600% 정도가 적당합니다.
          // 너무 길면 마지막에 빈 공간이 남고, 짧으면 덮기 전에 스크롤이 끝납니다.
          end: `+=${cards.length * 90}%`,
          pin: true,
          scrub: 0.5,
          pinSpacing: true,
          onRefresh: (self) => {
            // 새로고침 시 위치 재계산
            if (self.progress > 0) self.animation.progress(1);
          },
        },
      });

      // 1 & 2. 스킬 카드 순차 애니메이션
      cards.forEach((card, index) => {
        const isLast = index === cards.length - 1;
        const startTime = index * 1.5;

        if (!isLast) {
          tl.to(
            card,
            {
              y: 0,
              duration: 1,
              ease: "none",
              onStart: () =>
                this.animateBgTitle(card.getAttribute("data-title")),
              onReverseComplete: () => {
                const prevTitle =
                  index > 0 ? cards[index - 1].getAttribute("data-title") : "";
                this.animateBgTitle(prevTitle);
              },
            },
            startTime
          ).to(card, { y: "-100vh", duration: 1, ease: "none" }, "+=0.3");
        } else {
          // 마지막 카드 등장
          tl.to(
            card,
            {
              y: 0,
              duration: 1,
              ease: "none",
              onStart: () =>
                this.animateBgTitle(card.getAttribute("data-title")),
            },
            startTime
          );
        }
      });

      // ⭐ 3. 프로젝트 섹션이 아래(100vh)에서 위(0)로 올라오며 스킬 섹션을 완전히 덮음
      // 타임라인의 가장 마지막에 배치하여 이 동작이 끝날 때 스크롤도 끝나게 함
      tl.to(
        projectSection,
        {
          y: 0, // 덮으면서 올라옴
          duration: 2,
          ease: "power2.inOut",
          onStart: () => {
            // 덮이기 시작할 때 타이틀 애니메이션 정리 (필요시)
          },
          onReverseComplete: () => {
            const lastTitle =
              cards[cards.length - 1].getAttribute("data-title");
            this.animateBgTitle(lastTitle);
          },
        },
        "+=0.2"
      );
    },
    animateBgTitle(text) {
      const bgTitle = this.$refs.bgTitle;
      if (!bgTitle || bgTitle.innerText === text) return;

      gsap.killTweensOf(bgTitle);

      gsap.to(bgTitle, {
        opacity: 0.05,
        duration: 0.2,
        onComplete: () => {
          bgTitle.innerText = text;
          gsap.to(bgTitle, {
            opacity: 1,
            duration: 0.3,
            ease: "none",
          });
        },
      });
    },
    initProjectSwiper() {
      // 중복 생성 방지
      if (this.swiperInstance) {
        this.swiperInstance.destroy(true, true);
      }

      this.swiperInstance = new Swiper(".project-swiper", {
        modules: [Pagination, Autoplay, FreeMode],
        freeMode: {
          enabled: true,
          momentum: false,
        },
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        spaceBetween: 15,
        loop: true,
        loopedSlides: 6,
        loopPreventsSliding: false,
        speed: 5000,
        autoplay: {
          delay: 0,
          disableOnInteraction: false,
        },
        observer: true,
        observeParents: true,
        breakpoints: {
          768: {
            spaceBetween: 30,
          },
        },
      });
    },
    initVisionPhysics() {
      const container = this.$refs.canvasContainer;
      const mainTextEl = document.querySelector(".main-text");
      const subTextEl = document.querySelector(".sub-text");
      if (!container || !mainTextEl || !subTextEl) return;

      const { Engine, Render, Runner, Bodies, Composite, Events, Body } =
        Matter;

      // 1. 엔진 및 러너 생성
      const engine = Engine.create();
      const runner = Runner.create();

      // ⭐ [중요] 초기 로드 시 엔진이 멋대로 돌아가지 않게 물리 연산을 비활성화합니다.
      runner.enabled = false;

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

      // 2. 벽 생성 로직 (기존과 동일)
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

      // 3. 단어 객체 생성 (초기 위치는 화면 밖 아주 멀리)
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
          -2000, // 로드 시 절대 보이지 않게 처리
          word.length * 18 + 30,
          45,
          {
            restitution: 0.5,
            render: { fillStyle: "transparent", strokeStyle: "transparent" },
            friction: 0.1,
            label: word,
            chamfer: { radius: 22 },
          }
        );
      });

      Composite.add(engine.world, [
        ground,
        leftWall,
        rightWall,
        mainWall,
        subWall,
        ...wordBodies,
      ]);

      // 4. 커스텀 렌더링 (기존 유지)
      Events.on(render, "afterRender", () => {
        const ctx = render.context;
        wordBodies.forEach((body) => {
          const { x, y } = body.position;
          const { angle, label } = body;
          const fixedWidth = label.length * 18 + 30;
          const fixedHeight = 45;
          ctx.save();
          ctx.translate(x, y);
          ctx.rotate(angle);
          ctx.beginPath();
          ctx.strokeStyle = "#ffffff";
          ctx.lineWidth = 1.2;
          ctx.roundRect(
            -fixedWidth / 2,
            -fixedHeight / 2,
            fixedWidth,
            fixedHeight,
            22
          );
          ctx.stroke();
          ctx.font = "500 20px IBM Plex Sans KR";
          ctx.fillStyle = "#ffffff";
          ctx.textAlign = "center";
          ctx.textBaseline = "middle";
          ctx.fillText(label, 0, 0);
          ctx.restore();
        });
      });

      // 5. 렌더러는 미리 켜두되, 엔진은 끈 상태 유지
      Render.run(render);

      // 6. ⭐ ScrollTrigger - 이 섹션이 실제로 '화면 안'으로 들어올 때만 가동
      ScrollTrigger.create({
        trigger: ".vision-section",
        start: "top 70%", // 섹션이 화면 하단에서 30% 정도 올라왔을 때
        onEnter: () => {
          // 1) 단어들을 다시 낙하 대기 위치로 순간이동
          wordBodies.forEach((body, i) => {
            Body.setPosition(body, {
              x: Math.random() * (container.clientWidth - 100) + 50,
              y: -100 - i * 150,
            });
            Body.setVelocity(body, { x: 0, y: 0 }); // 속도 초기화
          });

          // 2) 이제야 엔진을 켜고 낙하를 시작함
          runner.enabled = true;
          Runner.run(runner, engine);
        },
        once: true, // 한 번만 실행
      });

      return {
        engine,
        runner,
        render,
        stop() {
          Matter.Render.stop(render);
          Matter.Runner.stop(runner);
          Matter.World.clear(engine.world);
          Matter.Engine.clear(engine);
          render.canvas.remove();
        },
      };
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
    history.scrollRestoration = "manual";
    this.animateBgTitle("HMTL");

    const canvas = document.getElementById("BlobBg");
    if (canvas) {
      this.blobEffect = initBlobBackground(canvas);
    }

    this.typeEn();

    this.$nextTick(() => {
      this.initBioReveal();
      this.initIntroAnimation();
      this.initHorizontalScroll();
      this.initSkillsAnimation();
      this.initRollingText();

      if (this.containerRef) this.initGSAPProjectList(this.containerRef);

      this.visionInstance = this.initVisionPhysics();

      setTimeout(() => {
        ScrollTrigger.refresh();
        this.initFocus3DText();
        this.initProjectSwiper();
      }, 100);
    });

    this.handleResize = () => {
      clearTimeout(this.resizeTimer);
      this.resizeTimer = setTimeout(() => {
        if (this.visionInstance) {
          this.visionInstance.stop();
          this.visionInstance = null;
        }
        this.visionInstance = this.initVisionPhysics();
        ScrollTrigger.refresh();
      }, 300);
    };

    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount() {
    clearTimeout(this.timer);
    clearTimeout(this.resizeTimer);

    if (this.blobEffect) this.blobEffect.destroy();
    if (this.visionInstance) this.visionInstance.stop();

    window.removeEventListener("resize", this.handleResize);
  },
};
</script>
