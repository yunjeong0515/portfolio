<template>
  <q-page class="projectdetailpage-container kmusicalpage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/kmusical/visual_pc.jpg"
          alt="PC Visual"
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/kmusical/visual_m.jpg"
          alt="Mobile Visual"
        />
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
                  class="font_300"
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
                2025 K-뮤지컬국제마켓의 공식 웹사이트 및 운영 관리 시스템 구축
                프로젝트입니다. 국내외 참가자들에게 행사 정보를 정확하고
                효율적으로 전달하고, 티켓 구매 후 프로그램 예약까지 이어지는
                사용자 경험(UX) 최적화된 예약 시스템을 구축하여 성공적인 행사
                운영을 지원하는 데 중점을 두었습니다. <br /><br />본
                프로젝트에서 K-뮤지컬국제마켓 웹사이트, 어드민페이지의
                퍼블리싱(100%) 및 Front-end UI 구현을 전담했으며,
                티켓구매-프로그램 예약 플로우의 기획 단계에 참여하여 사용자
                동선을 설계하고 개발 가능성을 검토했습니다. <br />Vue.js
                컴포넌트 구조를 기반으로 예약 시스템 및 복잡한 어드민 UI를
                구현했으며, GSAP를 활용하여 페이지 콘텐츠에 생동감 있는
                인터랙션을 추가했습니다. <br />i18n 라이브러리를 통해
                다국어(영문) 페이지를 효율적으로 구현하고, SCSS와 반응형 웹
                디자인을 적용하여 모든 디바이스에서 최적화된 사용자 경험과 높은
                유지보수 효율성을 확보했습니다.
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
                  <span class="title font_500">UX/UI 기획 참여</span>
                  <p class="desc">
                    기획 단계부터 예약 시스템 설계 회의에 참여하여, 티켓
                    구매부터 프로그램 신청까지 이어지는 다단계 사용자 흐름을
                    정리하고 퍼블리셔 관점에서 직관적인 UI/UX 프로세스를
                    설계했습니다. 복잡한 플로우를 사용자 동선 중심으로
                    재구성하여, 혼란 없이 자연스럽게 다음 단계로 이어지는 예약
                    경험을 구현하는 데 기여했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 사용자 웹사이트 UI/UX 구현
                  </span>
                  <p class="desc">
                    Vue.js 컴포넌트 구조를 기반으로 사용자 페이지 전반의 UI를
                    구현하고, 디자인 의도를 정확히 반영한 마크업과 스타일링을
                    적용해 반응형 웹 환경에 최적화된 사용자 경험을 구축했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >동적 데이터 관리 및 컴포넌트 분리 구현
                  </span>
                  <p class="desc">
                    여러 페이지에서 공통으로 사용되는 프로그램 상세 정보 모달을
                    컴포넌트로 분리해 재사용 구조로 설계하고, 프로그램별
                    콘텐츠는 JS 데이터 파일로 관리하여 동일한 레이아웃의 모달에
                    동적으로 바인딩되도록 구현했습니다. 이를 통해 코드 중복을
                    줄이고, 콘텐츠 변경 시에도 빠르게 대응할 수 있는 유지보수
                    효율적인 구조를 구축했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500">다국어 처리 (i18n) </span>
                  <p class="desc">
                    i18n 라이브러리를 활용해 국·영문 페이지를 효율적으로
                    관리하고, 언어 전환 시에도 동일한 UI 구조와 사용자 경험이
                    유지되도록 구현했습니다. 공통 컴포넌트와 텍스트 리소스를
                    분리해 관리함으로써, 콘텐츠 수정 및 확장 시에도 유지보수가
                    용이한 다국어 구조를 구축했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 관리자 페이지 구축
                  </span>
                  <p class="desc">
                    티켓 구매 내역, 프로그램 예약 현황, 공지사항 관리 기능을
                    중심으로 Vue.js 기반 어드민 UI를 설계·퍼블리싱했습니다.
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
                  <span class="info-label font_500">티켓-예약 시스템</span>
                  <p class="info-desc">
                    복잡하게 구성된 티켓(일반/학생, 전일권/1일권) 및 쇼케이스
                    관람권 시스템을 단일 페이지 내에 통합하고,
                    <em>Vue.js 상태 기반 렌더링과 v-if를 활용</em>해 사용자
                    타입과 티켓 종류에 따라 필요한 옵션만 노출되도록
                    구현했습니다. <br />또한 프로그램 선택 화면을 탭 메뉴 구조로
                    구성하고,
                    <em
                      >스크롤 시에도 선택 항목이 고정되는 리스트 박스를 배치</em
                    >해 사용자가 현재 선택 상태를 지속적으로 확인할 수 있도록
                    설계함으로써,
                    <em>예약 과정의 편의성과 흐름의 명확성을 모두 향상</em
                    >시켰습니다.
                  </p>
                </div>
                <div class="contents-wrap tech-visual">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/kmusical/tech01_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/kmusical/tech01_mo.png"
                      alt=""
                      class="mo-img"
                    />
                  </div>
                </div>
              </div>

              <div class="tech-item">
                <div class="tech-info">
                  <span class="info-label font_500">프로그램 정보</span>
                  <p class="info-desc">
                    프로그램 상세 정보는
                    <em>별도의 JS 데이터 파일로 분리하여 관리</em>하고,
                    <em>공통 모달 컴포넌트</em>를 통해 선택된 프로그램의
                    데이터만 동적으로 바인딩되도록 구현했습니다. <br />이를 통해
                    여러 페이지에서 동일한 모달 UI를 재사용할 수 있도록
                    구조화했으며, 콘텐츠 변경 시에도 빠르게 대응할 수 있는
                    <em>확장성 있는 구조를 설계</em>했습니다.
                  </p>
                </div>
                <div class="contents-wrap">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/kmusical/tech02_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/kmusical/tech02_mo.png"
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
                    사용자 페이지와 어드민 페이지의 구조와 흐름을 분석하고
                    이해하며, Vue.js와 Quasar Framework를 활용해 대시보드 형태의
                    어드민 시스템을 구축했습니다. <br />회원 관리, 티켓 결제
                    처리, 프로그램 예약 관리뿐만 아니라 게시판 관리 기능도
                    구현했으며, 게시글 작성, 편집, 관리 기능을 포함하여
                    <em>콘텐츠를 효율적으로 운영할 수 있도록 설계</em
                    >했습니다.<br />
                    대시보드는 정보를 체계적으로 정리하여 관리자가 필요한
                    데이터를 빠르고 정확하게 확인하고 처리할 수 있도록
                    지원합니다.
                  </p>
                </div>
                <div class="contents-wrap">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/kmusical/tech03_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/kmusical/tech03_mo.png"
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
  name: "KmusicalMarket",
  data() {
    return {
      project: projects.find((p) => p.id === "kmusical"),
    };
  },
});
</script>
