<template>
  <q-page class="projectdetailpage-container picorporationpage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/pi/visual_pc.jpg"
          alt="PC Visual"
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/pi/visual_m.jpg"
          alt="Mobile Visual"
        />
      </div>
      <div class="scroll-icon">
        <span class="font_ibm text_w">SCROLL</span>
        <div class="icon">
          <img src="../../assets/imgs/icon/arrow_down_w.svg" alt="" />
        </div>
      </div>
    </section>

    <div class="project-body is-dark">
      <section class="summary-section">
        <div class="wrapper">
          <div class="project-info">
            <div class="info-header">
              <span class="sub-title font_ibm">{{ project.description }}</span>
              <h2 class="main-title font_500">{{ project.name }}</h2>
            </div>

            <div class="info-action">
              <a
                v-if="project.link"
                :href="project.link"
                target="_blank"
                class="view-more-btn"
              >
                <div class="icon">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_833_1970"
                      style="mask-type: luminance"
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="80"
                      height="80"
                    >
                      <path
                        d="M79.5 79.5H0.5V0.5H79.5V79.5Z"
                        fill="white"
                        stroke="white"
                      />
                    </mask>
                    <g mask="url(#mask0_833_1970)">
                      <path
                        d="M73.9297 6.53631L2.65234 77.8926"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                      <path
                        d="M18.9492 2.1332C18.9492 2.1332 52.7973 2.17174 62.6576 2.17174C72.5178 2.17174 77.868 8.61677 77.868 17.429L77.868 61.2207"
                        stroke="currentColor"
                        stroke-width="2"
                      />
                    </g>
                  </svg>
                </div>
                <span class="font_ibm">View site</span>
              </a>
            </div>
          </div>

          <ul class="info-meta-list">
            <li class="meta-item">
              <span class="label font_ibm">Category</span>
              <span class="value font_ibm">{{
                project.category.join(" / ")
              }}</span>
            </li>
            <li class="meta-item">
              <span class="label font_ibm">Role</span>
              <span class="value font_ibm">{{ project.role.join(", ") }}</span>
            </li>
            <li class="meta-item">
              <span class="label font_ibm">Date</span>
              <span class="value font_ibm">{{ project.date }}</span>
            </li>
            <li class="meta-item item-skills">
              <span class="label font_ibm">Skills</span>
              <div class="skill-tag-group">
                <span
                  v-for="skill in project.skills"
                  :key="skill"
                  class="skill-tag font_ibm"
                >
                  {{ skill }}
                </span>
              </div>
            </li>
            <li class="meta-item item-task" v-if="project.tasks">
              <span class="label font_ibm">Task</span>
              <ul class="task-list">
                <li
                  v-for="(task, index) in project.tasks"
                  :key="index"
                  class="font_ibm"
                >
                  {{ task }}
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
      <div class="contents-section-container">
        <section class="overview-section">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Overview/&gt;</span>
            <div class="content-wrap">
              <p>
                크리에이티브 인플루언서 매니지먼트사, 피아이코퍼레이션(PI
                Corporation)의 공식 웹사이트 구축 프로젝트입니다. <br />단순한
                정보 전달형 홈페이지가 아닌, 3D 인터랙션과 스크롤 기반 모션을
                통해 브랜드 스토리를 동적으로 표현하고 사용자에게 몰입감 있는
                탐색 경험을 제공하는 것을 목표로 설계되었습니다.
                <br /><br />프로젝트 전반의 사용자 페이지 퍼블리싱을 담당했으며,
                협업 환경에서 약 80% 이상의 구현 작업을 수행했습니다.
                <br />시맨틱 마크업 기반의 구조 설계와 반응형 레이아웃 구축을
                중심으로, 인터랙션 구현 및 UI 디테일 작업을 주도적으로
                진행했습니다. <br />또한 Three.js 기반 3D 오브젝트 인터랙션과
                스크롤 트리거 모션을 적용하여 브랜드 콘셉트를 시각적으로
                강화했으며, Google Translate API 연동을 통해 다국어 자동화
                구조를 구축해 글로벌 확장성과 운영 효율성을 고려한 웹사이트로
                완성했습니다.
              </p>
            </div>
          </div>
        </section>
        <section class="task-section">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Task/&gt;</span>
            <div class="content-wrap">
              <ul class="items-4">
                <li>
                  <span class="title font_500"
                    >시맨틱 HTML 웹사이트 구조 설계 및 구축</span
                  >
                  <p class="desc">
                    프로젝트 전반의 정보 구조를 분석하고, 시맨틱 태그를 활용해
                    콘텐츠 계층이 명확히 드러나는 마크업 구조를 설계했습니다.
                    SEO, 접근성, 유지보수를 고려한 안정적인 레이아웃 기반을
                    구축했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Three.js 기반 3D 인터랙션 구현
                  </span>
                  <p class="desc">
                    브랜드 콘셉트를 시각적으로 표현하기 위해 Three.js를 활용해
                    행성(Sphere) 오브젝트를 직접 구성하고,마우스 및 스크롤
                    입력에 반응하는 3D 인터랙션을 구현했습니다. 단순한 시각
                    효과가 아닌, 브랜드 세계관을 전달하는 핵심 인터랙션 요소로
                    설계했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >스크롤 기반 모션 인터랙션 및 반응형 UI 구현
                  </span>
                  <p class="desc">
                    스크롤 트리거 기반 인터랙션을 적용해 페이지 전반에 동적인
                    흐름을 설계했습니다. 수치 카운트업 애니메이션, 로고 축소 후
                    영상 전환, 카드 Hover 시 요소 순차 노출, 섹션별 타임라인
                    등장 효과를 구현하여 정적인 정보 나열이 아닌 리듬감 있는 UI
                    경험을 구축했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Google Translate API 연동을 통한 글로벌 다국어 자동화
                    구축</span
                  >
                  <p class="desc">
                    Google Translate API를 연동하여 언어 전환을 자동화하고,
                    콘텐츠 변경 시 별도 번역 페이지 작업 없이 반영 가능한 구조로
                    설계했습니다. 운영 효율성과 확장성을 고려한 글로벌 대응
                    시스템을 구현했습니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="technical-section">
          <div class="wrapper">
            <span class="section-title font_ibm"
              >&lt;Technical Details/&gt;</span
            >
            <div class="tech-container">
              <div class="tech-item">
                <div class="tech-info">
                  <span class="info-label font_500"
                    >Three.js를 활용한 행성 모델링 및 3D 인터랙션 구현</span
                  >
                  <p class="info-desc">
                    Three.js를 활용해 About 섹션 상단에 3D Sphere 오브젝트를
                    배치하고, PerspectiveCamera + WebGLRenderer 기반의 렌더링
                    환경을 직접 구성했습니다. <br />Scene / Camera / Light /
                    Mesh를 역할별로 분리하여 확장 가능한 구조로 설계했으며,
                    AmbientLight와 SpotLight를 조합해 기본 광원과 포인트 조명을
                    분리 구성했습니다. <br />GSAP을 활용해 스크롤 위치에 따라
                    조명 강도와 오브젝트 상태가 변화하도록 제어하여 사용자의
                    스크롤 흐름에 맞춰 장면 분위기가 자연스럽게 전환되도록
                    구현했습니다.
                  </p>
                </div>
                <div class="contents-wrap tech-visual">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/pi/tech01_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/pi/tech01_mo.png"
                      alt=""
                      class="mo-img"
                    />
                  </div>
                </div>
              </div>

              <div class="tech-item">
                <div class="tech-info">
                  <span class="info-label font_500"
                    >스크롤 기반 모션 인터랙션 및 사용자 반응형 UI 구현</span
                  >
                  <p class="info-desc">
                    페이지 전반에 걸쳐 스크롤과 사용자 행동에 반응하는
                    인터랙션을 적극적으로 적용하여, 정적인 정보 전달이 아닌
                    몰입감 있는 탐색 경험을 제공하는 UI 흐름을 구축했습니다.
                    <br />
                    스크롤 진입 시에는 수치 정보가 목표 값까지 자연스럽게
                    증가하는 카운트업 애니메이션을 적용해 성과 데이터를
                    시각적으로 인지할 수 있도록 구성했고,로고가 축소되며 영상
                    콘텐츠로 전환되는 인터랙션을 설계해 브랜드 아이덴티티를
                    강조한 뒤 콘텐츠로 자연스럽게 이어지도록 했습니다.
                    <br />또한 카드 UI에는 Hover 시 타이틀과 SNS 아이콘이
                    순차적으로 노출되는 구조를 적용하여, 정보의 우선순위에 따라
                    시선이 흐르도록 설계하고, 사용자가 콘텐츠를 보다 직관적으로
                    탐색할 수 있는 인터랙션 경험을 구현했습니다.
                  </p>
                </div>
                <div class="contents-wrap">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/pi/tech02_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/pi/tech02_mo.png"
                      alt=""
                      class="mo-img"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { projects } from "src/data/projects";

export default defineComponent({
  name: "PiCorporation",
  data() {
    return {
      project: projects.find((p) => p.id === "picorporation"),
    };
  },
});
</script>
