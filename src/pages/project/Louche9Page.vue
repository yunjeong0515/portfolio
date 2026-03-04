<template>
  <q-page class="projectdetailpage-container louche9page-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/louche9/visual_pc.jpg"
          alt=""
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/louche9/visual_m.jpg"
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
                아바타 커스터마이징 서비스와 이커머스가 결합된 혁신적인 통합
                플랫폼, 루치나인(LOUCHE 9)의 웹사이트 구축 프로젝트입니다.
                <br />본 프로젝트에서 전체 사용자 페이지 및 관리자 시스템의
                퍼블리싱 100%를 담당했습니다. <br />특히, 단순 구현을 넘어
                관리자(Admin) 페이지의 상품 및 아이템 등록 프로세스 기획 단계에
                참여했습니다. <br />
                운영 효율성을 고려하여 복잡한 아이템 속성과 레이어 데이터를
                체계적으로 관리할 수 있는 화면 구조를 제안하고 구축함으로써,
                관리자가 방대한 자산을 직관적으로 운영할 수 있는 최적의 시스템을
                완성했습니다. <br /><br />본 프로젝트의 핵심인 ‘아바타 착장
                시스템’을 구축하기 위해 Quasar 프레임워크를 기반으로 조건부
                렌더링(v-if) 기술을 적극 활용했습니다. <br />사용자가 아이템을
                선택하거나 해제함에 따라 아바타의 레이어 상태가 실시간으로
                변경되도록 설계했으며, 복잡한 아이템 카테고리 내에서도 데이터
                상태에 따라 정확한 레이어 순서(Z-index)와 착용 모습이 노출되도록
                최적화했습니다. <br />단순한 상품 나열을 넘어, 쇼핑몰의 장바구니
                시스템과 아바타 시뮬레이션을 유기적으로 연결하여 사용자가 자신의
                디지털 페르소나를 직접 편집하고 구매까지 이어지는 고도화된
                이커머스 경험을 완성했습니다.
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
                    >Vue.js 기반 쇼핑몰 구조 설계 및 구축</span
                  >
                  <p class="desc">
                    상품 리스트, 상세 페이지, 장바구니, 구매 프로세스 등
                    전반적인 커머스 UI를 Vue.js 기반으로 구현했습니다. 상품
                    정보와 디지털 아이템 데이터를 구조화하여 관리하고, 구매 완료
                    시 아바타 아이템이 연동되는 흐름을 고려해 화면을
                    설계했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >아바타 커스터마이징 UI 구현</span
                  >
                  <p class="desc">
                    구매한 아이템을 기반으로 캐릭터에 장착·해제할 수 있는 UI를
                    구현했습니다. 아이템 상태에 따라 아바타 외형이 즉시
                    반영되도록 구성하여, 사용자 상호작용 중심의 인터페이스를
                    설계했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 관리자 페이지 구축</span
                  >
                  <p class="desc">
                    Vue.js 기반으로 관리자 페이지를 구성하고, 상품
                    등록·수정·삭제 기능과 함께 디지털 아이템 데이터를 함께
                    관리할 수 있는 구조를 설계했습니다. 주문 내역 및 사용자
                    아이템 지급 상태를 확인할 수 있는 관리 화면을 구현하여 운영
                    효율성을 고려한 시스템을 구축했습니다.
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
  name: "louche9Anniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "louche9"),
    };
  },
});
</script>
