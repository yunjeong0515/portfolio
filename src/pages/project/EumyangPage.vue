<template>
  <q-page class="projectdetailpage-container eumyangpage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/eumyang/visual_pc.jpg"
          alt=""
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/eumyang/visual_m.jpg"
          alt=""
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
                음양오행 이론을 기반으로 생년월일 정보를 입력하면 사주 분석
                결과를 시각적으로 제공하는 태블릿 기반 인터랙티브 서비스입니다.
                <br />
                사용자는 로딩 화면을 시작으로 생년월일 입력, 분석 중 화면, 결과
                화면, 사주 카드 선택 화면까지 단계적으로 경험하며, 직관적인 UI
                흐름을 통해 자연스럽게 콘텐츠를 탐색할 수 있도록 설계되었습니다.
                <br /><br />
                본 프로젝트는 Vue.js 기반으로 전체 화면 구조를 구성했으며,
                단계형 인터페이스 설계와 상태 기반 화면 전환 로직 구현을
                중심으로 개발을 진행했습니다.
              </p>
            </div>
          </div>
        </section>
        <section class="task-section">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Task/&gt;</span>
            <div class="content-wrap">
              <ul class="items-3">
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 단계형 인터페이스 설계 및 구현</span
                  >
                  <p class="desc">
                    로딩 → 입력 → 분석 → 결과로 이어지는 단계형 화면 구조를
                    Vue.js로 구현하고, 버튼 이벤트와 상태값 변경을 통해 페이지
                    전환을 제어했습니다. 분석 단계에서는 타이머 기반 로직을
                    적용해 일정 시간 후 자동으로 결과 화면으로 이동하도록
                    구성했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >사용자 입력 기반 결과 화면 구성</span
                  >
                  <p class="desc">
                    사용자가 입력한 생년월일 데이터를 기반으로 결과 화면 UI를
                    동적으로 구성했으며, 사주 카드 선택 인터랙션을 통해 분석
                    결과를 시각적으로 탐색할 수 있도록 구현했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500">태블릿 환경 최적화 UI 설계</span>
                  <p class="desc">
                    태블릿 환경에 맞춘 레이아웃과 터치 기반 인터랙션을 고려해
                    UI를 설계하고, 고정 해상도 환경에서 안정적으로 동작하도록
                    화면 비율과 요소 배치를 구성했습니다
                  </p>
                </li>
              </ul>
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
  name: "eumyangAnniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "eumyang"),
    };
  },
});
</script>
