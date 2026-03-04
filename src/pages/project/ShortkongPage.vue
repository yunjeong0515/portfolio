<template>
  <q-page class="projectdetailpage-container shortkongpage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/shortkong/visual_pc.jpg"
          alt=""
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/shortkong/visual_m.jpg"
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
                숏폼 웹드라마 콘텐츠와 커머스를 결합한 모바일 애플리케이션
                ‘숏공’ 개발 프로젝트입니다. Vue 기반 웹뷰(WebView) 앱으로
                구현되었으며, 영상 콘텐츠 시청과 동시에 등장 상품 정보를
                자연스럽게 확인하고 구매로 연결할 수 있도록 설계했습니다.
                <br /><br />
                Swiper를 활용해 풀스크린 세로 스와이프 구조로 개발하여, 한 번에
                하나의 콘텐츠에 집중할 수 있는 UX를 구현했습니다. <br />콘텐츠
                소비 흐름을 방해하지 않으면서 상품 정보를 노출하는 인터페이스를
                설계해 콘텐츠와 커머스를 효과적으로 통합했습니다.<br />
                또한 서비스 운영을 위한 관리자 페이지를 별도로 구축하여 콘텐츠,
                상품, 회원, 고객 문의 등을 체계적으로 관리할 수 있는 환경을
                마련했습니다.
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
                  <span class="title font_500">Vue 기반 웹뷰 앱 개발</span>
                  <p class="desc">
                    Vue.js 기반으로 모바일 웹뷰 구조의 애플리케이션을 개발하고,
                    모바일 환경에 최적화된 UI/UX를 구현했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >숏폼 스와이프 인터랙션 구현 (Swiper 활용)</span
                  >
                  <p class="desc">
                    Swiper 라이브러리를 활용해 세로 스와이프 방식의 숏폼 콘텐츠
                    구조를 구현했습니다. 한 화면에 하나의 영상만 노출되도록
                    설계하여 몰입도 높은 콘텐츠 소비 경험을 제공합니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >영상-상품 정보 연동 UI 구현</span
                  >
                  <p class="desc">
                    영상에 등장하는 상품 정보를 콘텐츠와 자연스럽게 연결하고,
                    구매 링크로 이어질 수 있도록 인터페이스를 설계했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 관리자 페이지 구축</span
                  >
                  <p class="desc">
                    콘텐츠 업로드 및 관리, 상품 정보 연동, 회원 관리, 고객 문의
                    관리 기능을 포함한 관리자 시스템을 개발하여 서비스 운영
                    효율성을 높였습니다.
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
  name: "shortkongAnniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "shortkong"),
    };
  },
});
</script>
