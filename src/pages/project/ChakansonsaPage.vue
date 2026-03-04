<template>
  <q-page class="projectdetailpage-container chakansonsapage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/chakansonsa/visual_pc.jpg"
          alt=""
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/chakansonsa/visual_m.jpg"
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
                착한손해사정사 기업 소개 웹사이트 구축 프로젝트입니다. 손해사정
                서비스 안내 및 상담 유도에 초점을 맞춘 정보 전달형 웹사이트로,
                간결하고 신뢰감 있는 UI 구성을 중심으로 설계되었습니다.
                <br /><br />본 프로젝트는 HTML 기반으로 전체 퍼블리싱을
                진행했으며, 콘텐츠 계층 구조를 고려한 시맨틱 마크업으로 페이지를
                구성했습니다. <br />모바일 환경을 기준으로 화면을 설계하고, PC
                환경에서는 모바일 화면이 축소된 형태로 노출되도록 구현하여 내부
                스크롤이 작동하는 구조를 적용했습니다. <br />이를 통해
                디바이스와 관계없이 동일한 사용자 경험을 유지하면서도 모바일
                중심 UX 전략을 일관되게 반영했습니다.
              </p>
            </div>
          </div>
        </section>
        <section class="task-section">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Task/&gt;</span>
            <div class="content-wrap">
              <ul class="items-2">
                <li>
                  <span class="title font_500"
                    >HTML 기반 웹사이트 퍼블리싱</span
                  >
                  <p class="desc">
                    기업 소개, 서비스 안내, 상담 유도 섹션 등 전체 페이지를
                    시맨틱 마크업 기반으로 구성했습니다. 정보 계층 구조를 고려해
                    콘텐츠 흐름이 자연스럽게 이어지도록 레이아웃을 설계했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >모바일 중심 UI 구조 설계 및 PC 환경 최적화 구현</span
                  >
                  <p class="desc">
                    모바일 화면을 기준으로 UI를 설계하고, 핵심 콘텐츠가
                    직관적으로 전달되도록 단일 뷰 구조로 구성했습니다. PC
                    환경에서는 모바일 화면이 축소된 형태로 노출되도록 레이아웃을
                    설계하고, 내부 스크롤이 동작하도록 구현하여 디바이스와
                    관계없이 일관된 사용자 경험이 유지되도록 구성했습니다.
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
  name: "chakansonsaAnniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "chakansonsa"),
    };
  },
});
</script>
