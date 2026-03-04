<template>
  <q-page class="projectdetailpage-container heruepage-container">
    <section class="visual-section">
      <div class="visual-pc">
        <img
          src="../../../src/assets/imgs/projects/herue/visual_pc.jpg"
          alt="PC Visual"
        />
      </div>
      <div class="visual-m">
        <img
          src="../../../src/assets/imgs/projects/herue/visual_pc.jpg"
          alt="Mobile Visual"
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
                디자인 에이전시 헤루랩(HERULAB)의 공식 웹사이트 리뉴얼
                프로젝트로, 브랜드 아이덴티티를 돋보이게 하는 인터랙션 중심의
                UI/UX 개선을 진행했습니다. <br /><br />본 프로젝트에서는 사용자
                페이지 및 관리자(Admin) 페이지의 퍼블리싱과 프론트엔드 UI 구현을
                전담했습니다. <br />내부 디자이너가 아닌 외부 클라이언트 측
                디자인 팀과 긴밀하게 소통하며, 디자인 의도를 완벽히 구현하기
                위해 마운트 단위의 세심한 퍼블리싱에 집중했습니다. <br />특히
                GSAP를 활용한 고도화된 스크롤 트리거 인터랙션을 페이지 곳곳에
                적용하여 자칫 단조로울 수 있는 콘텐츠에 생동감을 부여하고,
                에이전시만의 창의적인 이미지를 시각적으로 극대화했습니다.
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
                    >시맨틱 HTML 웹사이트 구조 설계 및 구축</span
                  >
                  <p class="desc">
                    웹사이트의 전체 레이아웃과 콘텐츠 구조를 시맨틱 HTML
                    기반으로 설계하고 구축했습니다. 브랜드 메시지, 에이전시
                    소개, 포트폴리오 섹션 등이 명확히 구분되어 흐름이 자연스럽고
                    가독성이 높은 구조로 구현되었습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >인터랙티브 UI/UX 요소 구현
                  </span>
                  <p class="desc">
                    메인 화면 및 각 섹션에 스크롤 진입에 따라 콘텐츠가 부드럽게
                    등장하는 인터랙션, 섹션 간 자연스러운 전환 등 다양한
                    인터랙션을 적용해 단순 정보 전달을 넘어 브랜드 감성 경험
                    중심 구조로 구현했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >Vue.js 기반 관리자 페이지 구축
                  </span>
                  <p class="desc">
                    Vue.js 기반 관리자 페이지 구축 어드민 페이지를 Vue.js를
                    활용해 구성하고, 포트폴리오 및 프로젝트 데이터를
                    입력/수정/관리할 수 있는 UI를 설계·구현했습니다. 관리자는
                    별도 개발 없이 UI로 데이터를 제어할 수 있도록 작업했습니다.
                  </p>
                </li>
                <li>
                  <span class="title font_500"
                    >다국어(국/영문) 콘텐츠 최적화 및 구조 설계</span
                  >
                  <p class="desc">
                    클라이언트 사례 및 작업 포트폴리오 리스트를 구성하고,각
                    프로젝트가 어드민에서 관리될 수 있도록 상세 페이지 구조를
                    설계했습니다.
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
                    >인터랙티브 UI/UX 요소 구현</span
                  >
                  <p class="info-desc">
                    Swiper, GSAP, IntersectionObserver, JavaScript를 활용해
                    페이지 전반에 사용자 반응형 인터랙션 구조를
                    설계·구현했습니다. <br />리뷰 영역은 PC/모바일 환경을 감지해
                    서로 다른 Swiper 설정을 적용하고, 디바이스 변경 시 기존
                    인스턴스를 제거한 뒤 재생성하는 구조로 반응형 안정성을
                    확보했습니다. <br />또한 GSAP를 활용해 마우스 커서에
                    반응하는 시각 요소(Shapes)가 서로 다른 속도로 따라오도록
                    구현해, 단순한 마우스 이동이 아닌 레이어드 인터랙션 효과를
                    연출했습니다. <br />이를 통해 사용자는 스크롤·마우스·터치 등
                    다양한 입력 방식에 자연스럽게 반응하는, 몰입감 있는 브랜드
                    경험형 UI를 체감할 수 있도록 설계했습니다.
                  </p>
                </div>
                <div class="contents-wrap tech-visual">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/herue/tech01_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/herue/tech01_mo.png"
                      alt=""
                      class="mo-img"
                    />
                  </div>
                </div>
              </div>

              <div class="tech-item">
                <div class="tech-info">
                  <span class="info-label font_500"
                    >스크롤 기반 모션 인터랙션 및 사용자 반응형 UI 구현</span
                  >
                  <p class="info-desc">
                    페이지 전반에 걸쳐 스크롤과 사용자 행동에 반응하는
                    인터랙션을 적극적으로 적용하여, 정적인 정보 전달이 아닌
                    몰입감 있는 탐색 경험을 제공하는 UI 흐름을 구축했습니다.
                    <br />
                    스크롤 진입 시에는 수치 정보가 목표 값까지 자연스럽게
                    증가하는 카운트업 애니메이션을 적용해 성과 데이터를
                    시각적으로 인지할 수 있도록 구성했고, <br />로고가 축소되며
                    영상 콘텐츠로 전환되는 인터랙션을 설계해 브랜드 아이덴티티를
                    강조한 뒤 콘텐츠로 자연스럽게 이어지도록 했습니다.
                    <br />또한 카드 UI에는 Hover 시 타이틀과 SNS 아이콘이
                    순차적으로 노출되는 구조를 적용하여, 정보의 우선순위에 따라
                    시선이 흐르도록 설계하고, 사용자가 콘텐츠를 보다 직관적으로
                    탐색할 수 있는 인터랙션 경험을 구현했습니다.
                  </p>
                </div>
                <div class="contents-wrap">
                  <div class="tech-img">
                    <img
                      src="../../../src/assets/imgs/projects/herue/tech02_pc.png"
                      alt=""
                      class="pc-img"
                    />
                    <img
                      src="../../../src/assets/imgs/projects/herue/tech02_mo.png"
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
  name: "Seoul80Anniversary",
  data() {
    return {
      // id가 heruelab인 데이터를 찾아 매칭
      project: projects.find((p) => p.id === "heruelab"),
    };
  },
});
</script>
