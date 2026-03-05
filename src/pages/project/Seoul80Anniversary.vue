<template>
  <q-page class="projectdetailpage-container seoul80page-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/seoul80/visual_pc.jpg"
          alt=""
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/seoul80/visual_m.jpg"
          alt=""
        />
      </div>
      <div class="scroll-icon">
        <span class="font_ibm">SCROLL</span>
        <div class="icon">
          <img src="../../assets/imgs/icon/arrow_down_b9.svg" alt="" />
        </div>
      </div>
    </section>
    <div class="project-body">
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
                class="view-more-btn black"
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
                        stroke="white"
                        stroke-width="2"
                      />
                      <path
                        d="M18.9492 2.1332C18.9492 2.1332 52.7973 2.17174 62.6576 2.17174C72.5178 2.17174 77.868 8.61677 77.868 17.429L77.868 61.2207"
                        stroke="white"
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
        <section class="overview-section font_black">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Overview/&gt;</span>
            <div class="content-wrap">
              <p>
                광복 80주년을 기념해 국민에게 다양한 기념사업 프로그램을
                소개하는 홈페이지 구축 프로젝트입니다. <br />
                방문자가 프로그램 정보를 직관적이고 흥미롭게 탐색할 수 있도록,
                콘텐츠 중심의 UI 구성과 자연스러운 스크롤 인터랙션을
                적용했습니다.
                <br /><br />
                본 프로젝트에서 전체 HTML 구조 설계, 인터랙션 기반 UI 구현, SVG
                지도 연동 기능, 어드민 페이지 UI 작업 등을 담당했습니다. <br />
                특히 스크롤 흐름에 따라 콘텐츠가 자연스럽게 등장하도록 설계해
                단조로운 정보성 페이지의 사용자 피로도를 줄였으며, <br />SVG
                기반 지도를 활용하여 지역별 프로그램을 시각적으로 탐색할 수 있는
                기능을 구현하고, Vue.js 기반 구조를 활용해 핀 클릭 시 관련
                정보를 즉시 노출하는 UX를 설계했습니다.
              </p>
            </div>
          </div>
        </section>
        <section class="task-section">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Task/&gt;</span>
            <div class="content-wrap">
              <ul class="items-5">
                <li>
                  <span class="title font_500"
                    >시맨틱 HTML 웹사이트 구조 설계 및 구축</span
                  >
                  <p class="desc">
                    공공기관 웹사이트 특성을 고려하여 시맨틱 태그 기반의 구조를
                    설계하고, 콘텐츠의 정보 계층이 명확히 드러나도록 마크업을
                    구성했습니다. 접근성과 유지보수를 고려한 구조 설계를 통해
                    콘텐츠 확장 및 수정이 용이한 구조를 구축했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >스크롤 인터랙션 기반 사용자 경험 강화</span
                  >
                  <p class="desc">
                    GSAP ScrollTrigger를 활용하여 스크롤 흐름에 맞춰 콘텐츠가
                    자연스럽게 등장 · 전환되도록 구현했습니다. 사용자의 스크롤
                    행위를 기준으로 정보가 단계적으로 노출되도록 설계하여 콘텐츠
                    몰입도와 가독성을 동시에 향상시켰습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >SVG 기반 지도 인터랙션 구현</span
                  >
                  <p class="desc">
                    SVG 지도 내 핀 요소에 클릭 이벤트를 적용하고, 선택 상태에
                    따라 프로그램 정보가 동적으로 노출되도록 상태 기반 UI를
                    구현했습니다. 핀 활성화와 정보 영역을 연동하여 추가 페이지
                    이동 없이도 직관적으로 콘텐츠를 탐색할 수 있도록
                    설계했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 관리자 페이지 구축</span
                  >
                  <p class="desc">
                    Vue.js와 Quasar Framework를 활용해 행사 소식, 행사 갤러리,
                    Q&A 관리 기능을 포함한 관리자 페이지를 구축했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500">영문 페이지 구축</span>
                  <p class="desc">
                    영문 페이지 구축 국문 사이트와 동일한 구조를 유지하면서
                    콘텐츠만 분리 관리할 수 있도록 설계하여 언어 전환 시에도 UI
                    일관성과 사용자 경험이 유지되도록 구현했습니다.
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
                    >SVG 기반 지도 인터랙션 구현</span
                  >
                  <p class="info-desc">
                    SVG 지도 내 핀 요소에 클릭 이벤트 구조를 설계하고, 사용자가
                    특정 핀을 선택하면 해당 핀의 활성 상태가 즉시 반영되도록
                    상태 기반 클래스 제어를 구현했습니다. <br />핀 선택과 동시에
                    해당 프로그램 정보 영역이 확장되도록 UI를 구성하여, 추가
                    페이지 이동 없이도 상세 정보를 바로 확인할 수 있도록
                    설계했습니다. <br />또한 선택된 정보 영역이 화면 중앙으로
                    자동 스크롤되도록 처리하고, 핀의 활성 상태와 콘텐츠 노출
                    상태를 연동하여 지도와 콘텐츠 간의 관계를 직관적으로 인지할
                    수 있도록 구성했습니다. <br />이를 통해 지도 기반 콘텐츠
                    탐색이 자연스럽게 이어지는 몰입형 인터랙션 경험을
                    구현했습니다.
                  </p>
                </div>
                <div class="contents-wrap tech-visual">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/seoul80/tech01_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/seoul80/tech01_mo.png"
                      alt=""
                      class="mo-img"
                    />
                  </div>
                </div>
              </div>

              <div class="tech-item">
                <div class="tech-info">
                  <span class="info-label font_500"
                    >캐릭터 선택 연동 콘텐츠 전환 UI 구현</span
                  >
                  <p class="info-desc">
                    캐릭터 이미지 요소에 상태 기반 클릭 이벤트를 설계하여,
                    사용자가 특정 캐릭터를 선택하면 해당 설명 콘텐츠가 즉시
                    반영되도록 구현했습니다. <br />선택 상태에 따라 설명 영역이
                    동적으로 변경되도록 구성하여 페이지 이동 없이 여러 캐릭터
                    정보를 비교·탐색할 수 있도록 설계했습니다. <br />또한 선택된
                    캐릭터가 시각적으로 강조되도록 아이콘 및 스타일 상태를
                    연동해 현재 선택 상태를 명확히 인지할 수 있도록 UX를
                    구성했습니다. <br />이를 통해 콘텐츠 소비 흐름이 끊기지 않는
                    자연스럽고 직관적인 인터랙션 구조를 완성했습니다.
                  </p>
                </div>
                <div class="contents-wrap">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/seoul80/tech02_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/seoul80/tech02_mo.png"
                      alt=""
                      class="mo-img"
                    />
                  </div>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <span class="info-label font_500"
                    >Vue.js 기반 관리자 페이지 구축</span
                  >
                  <p class="info-desc">
                    Vue.js와 Quasar Framework를 활용하여 행사 소식, 행사 갤러리,
                    Q&A 답변 기능을 포함한 관리자 시스템을 구축했습니다.
                    <br />목록형 데이터 관리 구조를 설계하고, 게시글
                    등록·수정·삭제 기능을 구현했으며, Q&A 답변 상태 관리 UI를
                    구성했습니다. <br />콘텐츠 유형별로 컴포넌트를 분리해 재사용
                    구조로 설계했으며, 데이터 상태에 따라 UI가 즉시 반영되는
                    구조를 구현하여 운영자가 빠르게 현황을 파악하고 효율적으로
                    관리할 수 있도록 구성했습니다.
                  </p>
                </div>
                <div class="contents-wrap">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/seoul80/tech03_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/seoul80/tech03_mo.png"
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
  name: "Seoul80Anniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "seoul80"),
    };
  },
});
</script>
