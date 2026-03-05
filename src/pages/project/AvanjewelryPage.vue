<template>
  <q-page class="projectdetailpage-container avanjewelrypage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/avanjewelry/visual_pc.jpg"
          alt=""
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/avanjewelry/visual_m.jpg"
          alt=""
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
        <section class="overview-section font_black">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Overview/&gt;</span>
            <div class="content-wrap">
              <p>
                아임웹(Imweb) 기반으로 제작된 주얼리 브랜드 ‘아반주얼리’의
                웹사이트 리뉴얼 및 시스템 최적화 프로젝트입니다. <br />브랜드의
                감도를 높이기 위한 UI 디자인 개선을 진행했으며, 솔루션 기본
                기능만으로 구현이 어려운 영역은 Custom Code를 직접 삽입하여
                브랜드만의 독창적인 레이어 구조와 인터랙션을 완성했습니다.
                <br /><br />또한 단순한 디자인 개선을 넘어 기존의 비효율적인
                상품 연동 구조를 전면 재정비하는 데이터 아키텍처 개선 작업을
                수행했습니다. <br />이를 통해 다수의 상품 리스트를 보다
                체계적으로 관리할 수 있는 환경을 구축하고 사이트 퍼포먼스를
                안정화했습니다.<br />
                프로젝트 완료 후에는 클라이언트가 직접 운영 및 유지보수를 진행할
                수 있도록 상세한 운영 매뉴얼(PDF)을 제작·전달하여 제작 이후의
                실질적인 관리 편의성까지 고려한 통합 솔루션을 제공했습니다.
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
                    >아임웹 기반 디자인 리뉴얼 및 Custom Code UI
                    커스터마이징</span
                  >
                  <p class="desc">
                    기존 템플릿 기반 구조를 재정비하고 브랜드 톤에 맞는 UI
                    디자인으로 전면 리뉴얼을 진행했습니다. 솔루션 기본 기능으로
                    구현이 어려운 영역은 HTML·CSS·JavaScript Custom Code를
                    삽입하여 레이어 구조와 인터랙션을 직접 구현함으로써 브랜드
                    아이덴티티를 강화했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >상품 연동 데이터 구조 재정비 및 쇼핑 리스트 관리
                    최적화</span
                  >
                  <p class="desc">
                    비효율적으로 연결되어 있던 상품 연동 구조를 재설계하여
                    데이터 관리 흐름을 단순화했습니다. 카테고리 및 리스트 구조를
                    체계적으로 정리해 대량 상품 등록 및 관리 시에도 안정적으로
                    운영될 수 있도록 최적화 작업을 수행했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >운영 효율성을 위한 관리 매뉴얼(PDF) 제작</span
                  >
                  <p class="desc">
                    클라이언트가 직접 상품 등록, 수정, 프로모션 관리 등을 수행할
                    수 있도록 상세한 운영 가이드를 제작했습니다. 단순 인수인계를
                    넘어 실질적인 유지보수가 가능하도록 단계별 설명과 화면 캡처
                    기반 매뉴얼(PDF)을 제공했습니다.
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
  name: "avanjewelryAnniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "avanjewelry"),
    };
  },
});
</script>
