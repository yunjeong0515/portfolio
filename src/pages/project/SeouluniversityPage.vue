<template>
  <q-page class="projectdetailpage-container seouluniversitypage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/seouluniversity/visual_pc.jpg"
          alt="PC Visual"
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/seouluniversity/visual_m.jpg"
          alt="Mobile Visual"
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
        <section class="overview-section">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Overview/&gt;</span>
            <div class="content-wrap">
              <p>
                서울대학교 의과대학 핵의학교실 웹사이트 리뉴얼 개발
                프로젝트입니다. Vue.js 기반으로 사용자 웹사이트와 관리자
                시스템을 함께 구축했으며, 다수의 페이지로 구성된 기관 사이트
                특성을 고려해 공통 구조를 정리하고 관리 효율성을 높이는 데
                중점을 두었습니다. <br /><br />연구, 진료, 의료진 소개, 게시판
                및 자료실 등 다양한 콘텐츠를 체계적으로 재구성하여 정보 접근성과
                가독성을 개선했습니다. 또한 관리자 페이지를 통해
                게시판·자료실·커뮤니티 콘텐츠를 관리할 수 있도록 구현했으며,
                인사말 등 주요 페이지 내 요소를 관리자에서 직접 수정·삽입할 수
                있는 구조로 개발하여 운영 편의성을 강화했습니다. <br />특히 여러
                자료실이 동일한 레이아웃을 공유하도록 단일 페이지 구조로
                설계하고, 카테고리 및 파라미터에 따라 데이터를 분기 처리하여
                공통 UI를 재사용하도록 구현함으로써 유지보수 효율성을
                높였습니다.
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
                  <span class="title font_500">Vue.js 기반 웹사이트 개발</span>
                  <p class="desc">
                    Vue.js를 활용하여 다수의 페이지를 구성하고, 기관 특성에 맞는
                    안정적이고 신뢰감 있는 UI로 구현했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >공통 레이아웃 및 구조 정리
                  </span>
                  <p class="desc">
                    반복되는 UI 영역을 공통 구조로 정리하고, 여러 자료실 및
                    게시판이 동일한 레이아웃을 공유하도록 구현하여 유지보수
                    효율성을 높였습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 관리자 페이지 구축
                  </span>
                  <p class="desc">
                    게시판, 자료실, 커뮤니티 콘텐츠를 등록·수정·삭제할 수 있는
                    관리자 페이지를 개발했습니다. 전체 게시물 현황을 확인할 수
                    있는 관리 화면을 구성했으며, 인사말 등 주요 페이지 내 콘텐츠
                    요소를 관리자에서 직접 입력·수정할 수 있도록 설계하여 운영
                    편의성을 높였습니다.
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
  name: "seouluniversityEvent",
  data() {
    return {
      project: projects.find((p) => p.id === "seouluniversity"),
    };
  },
});
</script>
