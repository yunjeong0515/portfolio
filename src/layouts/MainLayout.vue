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
      :class="{ 'type-b': $route.meta.footerType === 'B' }"
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
          <div class="f-info"></div>
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
});
</script>
