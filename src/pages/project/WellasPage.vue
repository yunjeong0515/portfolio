<template>
  <q-page class="projectdetailpage-container wellaspage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/wellas/visual_pc.jpg"
          alt=""
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/wellas/visual_m.jpg"
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
                웰라스 기업 소개 웹사이트 구축 프로젝트입니다. Vue.js를 활용해
                컴포넌트 기반 구조로 설계하였으며, Header, Footer, 콘텐츠 섹션을
                모듈화하여 유지보수와 확장에 용이한 구조로 개발했습니다.
                <br />기업의 핵심 서비스와 비전을 명확하게 전달할 수 있도록 정보
                구조를 재정비하고, 신뢰감을 줄 수 있는 레이아웃과 UI 디테일에
                집중해 설계했습니다. <br /><br />각 섹션은 데이터 기반으로
                관리될 수 있도록 구성하여 콘텐츠 수정 시 코드 변경을
                최소화했으며, 재사용 가능한 컴포넌트를 통해 일관된 디자인
                시스템을 유지했습니다.<br />또한 Naver Map API를 연동하여 기업
                위치 정보를 동적으로 구현하고, 마커 설정 및 지도 옵션을
                커스터마이징해 실제 방문 유도를 고려한 사용자 경험을
                설계했습니다. <br />반응형 레이아웃을 적용해 다양한 디바이스
                환경에서도 일관된 경험이 제공되도록 구성했으며, 이미지 최적화 및
                구조 정리를 통해 성능과 가독성 또한 함께 개선했습니다.
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
                    >Vue.js 기반 웹사이트 구조 설계 및 구축</span
                  >
                  <p class="desc">
                    Vue.js를 활용해 전체 레이아웃 구조를 설계하고, 페이지 단위로
                    화면을 구성하여 퍼블리싱을 진행했습니다. 공통 레이아웃
                    구조를 기반으로 콘텐츠 영역을 유기적으로 배치해 일관된 UI를
                    구현했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500">Naver Map API 연동</span>
                  <p class="desc">
                    Naver Map API를 연동하여 기업 위치 정보를 동적으로 구현하고,
                    마커 및 지도 옵션을 커스터마이징해 사용자 접근성을
                    높였습니다. 외부 스크립트 로딩과 초기화 과정을 Vue
                    라이프사이클에 맞춰 안정적으로 처리했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >문의 이메일 양식 HTML 마크업 개발</span
                  >
                  <p class="desc">
                    사용자 문의가 관리자 이메일로 전달되는 구조에 맞춰, 수신용
                    폼 양식을 HTML로 설계했습니다. 관리자 확인 편의성을 고려해
                    입력 항목을 체계적으로 구성하고, 전달 목적에 맞는 폼 UI를
                    구현했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >다국어(국/영문) 콘텐츠 최적화 및 구조 설계</span
                  >
                  <p class="desc">
                    국문 페이지와 분리된 영문 전용 페이지를 별도로 구성하여
                    글로벌 사용자 대응이 가능하도록 설계했습니다. 콘텐츠 구조를
                    유지하면서 언어별 페이지 관리가 용이하도록 개발했습니다.
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
  name: "wellasAnniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "wellas"),
    };
  },
});
</script>
