<template>
  <q-page class="projectdetailpage-container seoul80page-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/seoul80/visual_pc.jpg"
          alt=""
        />
      </div>
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
      </div>
    </section>
    <div class="project-body">
      <section class="summary-section font_black">
        <div class="wrapper">
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
      <section class="overview-section font_black">
        <div class="wrapper">
          <span class="title font_ibm">&lt;Overview/&gt;</span>
          <div class="content-wrap">
            <p>
              광복 80주년을 기념해 국민에게 다양한 기념사업 프로그램을 소개하는
              홈페이지 구축 프로젝트입니다. <br />
              방문자가 프로그램 정보를 직관적이고 흥미롭게 탐색할 수 있도록,
              콘텐츠 중심의 UI 구성과 자연스러운 스크롤 인터랙션을 적용했습니다.
              <br /><br />
              본 프로젝트에서 전체 HTML 구조 설계, 인터랙션 기반 UI 구현, SVG
              지도 연동 기능, 어드민 페이지 UI 작업 등을 담당했습니다. <br />
              특히 스크롤 흐름에 따라 콘텐츠가 자연스럽게 등장하도록 설계해
              단조로운 정보성 페이지의 사용자 피로도를 줄였으며, <br />SVG 기반
              지도를 활용하여 지역별 프로그램을 시각적으로 탐색할 수 있는 기능을
              구현하고, Vue.js 기반 구조를 활용해 핀 클릭 시 관련 정보를 즉시
              노출하는 UX를 설계했습니다.
            </p>
          </div>
        </div>
      </section>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { projects } from "src/data/projects";

export default defineComponent({
  name: "HanwhalifeEvent",
  data() {
    return {
      project: projects.find((p) => p.id === "hanwhalife"),
    };
  },
});
</script>
