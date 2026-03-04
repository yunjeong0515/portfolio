<template>
  <q-page class="projectdetailpage-container neurobbpage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/neurobb/visual_pc.jpg"
          alt=""
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/neurobb/visual_m.jpg"
          alt=""
        />
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
                바이오 테크 전문 기업 뉴로비비(NeuroBB)의 기업 웹사이트 구축
                프로젝트에서 전체 퍼블리싱 및 프론트엔드 UI 구현을 전담했습니다.
                <br /><br />
                기업의 분석 데이터를 효과적으로 보여주기 위해 Chart.js
                라이브러리를 직접 도입하고, 서비스 성격에 맞게 Radar View(방사형
                차트)를 커스텀 작업했습니다. <br />단순히 기본 차트를 출력하는
                것에 그치지 않고, 기업의 아이덴티티가 느껴지도록 디자인 가이드에
                맞춰 스타일을 세밀하게 조정하여 데이터 시각화의 완성도를
                높였습니다. <br />또한, 원페이지(One-page) 레이아웃 내에서
                사용자 경험을 개선하기 위해 자바스크립트를 활용한 '타겟팅 스크롤
                내비게이션'을 구현했습니다. <br />메뉴 클릭 시 각 섹션의 위치
                값을 정확히 계산하여 부드럽게 이동하도록 설계했으며, 이를 통해
                사용자가 복잡한 기술 정보를 혼선 없이 체계적으로 탐색할 수 있는
                환경을 구축했습니다.
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
                    >시맨틱 HTML 구조 설계 및 구축</span
                  >
                  <p class="desc">
                    웹사이트의 전체 레이아웃과 콘텐츠 구조를 시맨틱 HTML
                    기반으로 설계하고 구축했습니다. 브랜드 메시지, 에이전시
                    소개, 포트폴리오 섹션 등이 명확히 구분되어 흐름이 자연스럽고
                    가독성이 높은 구조로 구현되었습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Chart.js 도입 및 Radar View 커스텀 작업을 통한 데이터
                    시각화 구현</span
                  >
                  <p class="desc">
                    메인 화면 및 각 섹션에 스크롤 진입에 따라 콘텐츠가 부드럽게
                    등장하는 인터랙션, 섹션 간 자연스러운 전환 등 다양한
                    인터랙션을 적용해 단순 정보 전달을 넘어 브랜드 감성 경험
                    중심 구조로 구현했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >JavaScript 기반의 섹션별 타겟팅 스크롤 내비게이션 시스템
                    구축</span
                  >
                  <p class="desc">
                    어드민 페이지를 Vue.js를 활용해 구성하고, 포트폴리오 및
                    프로젝트 데이터를 입력/수정/관리할 수 있는 UI를
                    설계·구현했습니다. 관리자는 별도 개발 없이 UI로 데이터를
                    제어할 수 있도록 작업했습니다.
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
  name: "neurobbAnniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "neurobb"),
    };
  },
});
</script>
