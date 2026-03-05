<template>
  <q-page class="projectdetailpage-container hanwhalifepage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/hanwhalife/visual_pc.jpg"
          alt="PC Visual"
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/hanwhalife/visual_m.jpg"
          alt="Mobile Visual"
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
        <section class="overview-section">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Overview/&gt;</span>
            <div class="content-wrap">
              <p>
                한화생명 프로모션 캠페인의 일환으로 진행된 3종 이벤트 페이지
                구축 프로젝트입니다. <br />OX 퀴즈, 히트곡 투표, 사연 이벤트로
                구성되었으며, 사용자의 참여 흐름에 맞춘 인터랙션과 입력 UI를
                중심으로 설계되었습니다. <br />이벤트 사용자 페이지는 HTML
                기반으로 퍼블리싱 및 기능 구현을 진행했으며, 참여 데이터 관리를
                위한 관리자 페이지는 Vue.js 기반으로 별도 구축했습니다.
                <br /><br />본 프로젝트에서는 이벤트 유형별로 다른 참여 방식을
                고려해 단계형 화면 전환 구조를 설계하고, 상태값에 따른 조건부
                렌더링을 적용하여 단일 페이지 내에서 자연스럽게 참여가
                완료되도록 구현했습니다. <br />또한 관리자 페이지에서는 참여자
                리스트 및 응답 데이터를 효율적으로 확인·관리할 수 있는 UI를
                구성해 운영 편의성을 강화했습니다.
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
                    >HTML 기반 이벤트 페이지 퍼블리싱 및 기능 구현</span
                  >
                  <p class="desc">
                    OX 퀴즈, 히트곡 투표, 사연 모집 3가지 이벤트 페이지를
                    제작했습니다. 각 이벤트 유형에 맞춰 입력 폼, 선택 UI, 결과
                    안내 화면을 구성하고, 사용자 참여 흐름에 맞는 화면 전환 및
                    인터랙션을 구현했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 관리자 페이지 구축
                  </span>
                  <p class="desc">
                    이벤트 참여자 데이터를 관리할 수 있는 관리자 페이지를
                    Vue.js로 구현했습니다. 참여자 리스트 조회, OX 선택 결과 및
                    사연 내용 확인, 투표 데이터 확인 기능을 구성하여 운영자가
                    참여 현황을 효율적으로 확인할 수 있도록 설계했습니다.
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
  name: "HanwhalifeEvent",
  data() {
    return {
      project: projects.find((p) => p.id === "hanwhalife"),
    };
  },
});
</script>
