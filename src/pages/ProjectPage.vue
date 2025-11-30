<template>
  <q-page class="projectpage-container">
    <section class="visual-section">
      <div class="wrapper">
        <div class="sub-title">
          <span class="font_ibm">Digital Experiences-</span>
        </div>
        <div class="title-wrap">
          <span class="font_ibm">2024-2025</span>
          <h2 class="font_500">PROJECT</h2>
        </div>
        <div class="thumb-rolling-container">
          <ul>
            <li>
              <img />
            </li>
          </ul>
        </div>

        <div class="scroll-icon">
          <span class="font_ibm">SCROLL</span>
          <div class="icon">
            <img src="../assets/imgs/icon/arrow_down_b9.svg" alt="" />
          </div>
        </div>
      </div>
    </section>
    <section class="list-section">
      <div class="wrapper">
        <div class="list-head">
          <div class="head-tite-wrap">
            <span class="font_ibm">2024-2025</span>
            <div class="title-wrap">
              <span class="count"></span>
              <h2 class="font_500">PROJECT</h2>
              <div class="icon">
                <img src="../assets/imgs/icon/line_arrow_w.svg" alt="" />
              </div>
            </div>
          </div>
          <div class="list-view-toggle">
            <button
              class="view-btn-grid"
              :class="{ active: viewMode === 'grid' }"
              @click="viewMode = 'grid'"
            >
              <span>Grid</span>
            </button>

            <button
              class="view-btn-list"
              :class="{ active: viewMode === 'list' }"
              @click="viewMode = 'list'"
            >
              <span>List</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import router from "src/router";
import { defineComponent } from "vue";
import { RouterLink } from "vue-router";

export default defineComponent({
  name: "ProjectPage",

  data() {
    return {};
  },
  methods: {},
  mounted() {},
});
</script>
