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
          <p class="font_ibm font_500 main-text-output" ref="typingOutput">
            Welcome to Yunjeong’s Web Portfolio.<br /><br />
            Let's dive in and check out the results!<br />
            Please click a folder to view the details.
          </p>
        </div>
        <p class="sub-text font_ibm font_500">
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
    // 부모로부터 768px 이하일 때만 true 값을 받습니다.
    closeOnOutsideClick: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      // 💡 타이핑 효과가 끝났는지 여부 (프롬프트 표시 제어용)
      typingFinished: false,
      // 💡 원본 텍스트를 저장할 변수
      originalText: "",
    };
  },

  methods: {
    // --- 드래그 로직 (기존 코드 유지) ---
    dragElement(elmnt) {
      // ... (기존 dragElement 로직은 그대로 유지) ...
      var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
      const dragHandle = this.$refs.windowHeader;
      // ... (마우스 이벤트 핸들러 바인딩 코드 유지) ...
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
      // HTML <br>을 \n으로 변환 후, 연속된 줄 바꿈을 제거하여 깨끗하게 만듭니다.
      let textForTyping = originalContent.replace(/<br\s*\/?>/gi, "\n");

      // 2. 💡 핵심 수정: \n 뒤에 나오는 모든 공백(띄어쓰기)을 제거합니다.
      // 이는 '줄 시작 공백'을 제거합니다.
      textForTyping = textForTyping.replace(/\n[ \t]+/g, "\n");

      const characters = textForTyping.split("");

      // 1. 커서 요소 생성 및 초기 설정
      const cursor = document.createElement("span");
      cursor.className = "dynamic-cursor is-typing";
      cursor.innerHTML = "|";

      // 2. 텍스트 요소 비우기 (글자가 없으므로)
      element.innerHTML = "";

      // 3. 커서를 맨 처음에 삽입 (W 앞에 위치)
      element.appendChild(cursor);

      const tl = gsap.timeline({
        onComplete: () => {
          this.typingFinished = true;
          // 💡 커서 제거 전에 잠깐의 딜레이를 줍니다. (0.5초 대기)
          setTimeout(() => {
            if (cursor) {
              cursor.remove();
            }
          }, 500);
        },
      });

      // 4. 애니메이션 실행: 각 글자를 순차적으로 삽입하고 커서를 뒤로 이동시킵니다.
      characters.forEach((char) => {
        // 현재 처리할 글자
        const charContent = char === " " ? "&nbsp;" : char;
        let charEl;

        if (char === "\n") {
          // 줄 바꿈은 <br> 태그로 만듭니다.
          charEl = document.createElement("br");
        } else {
          // 일반 글자나 공백(&nbsp;)은 span.char로 만듭니다.
          charEl = document.createElement("span");
          charEl.className = "char";
          charEl.innerHTML = charContent;
        }

        // 💡 핵심: 더미 트윈을 사용하고 onStart에서 글자를 DOM에 삽입합니다.
        tl.to(
          {}, // 더미 대상 (시간 지연용)
          {
            duration: 0.03, // 글자 하나를 보여주는 속도
            onStart: () => {
              // **삽입:** 글자를 커서 바로 '앞'에 삽입합니다.
              // 커서는 글자 뒤로 밀려나게 됩니다.
              element.insertBefore(charEl, cursor);
            },
          }
          // '<'는 이전 트윈과 동시에 시작하지만, 여기서는 순차적인 타이핑이므로
          // 명시적인 위치를 지정할 필요는 없습니다. (이전 트윈 완료 후 바로 시작)
        );
      });
    },

    handleClickOutside(event) {
      // 1. Prop 값이 true (768px 이하)일 때만 작동
      if (!this.closeOnOutsideClick) {
        return;
      }

      // 2. 클릭된 영역이 터미널 창(this.$refs.window)의 외부인지 확인
      if (this.$refs.window && !this.$refs.window.contains(event.target)) {
        // 외부가 맞으면 'close' 이벤트를 발생시켜 모달을 닫음
        this.$emit("close");
      }
    },
  },

  mounted() {
    const windowElement = this.$refs.window;
    if (windowElement) {
      this.dragElement(windowElement);
    }

    // 💡 외부 클릭 이벤트를 document에 등록
    // 모달이 열릴 때만 이 리스너가 필요하며, 모달 닫힐 때 해제됩니다.
    document.addEventListener("mousedown", this.handleClickOutside);

    // 💡 타이핑 효과 로직 시작
    const mainTextWrapper = this.$el.querySelector(".main-text p");

    if (mainTextWrapper) {
      // 1. 원본 텍스트 저장 및 프롬프트 숨기기
      this.originalText = mainTextWrapper.innerHTML.trim();

      // 2. 타이핑 시작
      this.startTypingGSAP(mainTextWrapper);
    }
  },
};
</script>
