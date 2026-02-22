<template>
  <div class="terminal-container">
    <div class="terminal-window" ref="window">
      <div class="terminal-header" ref="windowHeader">
        <div class="btn-wrap">
          <button @click="$emit('close')"></button>
        </div>
        <div class="title-wrap">
          <span class="font_ibm">Welcome</span>
        </div>
      </div>

      <div class="terminal-body">
        <div class="main-text">
          <p class="font_ibm font_400 main-text-output" ref="typingOutput">
            Welcome to Yunjeong’s Web Portfolio.<br /><br />
            기획을 디자인하고 코드로 완성하는, 디자인하는 퍼블리셔 이윤정입니다.
            <br />
            웹·모바일 환경에서 사용성과 완성도를 함께 고민하는 퍼블리셔로
            <br />실무와 개인 프로젝트를 통해 성장하고 있습니다.
          </p>
          <!-- <p class="font_ibm font_400 main-text-output" ref="typingOutput">
            Welcome to Yunjeong’s Web Portfolio.<br /><br />
            UI를 구조로 설계하고, 경험을 코드로 구현하는 퍼블리셔 이윤정입니다.
            <br />
            웹·모바일 환경에서 사용성과 완성도를 함께 고민하는 퍼블리셔로
            <br />실무와 개인 프로젝트를 통해 성장하고 있습니다.
          </p> -->
        </div>
        <p class="sub-text font_ibm font_400">
          yunjeong@publisher-portfolio:~ $
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap"; // GSAP 임포트

export default {
  name: "TerminalModal",
  emits: ["close"],
  props: {
    closeOnOutsideClick: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      typingFinished: false,

      originalText: "",
    };
  },

  methods: {
    dragElement(elmnt) {
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      const dragHandle = this.$refs.windowHeader;
      if (dragHandle) {
        dragHandle.onmousedown = dragMouseDown;
        dragHandle.style.cursor = "grab";
      } else {
        elmnt.onmousedown = dragMouseDown;
      }
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
      }
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = elmnt.offsetTop - pos2 + "px";
        elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
      }
      function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
      }
    },

    startTypingGSAP(element) {
      if (!element) return;

      const originalContent = this.originalText.trim();

      let textForTyping = originalContent.replace(/<br\s*\/?>/gi, "\n");

      textForTyping = textForTyping.replace(/\n[ \t]+/g, "\n");

      const characters = textForTyping.split("");

      const cursor = document.createElement("span");
      cursor.className = "dynamic-cursor is-typing";
      cursor.innerHTML = "|";

      element.innerHTML = "";

      element.appendChild(cursor);

      const tl = gsap.timeline({
        onComplete: () => {
          this.typingFinished = true;
          setTimeout(() => {
            if (cursor) {
              cursor.remove();
            }
          }, 500);
        },
      });

      characters.forEach((char) => {
        const charContent = char === " " ? "&nbsp;" : char;
        let charEl;

        if (char === "\n") {
          charEl = document.createElement("br");
        } else {
          charEl = document.createElement("span");
          charEl.className = "char";
          charEl.innerHTML = charContent;
        }

        tl.to(
          {},
          {
            duration: 0.03,
            onStart: () => {
              element.insertBefore(charEl, cursor);
            },
          }
        );
      });
    },

    handleClickOutside(event) {
      if (!this.closeOnOutsideClick) {
        return;
      }

      if (this.$refs.window && !this.$refs.window.contains(event.target)) {
        this.$emit("close");
      }
    },
  },

  mounted() {
    const windowElement = this.$refs.window;
    if (windowElement) {
      this.dragElement(windowElement);
    }

    document.addEventListener("mousedown", this.handleClickOutside);

    const mainTextWrapper = this.$el.querySelector(".main-text p");

    if (mainTextWrapper) {
      this.originalText = mainTextWrapper.innerHTML.trim();

      this.startTypingGSAP(mainTextWrapper);
    }
  },
};
</script>
