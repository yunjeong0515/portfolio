<template>
  <q-layout view="lHh Lpr lFf">
    <header
      class="header"
      :class="{
        main: $route.meta.IndexPage,
        'is-light': $route.meta.isDarkPage,
      }"
    >
      <div class="wrapper">
        <router-link to="/" class="home-btn nav-btn" @click="handleSamePage">
          <div class="text-wrapper">
            <span class="font_ibm font_400 original-text">HOME</span>
            <span class="font_ibm font_400 hover-text">HOME</span>
          </div>
        </router-link>

        <button
          class="hamburger-menu nav-btn"
          :class="{ 'is-active': leftDrawerOpen }"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <span></span><span></span><span></span>
        </button>

        <div class="nav">
          <ul>
            <li>
              <router-link
                to="/about"
                class="nav-btn"
                :class="{ on: $route.meta.AboutPage }"
              >
                <div class="text-wrapper">
                  <span class="font_ibm font_400 original-text">ABOUT</span>
                  <span class="font_ibm font_400 hover-text">ABOUT</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/project"
                class="nav-btn"
                :class="{ on: $route.meta.ProjectPage }"
              >
                <div class="text-wrapper">
                  <span class="font_ibm font_400 original-text">PROJECT</span>
                  <span class="font_ibm font_400 hover-text">PROJECT</span>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </header>

    <transition name="fade-slide">
      <div v-if="leftDrawerOpen" class="mobile-full-menu">
        <nav class="menu-content">
          <ul class="menu-list">
            <li>
              <router-link to="/" @click="handleMobileHomeClick">
                <span class="num font_mon">01</span>
                <span class="text font_mon">HOME</span>
              </router-link>
            </li>
            <li>
              <router-link to="/about" @click="leftDrawerOpen = false">
                <span class="num font_mon">02</span>
                <span class="text font_mon">ABOUT</span>
              </router-link>
            </li>
            <li>
              <router-link to="/project" @click="leftDrawerOpen = false">
                <span class="num font_mon">03</span>
                <span class="text font_mon">PROJECT</span>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
    <transition name="fade">
      <a
        v-if="$route.meta.AboutPage || $route.meta.ProjectPage"
        class="floating-download-btn"
        href="/assets/file/resume_yunjeong.pdf"
        target="_blank"
        download="이윤정_자기소개서.pdf"
      >
        <div class="circle-text-wrap">
          <svg viewBox="0 0 100 100" class="rotating-svg">
            <path
              id="circlePath"
              d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
              fill="none"
            />
            <text class="font_ibm">
              <textPath xlink:href="#circlePath">
                DOWNLOAD RESUME • DOWNLOAD RESUME •
              </textPath>
            </text>
          </svg>
          <div class="center-icon">
            <img src="../assets/imgs/icon/download_b9.svg" alt="down" />
          </div>
        </div>
      </a>
    </transition>
    <q-page-container>
      <router-view v-slot="{ Component }">
        <transition
          :css="false"
          @leave="onLeave"
          @enter="onEnter"
          mode="out-in"
        >
          <component :is="Component" :key="$route.fullPath" />
        </transition>
      </router-view>
    </q-page-container>

    <footer
      class="footer"
      :class="{
        'type-a': !$route.meta.footerType || $route.meta.footerType === 'A',
        'type-b': $route.meta.footerType === 'B',
        'is-light': $route.meta.lightfooter,
      }"
    >
      <div class="wrapper">
        <template
          v-if="!$route.meta.footerType || $route.meta.footerType === 'A'"
        >
          <div class="contact-wrap">
            <p class="font_ibm font_500">
              Ready for your next challenge. <br />Let’s grow together.
            </p>
            <button class="round-btn font_ibm">CONTACT</button>
          </div>

          <div class="f-info">
            <div class="left-wrap">
              <span>010 - 2717 - 5354</span>
              <span>dbswjd2825@naver.com</span>
            </div>
            <div class="right-wrap">
              <span class="font_ibm"
                >©2026 LEE YUN JEONG. All Rights Reserved.</span
              >
            </div>
          </div>
        </template>

        <template v-else-if="$route.meta.footerType === 'B'">
          <div class="f-info">
            <div class="left-wrap">
              <span>010 - 2717 - 5354</span>
              <span>dbswjd2825@naver.com</span>
            </div>
            <div class="right-wrap">
              <span class="font_ibm"
                >©2026 LEE YUN JEONG. All Rights Reserved.</span
              >
            </div>
          </div>
        </template>
      </div>
    </footer>

    <div id="loader">
      <div v-for="i in 8" :key="i" class="loader-bar"></div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false,
    };
  },
  methods: {
    handleSamePage(e) {
      if (this.$route.path === "/") {
        // 기본 이동 동작 중단 (이미 홈이므로)
        if (e) e.preventDefault();

        // 애니메이션 수동 실행
        this.onLeave(null, () => {
          window.scrollTo(0, 0); // 스크롤 상단으로
          this.onEnter();
        });
      }
    },

    // 모바일 메뉴용 홈 클릭 핸들러
    handleMobileHomeClick() {
      this.leftDrawerOpen = false;
      this.handleSamePage();
    },

    // 1. 페이지를 떠날 때 (박스들이 나타남)
    onLeave(el, done) {
      const tl = gsap.timeline({ onComplete: done });

      tl.set("#loader", { display: "flex" }).fromTo(
        ".loader-bar",
        { x: "-100%" },
        {
          x: "0%",
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.inOut",
        }
      );
    },

    // 2. 새 페이지가 로드될 때 (박스들이 사라짐)
    onEnter(el, done) {
      const tl = gsap.timeline({ onComplete: done });

      tl.to(".loader-bar", {
        x: "100%",
        duration: 0.5,
        stagger: 0.08,
        ease: "power2.inOut",
      }).set("#loader", { display: "none" });
    },
  },
  mounted() {},
  watch: {
    leftDrawerOpen(isOpen) {
      if (isOpen) {
        // 메뉴가 열리면 스크롤 막기
        document.body.style.overflow = "hidden";
      } else {
        // 메뉴가 닫히면 스크롤 복구
        document.body.style.overflow = "";
      }
    },
    // 페이지 이동 시 메뉴가 열려있다면 스크롤을 복구해야 하므로 라우트 감시 추가
    $route() {
      this.leftDrawerOpen = false;
      document.body.style.overflow = "";
    },
  },
});
</script>
