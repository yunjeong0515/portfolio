<template>
  <q-page class="mainpage-container">
    <div
      class="custom-tooltip font_ibm"
      id="tooltip-container"
      style="display: none; opacity: 0; position: fixed; z-index: 9999"
    >
      <span id="tooltip-text" class="font_ibm"></span>
      <div class="tooltip-arrow">
        <img src="../assets/imgs/icon/arrow_down_b9.svg" alt="arrow" />
      </div>
    </div>

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
          <span class="font_ibm sub-text text-r">&lt;/Design_to_Code&gt;</span>
        </div>

        <div class="main-wrap">
          <div class="folder-list">
            <ul>
              <li>
                <router-link
                  to="/about"
                  @mouseenter="showTooltip('about')"
                  @mouseleave="hideTooltip"
                >
                  <div class="folder-wrapper">
                    <div class="folder-icon-wrap">
                      <div class="folder-front folder-icon">
                        <div class="front-box"></div>
                      </div>
                      <div class="folder-center folder-icon">
                        <img
                          src="../assets/imgs/index/about_card01.png"
                          alt="about"
                        />
                      </div>
                      <div class="default-center folder-icon">
                        <img
                          src="../assets/imgs/index/folder_center.svg"
                          alt="folder"
                        />
                      </div>
                      <div class="folder-back folder-icon">
                        <img
                          src="../assets/imgs/index/folder_back01.svg"
                          alt="folder-back"
                        />
                      </div>
                    </div>
                  </div>
                  <span class="font_ibm font_400">About</span>
                </router-link>
              </li>

              <li>
                <router-link
                  to="/project"
                  @mouseenter="animateThumbnails"
                  @mouseleave="resetThumbnails"
                >
                  <div class="folder-wrapper project-folder">
                    <div class="folder-icon-wrap">
                      <div class="folder-front folder-icon">
                        <div class="front-box"></div>
                      </div>
                      <div class="default-center folder-icon">
                        <img
                          src="../assets/imgs/index/folder_center.svg"
                          alt=""
                        />
                      </div>
                      <div class="folder-thumbnails">
                        <img
                          src="../assets/imgs/projects/herue/thumb02.jpg"
                          class="thumb-item"
                          alt="p1"
                        />
                        <img
                          src="../assets/imgs/projects/kmusical/thumb02.jpg"
                          class="thumb-item"
                          alt="p2"
                        />
                        <img
                          src="../assets/imgs/projects/seouluniversity/thumb02.jpg"
                          class="thumb-item"
                          alt="p3"
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
                  <span class="font_ibm">Project</span>
                </router-link>
              </li>
            </ul>
          </div>
        </div>

        <div class="dock-wrap">
          <div
            class="dock-item"
            :class="{
              'is-running': isTerminalOpen,
              'is-minimized': isTerminalMinimized,
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
              <img src="../assets/imgs/icon/dock_mail.svg" alt="mail icon" />
            </button>
            <div class="running-dot"></div>
          </div>
          <div class="dock-item">
            <button class="dock-icon">
              <img
                src="../assets/imgs/icon/dock_messages.svg"
                alt="message icon"
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
import { defineComponent } from "vue";
import { gsap } from "gsap";
import pixelEffect from "src/assets/js/stacking-pixels.js";
import TerminalModal from "src/components/TerminalModal.vue";

