<template>
  <canvas ref="penCanvas" class="pen-canvas"></canvas>

  <q-layout view="lHh Lpr lFf">
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

    <div id="loader">
      <div v-for="i in 8" :key="i" class="loader-bar"></div>
    </div>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { gsap } from "gsap";

export default defineComponent({
  name: "EmptyLayout",
  data() {
    return {};
  },

  methods: {
    // --- 페이지 전환 애니메이션 (GSAP) ---
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
});
</script>
