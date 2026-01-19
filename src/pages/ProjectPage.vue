<template>
  <q-page class="projectpage-container">
    <section class="visual-section">
      <div class="sub-title">
        <div class="wrapper">
          <span class="font_ibm">Digital Experiences-</span>
        </div>
      </div>

      <div class="thumb-rolling-container">
        <div class="thumb-stage">
          <div class="thumb-roller">
            <template v-for="(p, i) in [...projects, ...projects]" :key="i">
              <div v-if="p.thumbnail_sub" class="thumb-card">
                <img :src="p.thumbnail_sub" :alt="p.name" />
              </div>
            </template>
          </div>
        </div>
      </div>

      <div class="title-wrap">
        <div class="wrapper">
          <span class="font_ibm">2024-</span>
          <h2 class="project-title font_500">
            <span class="key">P</span>
            <span class="key">R</span>
            <span class="key">O</span>
            <span class="key">J</span>
            <span class="key">E</span>
            <span class="key">C</span>
            <span class="key">T</span>
          </h2>
        </div>
      </div>
      <div class="scroll-icon">
        <span class="font_ibm">SCROLL</span>
        <div class="icon">
          <img src="../assets/imgs/icon/arrow_down_b9.svg" alt="" />
        </div>
      </div>
    </section>
    <section class="head-section">
      <div class="wrapper">
        <div class="head-tite-wrap">
          <span class="count font_ibm">{{ projects.length }}</span>
          <div class="title-wrap">
            <h2 class="font_mon font_400">PROJECT</h2>
            <div class="icon">
              <img src="../assets/imgs/icon/line_arrow_w.svg" alt="" />
            </div>
          </div>
        </div>
        <div
          class="list-view-toggle"
          :class="{
            'mode-grid': viewMode === 'grid',
            'mode-list': viewMode === 'list',
          }"
        >
          <button
            class="view-btn-grid"
            :class="{ active: viewMode === 'grid' }"
            @click="viewMode = 'grid'"
          >
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.91992 13.4697C9.32978 13.4697 10.4597 14.6105 10.46 16.0303V19.4395C10.46 20.8495 9.32992 22 7.91992 22H4.54004C3.14004 22 2 20.8495 2 19.4395V16.0303C2.00023 14.6105 3.14018 13.4697 4.54004 13.4697H7.91992ZM19.46 13.4697C20.8598 13.4697 21.9998 14.6105 22 16.0303V19.4395C22 20.8495 20.86 22 19.46 22H16.0801C14.6701 22 13.54 20.8494 13.54 19.4395V16.0303C13.5403 14.6105 14.6702 13.4697 16.0801 13.4697H19.46ZM7.91992 2C9.32977 2 10.4597 3.14975 10.46 4.56055V7.96973C10.46 9.38973 9.32992 10.5303 7.91992 10.5303H4.54004C3.14004 10.5303 2 9.38973 2 7.96973V4.56055C2.00024 3.14975 3.14019 2 4.54004 2H7.91992ZM19.46 2C20.8598 2 21.9998 3.14975 22 4.56055V7.96973C22 9.38973 20.86 10.5303 19.46 10.5303H16.0801C14.6701 10.5303 13.54 9.38972 13.54 7.96973V4.56055C13.5403 3.14976 14.6702 2.00001 16.0801 2H19.46Z"
                  fill="white"
                />
              </svg>
            </div>
            <span class="font_ibm">Grid</span>
          </button>

          <button
            class="view-btn-list"
            :class="{ active: viewMode === 'list' }"
            @click="viewMode = 'list'"
          >
            <div class="icon">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21 12L9 12M21 6L9 6M21 18L9 18M5 12C5 12.5523 4.55228 13 4 13C3.44772 13 3 12.5523 3 12C3 11.4477 3.44772 11 4 11C4.55228 11 5 11.4477 5 12ZM5 6C5 6.55228 4.55228 7 4 7C3.44772 7 3 6.55228 3 6C3 5.44772 3.44772 5 4 5C4.55228 5 5 5.44772 5 6ZM5 18C5 18.5523 4.55228 19 4 19C3.44772 19 3 18.5523 3 18C3 17.4477 3.44772 17 4 17C4.55228 17 5 17.4477 5 18Z"
                  stroke="#fff"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <span class="font_ibm">List</span>
          </button>
        </div>
      </div>
    </section>
    <section class="list-section">
      <div class="wrapper">
        <div
          class="project-list-container project-grid-view"
          v-if="viewMode === 'grid'"
        >
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-item grid-item"
            @mouseenter="setHover(project.id)"
            @mouseleave="clearHover()"
          >
            <div class="project-thumb">
              <div class="project-skills">
                <span
                  v-for="skill in project.skills"
                  :key="skill"
                  class="skill-tag font_ibm"
                >
                  {{ skill }}
                </span>
              </div>
              <img
                :src="project.thumbnail"
                :alt="project.name + ' 썸네일'"
                class="thumbnail-img"
              />
              <img
                :src="project.hoverImage"
                :alt="project.name + ' 호버 이미지'"
                class="hover-img"
                :class="{ active: hoveredProjectId === project.id }"
              />
            </div>
            <div class="project-info">
              <div class="title-wrap">
                <h3 class="project-name font_500">{{ project.name }}</h3>
                <span class="project-description font_mon">{{
                  project.description
                }}</span>
              </div>
              <span class="project-date font_mon">{{ project.date }}</span>
            </div>
          </div>
        </div>
        <div
          class="project-list-container project-list-view"
          v-else-if="viewMode === 'list'"
        >
          <div
            v-for="project in projects"
            :key="project.id"
            class="project-item list-item"
            @mouseenter="setHover(project.id)"
            @mouseleave="clearHover()"
          >
            <div class="list-head-row">
              <div class="title-wrap">
                <h3 class="project-name font_500">{{ project.name }}</h3>
                <span class="project-description font_ibm">{{
                  project.description
                }}</span>
              </div>
              <!-- <div class="project-skills">
                <span
                  v-for="skill in project.skills"
                  :key="skill"
                  class="skill-tag font_ibm"
                >
                  {{ skill }}
                </span>
              </div> -->
              <div class="project-category">
                <span
                  v-for="(cat, index) in project.category"
                  :key="index"
                  class="category-tag font_ibm"
                >
                  {{ cat }}
                  <i
                    v-if="index < project.category.length - 1"
                    class="separator"
                    >/</i
                  >
                </span>
              </div>

              <span class="project-date font_mon">{{ project.date }}</span>
            </div>
            <!-- <div class="project-thumb">
                <img
                  :src="project.thumbnail"
                  :alt="project.name + ' 썸네일'"
                  class="thumbnail-img"
                />
                <img
                  :src="project.hoverImage"
                  :alt="project.name + ' 호버 이미지'"
                  class="hover-img"
                  :class="{ active: hoveredProjectId === project.id }"
                />
              </div> -->
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { projects } from "src/data/projects";

gsap.registerPlugin(ScrollTrigger);
export default defineComponent({
  name: "ProjectPage",

  data() {
    return {
      viewMode: "grid",
      projects: projects,
      hoveredProjectId: null,
    };
  },
  methods: {
    setHover(id) {
      this.hoveredProjectId = id;
    },
    clearHover() {
      this.hoveredProjectId = null;
    },
    initTitleAnimation() {
      gsap.from(".project-title .key", {
        scrollTrigger: {
          trigger: ".project-title",
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "back.out(1.7)",
      });
    },
  },
  mounted() {
    this.initTitleAnimation();
  },
});
</script>
