<template>
  <q-layout view="lHh Lpr lFf">
    <header class="header" :class="{ main: $route.meta.IndexPage }">
      <div class="wrapper">
        <router-link to="/" class="home-btn">
          <div class="dot-icon"></div>
          <div class="text-wrapper home-title">
            <span class="font_ibm font_400 original-text">HOME</span>
            <span class="font_ibm font_400 hover-text">HOME</span>
          </div>
          <span class="font_ibm font_400 main-title"
            >Yunjeong’s Web Portfolio</span
          >
        </router-link>
        <router-link class="header-logo" to="/">
          <!-- <h1 class="font_ibm font_400">Yunjeong’s Web Portfolio</h1> -->
          <svg
            width="1000"
            height="1000"
            viewBox="0 0 1000 1000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M267.695 875V628L46.6953 177H213.695L287.695 339L341.695 476H349.695L403.695 339L477.695 177H638.695L417.695 628V875H267.695ZM953.304 177V680C953.304 711.333 947.638 740 936.304 766C925.638 791.333 909.971 813 889.304 831C869.304 849 844.971 863 816.304 873C787.638 882.333 755.638 887 720.304 887C648.971 887 593.638 869.333 554.304 834C515.638 798 490.971 751 480.304 693L622.304 664C627.638 694 637.638 718.333 652.304 737C667.638 755.667 690.304 765 720.304 765C745.638 765 765.304 757 779.304 741C793.971 724.333 801.304 699 801.304 665V300H571.304V177H953.304Z"
              fill="#0a0a0a"
            />
          </svg>
        </router-link>
        <button
          class="hamburger-menu"
          :class="{ 'is-active': leftDrawerOpen }"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="nav">
          <ul>
            <li>
              <router-link to="/about" :class="{ on: $route.meta.AboutPage }">
                <div class="dot-icon"></div>
                <div class="text-wrapper">
                  <span class="font_ibm font_400 original-text">ABOUT</span>
                  <span class="font_ibm font_400 hover-text">ABOUT</span>
                </div>
              </router-link>
            </li>
            <li>
              <router-link
                to="/project"
                :class="{ on: $route.meta.ProjectPage }"
              >
                <div class="dot-icon"></div>
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
              <router-link to="/" @click="leftDrawerOpen = false">
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
      <router-view />
    </q-page-container>
    <footer class="footer">
      <div class="wrapper"></div>
    </footer>
  </q-layout>
</template>

<script>
import router from "src/router";
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "MainLayout",

  data() {
    return { leftDrawerOpen: false };
  },
  methods: {},
  mounted() {},
});
</script>
