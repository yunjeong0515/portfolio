<template>
  <q-page class="projectdetailpage-container reboundpage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/rebound/visual_pc.jpg"
          alt="PC Visual"
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/rebound/visual_m.jpg"
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
                        stroke="currentColor"
                        stroke-width="2"
                      />
                      <path
                        d="M18.9492 2.1332C18.9492 2.1332 52.7973 2.17174 62.6576 2.17174C72.5178 2.17174 77.868 8.61677 77.868 17.429L77.868 61.2207"
                        stroke="currentColor"
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
                리:바운드 축제(RE:BOUND FESTIVAL)는 각 지역에서 창·제작된 우수
                공연을 서울 주요 공연장에서 선보이는 유통지원형 공연예술 축제로,
                축제 프로그램을 효과적으로 홍보하고 공연 정보를 직관적으로
                탐색할 수 있도록 구축한 공식 웹사이트 프로젝트입니다.
                <br /><br />웹사이트 및 관리자 페이지 퍼블리싱 전반(100%)과
                Vue.js 기반 Front-end UI 구현을 전담했으며, 프로그램 정보의 중복
                노출 구조를 고려해 컴포넌트 중심 아키텍처로 설계하여 코드 중복을
                최소화했습니다. <br />또한 프로그램 데이터는 별도 JS 파일로
                구조화하고, 공통 모달 컴포넌트를 통해 동적으로 바인딩되도록
                구현하여 유지보수성과 확장성을 강화했습니다. <br />SCSS 기반
                스타일 구조화와 반응형 설계를 적용해 다양한 디바이스 환경에서도
                안정적인 사용자 경험을 제공했습니다.
              </p>
            </div>
          </div>
        </section>
        <section class="task-section">
          <div class="wrapper">
            <span class="section-title font_ibm">&lt;Task/&gt;</span>
            <div class="content-wrap">
              <ul class="items-5">
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 웹사이트 구조 설계 및 구축</span
                  >
                  <p class="desc">
                    Vue.js를 활용해 축제 홍보 웹사이트의 전체 구조를 설계하고
                    구축했습니다. 시맨틱 마크업과 반응형 레이아웃, SCSS 구조화를
                    통해 다양한 디바이스 환경에서도 안정적인 사용자 경험을
                    제공했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >프로그램 데이터 구조화 및 동적 바인딩 설계
                  </span>
                  <p class="desc">
                    여러 페이지에서 공통으로 사용되는 프로그램 정보를 별도 JS
                    파일로 모듈화하여 관리하고, 공통 모달 컴포넌트를 통해 선택된
                    데이터만 동적으로 바인딩되도록 구현했습니다. 이를 통해 코드
                    중복을 최소화하고 유지보수 효율성을 강화했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >SVG 기반 공연장 지도 인터랙션 구현
                  </span>
                  <p class="desc">
                    공연장 SVG 지도에 핀 클릭 이벤트를 적용하여 선택된 공연장의
                    프로그램 리스트가 즉시 노출되도록 상태 기반 UI를
                    구현했습니다. 지도와 콘텐츠 영역을 연동해 공연장–프로그램
                    관계를 직관적으로 인지할 수 있도록 설계했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >탭 메뉴 기반 프로그램 탐색 UX 설계</span
                  >
                  <p class="desc">
                    카테고리·유형별 프로그램을 탭 구조로 구성하고 조건부
                    렌더링을 적용해 사용자가 많은 프로그램을 직관적으로 탐색할
                    수 있는 구조를 설계했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 관리자 페이지 구축</span
                  >
                  <p class="desc">
                    공지사항 및 언론보도 콘텐츠를 등록·조회·수정·삭제할 수 있는
                    관리자 페이지를 Vue.js 기반으로 구축했습니다. 목록형 데이터
                    관리 구조를 설계하여 운영자가 콘텐츠를 효율적으로 관리할 수
                    있도록 구성했습니다.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section class="technical-section">
          <div class="wrapper">
            <span class="section-title font_ibm"
              >&lt;Technical Details/&gt;</span
            >
            <div class="tech-container">
              <div class="tech-item">
                <div class="tech-info">
                  <span class="info-label font_500"
                    >프로그램 데이터 구조화 및 동적 바인딩 설계</span
                  >
                  <p class="info-desc">
                    프로그램별 상세 정보를 객체 형태의 별도 JS 파일로 분리하여
                    관리했습니다. <br />공연 일정, 장르, 출연진, 스태프, 리뷰,
                    안내사항, 이미지 등 복합적인 데이터를 구조화하여 정의하고,
                    페이지에서는 해당 데이터를 동적으로 바인딩하는 방식으로
                    설계했습니다. <br />이를 통해 동일한 UI 구조 내에서 프로그램
                    데이터만 교체하여 재사용할 수 있도록 구성했으며, 콘텐츠 수정
                    시 마크업 수정 없이 데이터 파일만 관리하면 되도록 설계해
                    유지보수 효율성과 확장성을 확보했습니다.
                  </p>
                </div>
                <div class="contents-wrap tech-visual">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/rebound/tech01_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/rebound/tech01_mo.png"
                      alt=""
                      class="mo-img"
                    />
                  </div>
                </div>
              </div>

              <div class="tech-item">
                <div class="tech-info">
                  <span class="info-label font_500"
                    >공통 모달 컴포넌트 분리 및 동적 연동 구현</span
                  >
                  <p class="info-desc">
                    Vue.js의 &lt;q-dialog&gt;를 활용해 프로그램 상세 정보를
                    표시하는 모달을 공통 컴포넌트로 분리했습니다. 선택된
                    프로그램 객체를 props로 전달받아 동적으로 렌더링되도록
                    구성했으며, 여러 페이지에서 동일한 모달을 호출할 수 있도록
                    구조화했습니다.이를 통해 모달 UI 일관성 유지, 코드 중복
                    최소화, 데이터 중심 렌더링 구조 확립, 향후 프로그램 추가 시
                    확장 용이성 확보가 가능하도록 설계했습니다.
                  </p>
                </div>
                <div class="contents-wrap">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/rebound/tech02_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/rebound/tech02_mo.png"
                      alt=""
                      class="mo-img"
                    />
                  </div>
                </div>
              </div>
              <div class="tech-item">
                <div class="tech-info">
                  <span class="info-label font_500"
                    >Vue.js 기반 관리자 페이지 구축</span
                  >
                  <p class="info-desc">
                    Vue.js와 Quasar Framework를 활용하여 공지사항 및 언론보도
                    콘텐츠를 등록·조회·수정·삭제할 수 있는 관리자 페이지를
                    구축했습니다. 목록형 데이터 관리 구조를 설계하고, 게시글
                    작성·수정·삭제 기능과 함께 파일 첨부 업로드 및 관리 기능을
                    구현했습니다. 이를 통해 운영자가 텍스트 콘텐츠와 첨부파일을
                    함께 효율적으로 관리할 수 있는 환경을 구축했습니다.
                  </p>
                </div>
                <div class="contents-wrap">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/rebound/tech03_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/rebound/tech03_mo.png"
                      alt=""
                      class="mo-img"
                    />
                  </div>
                </div>
              </div>
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
  name: "ReboundFestival",
  data() {
    return {
      project: projects.find((p) => p.id === "rebound"),
    };
  },
});
</script>
