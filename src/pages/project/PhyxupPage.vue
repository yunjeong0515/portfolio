<template>
  <q-page class="projectdetailpage-container phyxuppage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/phyxup/visual_pc.jpg"
          alt=""
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/phyxup/visual_m.jpg"
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
                헬스케어 관리 플랫폼 ‘픽스업’ 서비스 소개 페이지 제작
                프로젝트입니다. <br />HTML 기반으로 구축되었으며, 서비스의 핵심
                기능과 강점을 효과적으로 전달할 수 있도록 정보 구조와 콘텐츠
                흐름을 설계했습니다. <br />스크롤 기반 인터랙션을 적용하여
                사용자의 탐색 흐름에 따라 콘텐츠가 자연스럽게 등장하도록
                구현했으며, 주요 수치 데이터는 카운트업 애니메이션을 활용해
                시각적으로 강조했습니다. <br />
                정적인 정보 나열이 아닌, 리듬감 있는 인터랙션 중심의 랜딩
                페이지로 구성했습니다.
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
                    >HTML 기반 랜딩 페이지 퍼블리싱</span
                  >
                  <p class="desc">
                    서비스 소개에 최적화된 구조로 페이지를 설계하고, 섹션 단위로
                    콘텐츠를 구성하여 가독성을 높였습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >AOS 기반 스크롤 애니메이션 구현</span
                  >
                  <p class="desc">
                    AOS 라이브러리를 활용해 스크롤 시 콘텐츠가 자연스럽게
                    등장하도록 구현하여 동적인 사용자 경험을 설계했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >수치 데이터 카운트업 애니메이션 구현</span
                  >
                  <p class="desc">
                    서비스 성과 및 주요 지표를 강조하기 위해 숫자 카운트업
                    효과를 적용하여 시각적 몰입도를 높였습니다.
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
  name: "phyxupAnniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "phyxup"),
    };
  },
});
</script>
