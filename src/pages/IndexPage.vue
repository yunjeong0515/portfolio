<template>
  <q-page class="mainpage-container">
    <div id="pixel-container" class="pixel-container"></div>
    <div class="container-wrap">
      <div class="wrapper">
        <div class="main-title-wrap">
          <!-- <div class="sub-text">
            <div class="icon">
              <img src="../assets/imgs/icon/home_w.svg" alt="" />
            </div>
            <span ref="subText" class="sub-text-content font_ibm"
              >Yunjeong’s Web Portfolio</span
            >
          </div> -->
          <div class="focus-keyword">
            <span ref="dynamicWord" class="dynamic-word font_900"
              >User-Centric</span
            >
          </div>
          <span class="font_ibm static-text text-r">Web Publisher.</span>
        </div>
        <!-- <div class="title-wrap">
          <div class="sub-text">
            <span ref="subText" class="sub-text-content font_ibm"
              >사용자 중심의 퍼블리셔</span
            >
          </div>
          <div class="focus-keyword">
            <span ref="dynamicWord" class="dynamic-word font_900"
              >User-Centric</span
            >
          </div>
          <span class="font_ibm static-text text-r">Web Publisher.</span>
        </div> -->
        <div class="main-wrap">
          <div class="folder-list">
            <ul>
              <li>
                <router-link to="">
                  <div class="folder-wrapper" ref="folderItem">
                    <div class="folder-icon-wrap">
                      <div class="folder-front folder-icon">
                        <img
                          src="../assets/imgs/index/folder_front01.svg"
                          alt=""
                        />
                      </div>
                      <div class="text-card">
                        <span class="font_ibm fonbt_500"
                          >저에 대해 알아보세요!</span
                        >
                      </div>
                      <div class="folder-center folder-icon">
                        <img
                          src="../assets/imgs/index/about_card01.png"
                          alt=""
                        />
                      </div>
                      <div class="default-center folder-icon">
                        <img
                          src="../assets/imgs/index/folder_center.svg"
                          alt=""
                        />
                      </div>
                      <div class="folder-back folder-icon">
                        <img
                          src="../assets/imgs/index/folder_back01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <span class="font_ibm font_500">ABOUT</span>
                </router-link>
              </li>
              <li>
                <router-link to="">
                  <div class="folder-wrapper" ref="folderItem">
                    <div class="folder-icon-wrap">
                      <div class="folder-front folder-icon">
                        <img
                          src="../assets/imgs/index/folder_front01.svg"
                          alt=""
                        />
                      </div>
                      <div class="text-card">
                        <span class="font_ibm fonbt_500"
                          >저에 대해 알아보세요!</span
                        >
                      </div>
                      <div class="folder-center folder-icon">
                        <img
                          src="../assets/imgs/index/about_card01.png"
                          alt=""
                        />
                      </div>
                      <div class="default-center folder-icon">
                        <img
                          src="../assets/imgs/index/folder_center.svg"
                          alt=""
                        />
                      </div>
                      <div class="folder-back folder-icon">
                        <img
                          src="../assets/imgs/index/folder_back01.svg"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                  <span class="font_ibm font_500">WORK</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>
        <div class="dock-wrap">
          <div
            class="dock-item"
            :class="{
              'is-running': isTerminalOpen /* 창이 열려 있을 때 */,
              'is-minimized': isTerminalMinimized /* 창이 최소화되었을 때 */,
            }"
          >
            <button class="dock-icon" @click.stop="toggleTerminal">
              <img
                src="../assets/imgs/icon/dock_terminal.svg"
                alt="terminal icon"
              />
            </button>
            <div class="running-dot"></div>
          </div>
          <div class="dock-item">
            <button class="dock-icon">
              <img
                src="../assets/imgs/icon/dock_mail.svg"
                alt="terminal icon"
              />
            </button>
            <div class="running-dot"></div>
          </div>
          <div class="dock-item">
            <button class="dock-icon">
              <img
                src="../assets/imgs/icon/dock_messages.svg"
                alt="terminal icon"
              />
            </button>
            <div class="running-dot"></div>
          </div>
        </div>
      </div>
      <TerminalModal
        v-if="isTerminalOpen"
        @close="toggleTerminal"
        :close-on-outside-click="isMobileSize"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, onBeforeUnmount, ref } from "vue";
import { gsap } from "gsap"; // 💡 GSAP를 import 합니다.
import pixelEffect from "src/assets/js/stacking-pixels.js";
import TerminalModal from "src/components/TerminalModal.vue";

export default defineComponent({
  name: "IndexPage",
  components: { TerminalModal },
  data() {
    const shouldTerminalBeOpen = () => window.innerWidth > 768;

    return {
      wordPairs: [
        // ... 기존 wordPairs
        { sub: "강력한 성능의 퍼블리셔", main: "Performant" },
        { sub: "유연한 반응형 퍼블리셔", main: "Responsive" },
        { sub: "구조적인 시맨틱 퍼블리셔", main: "Semantic" },
        { sub: "생동감 넘치는 퍼블리셔", main: "Interactive" },
        { sub: "모두를 위한 퍼블리셔", main: "Accessible" },
      ],
      isTerminalOpen: shouldTerminalBeOpen(),
      isTerminalMinimized: false,

      isMobileSize: !shouldTerminalBeOpen(),
    };
  },

  methods: {
    toggleTerminal() {
      this.isTerminalOpen = !this.isTerminalOpen;
    },

    handleResize() {
      const isCurrentlyMobile = window.innerWidth <= 768;

      // 창 크기가 768px 이하로 줄어들면 모달을 닫음
      if (isCurrentlyMobile) {
        this.isTerminalOpen = false;
      }

      // 만약 모바일 크기에서 데스크톱 크기로 커지면,
      // isTerminalOpen의 상태는 유지(false)되지만, 다음 갱신을 위해 isMobileSize 업데이트
      this.isMobileSize = isCurrentlyMobile;
    },
  },

  mounted() {
    // 1. 기존 픽셀 효과 호출
    pixelEffect();
    window.addEventListener("resize", this.handleResize);
  },

  beforeUnmount() {
    window.removeEventListener("resize", this.handleResize);
  },
});
</script>