export default defineComponent({
  name: "IndexPage",
  components: { TerminalModal },
  data() {
    return {
      isTerminalOpen: window.innerWidth > 768,
      isTerminalMinimized: false,
      isMobileSize: window.innerWidth <= 768,
    };
  },
  methods: {
    toggleTerminal() {
      this.isTerminalOpen = !this.isTerminalOpen;
    },
    handleResize() {
      const wasMobile = this.isMobileSize;
      this.isMobileSize = window.innerWidth <= 768;

      if (wasMobile !== this.isMobileSize) {
        if (this.isMobileSize) {
          this.forceShowMobile();
        } else {
          const tooltip = document.getElementById("tooltip-container");
          if (tooltip) {
            gsap.set(tooltip, { display: "none", opacity: 0 });
          }
          window.removeEventListener("mousemove", this.moveTooltip);

          const thumbs = document.querySelectorAll(
            ".project-folder .thumb-item"
          );
          if (thumbs.length > 0) {
            gsap.killTweensOf(thumbs);
            gsap.set(thumbs, {
              opacity: 0,
              scale: 0.5,
              x: 0,
              y: 0,
              rotation: 0,
            });
          }
        }
      }
    },

    showTooltip(type) {
      if (this.isMobileSize && type !== "mobile") return;
      const tooltip = document.getElementById("tooltip-container");
      const textEl = document.getElementById("tooltip-text");
      if (!tooltip || !textEl) return;

      gsap.killTweensOf(tooltip);
      const content = {
        about: "Who is Yunjeong?",
        project: "진행한 프로젝트 보러가기",
      };
      textEl.innerText = content[type];

      gsap.to(tooltip, {
        opacity: 1,
        scale: 1,
        duration: 0.2,
        display: "flex",
        overwrite: "all",
      });
      if (!this.isMobileSize) {
        window.addEventListener("mousemove", this.moveTooltip);
      }
    },

    hideTooltip() {
      if (this.isMobileSize) return;

      const tooltip = document.getElementById("tooltip-container");
      if (!tooltip) return;
      gsap.killTweensOf(tooltip);
      gsap.to(tooltip, {
        opacity: 0,
        scale: 0.9,
        duration: 0.2,
        onComplete: () => {
          tooltip.style.display = "none";
        },
        overwrite: "all",
      });
      window.removeEventListener("mousemove", this.moveTooltip);
    },

    moveTooltip(e) {
      if (this.isMobileSize) return;

      const tooltip = document.getElementById("tooltip-container");
      if (tooltip) {
        gsap.to(tooltip, {
          x: e.clientX + 20,
          y: e.clientY + 20,
          duration: 0.1,
        });
      }
    },

    animateThumbnails() {
      if (this.isMobileSize) return;
      this.showTooltip("project");
      const thumbs = document.querySelectorAll(".project-folder .thumb-item");
      if (thumbs.length > 0) {
        gsap.killTweensOf(thumbs);
        gsap.to(thumbs, {
          opacity: 1,
          scale: 1,
          y: (i) => -70 - i * 10,
          x: (i) => (i - 1) * 50,
          rotation: (i) => (i - 1) * 10,
          duration: 0.4,
          ease: "back.out(1.5)",
          stagger: 0.05,
          overwrite: "all",
        });
      }
    },

    resetThumbnails() {
      if (this.isMobileSize) return;
      this.hideTooltip();
      const thumbs = document.querySelectorAll(".project-folder .thumb-item");
      if (thumbs.length > 0) {
        gsap.killTweensOf(thumbs);
        gsap.to(thumbs, {
          opacity: 0,
          scale: 0.5,
          x: 0,
          y: 0,
          rotation: 0,
          duration: 0.3,
          ease: "power2.in",
          overwrite: "all",
        });
      }
    },

    forceShowMobile() {
      if (!this.isMobileSize) return;

      const thumbs = document.querySelectorAll(".project-folder .thumb-item");
      if (thumbs.length > 0) {
        gsap.set(thumbs, {
          opacity: 1,
          scale: 1,
          y: (i) => -60 - i * 8,
          x: (i) => (i - 1) * 40,
          rotation: (i) => (i - 1) * 8,
        });
      }

      // 2. 툴팁 강제 노출
      this.showTooltip("mobile");
    },
  },
  mounted() {
    pixelEffect();
    window.addEventListener("resize", this.handleResize);

    if (this.isMobileSize) {
      setTimeout(() => {
        this.forceShowMobile();
      }, 300);
    }
  },
  beforeUnmount() {
    window.removeEventListener("mousemove", this.moveTooltip);
    window.removeEventListener("resize", this.handleResize);
  },
});
</script>
