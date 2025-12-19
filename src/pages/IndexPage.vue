<template>
  <q-page class="mainpage-container">
    <div id="pixel-container" class="pixel-container"></div>
    <div class="container-wrap">
      <div class="wrapper">
        <div class="main-title-wrap">
          <div class="rolling-container">
            <div class="rolling-track">
              <span v-for="n in 6" :key="n" class="rolling-item font_700">
                <em>YUNJEONG </em>’S WEB PORTFOLIO
              </span>
            </div>
          </div>
          <span class="font_ibm sub-text text-r"
            >&lt;User-Centric Publisher/&gt;</span
          >
        </div>
        <div class="main-wrap">
          <div class="folder-list">
            <ul>
              <li>
                <router-link to="/">
                  <div class="folder-wrapper" ref="folderItem">
                    <div class="folder-icon-wrap">
                      <div class="folder-front folder-icon">
                        <div class="front-box"></div>
                      </div>
                      <!-- <div class="text-card">
                        <span class="font_ibm fonbt_500"
                          >저에 대해 알아보세요!</span
                        >
                      </div> -->
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
                <router-link to="/">
                  <div class="folder-wrapper" ref="folderItem">
                    <div class="folder-icon-wrap">
                      <div class="folder-front folder-icon">
                        <div class="front-box"></div>
                      </div>
                      <!-- <div class="text-card">
                        <span class="font_ibm fonbt_500"
                          >저에 대해 알아보세요!</span
                        >
                      </div> -->
                      <!-- <div class="folder-center folder-icon">
                        <img
                          src="../assets/imgs/index/about_card01.png"
                          alt=""
                        />
                      </div> -->
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
                  <span class="font_ibm font_500">PROJECT</span>
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
