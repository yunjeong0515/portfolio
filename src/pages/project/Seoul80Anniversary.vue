<template>
  <q-page
    v-if="project"
    class="projectdetailpage-container kmusicalpage-container"
  >
    <section class="visual-section">
      <div class="mockup-pc">
        <img
          src="../../../src/assets/imgs/projects/kmusical/mockup_pc.png"
          alt=""
        />
      </div>
      <div class="mockup-m">
        <img
          src="../../../src/assets/imgs/projects/kmusical/mockup_m.png"
          alt=""
        />
      </div>
      <div class="wrapper">
        <div class="project-info">
          <div class="info-summary">
            <div class="info-header">
              <span class="sub-title font_ibm">{{ project.description }}</span>
              <h2 class="main-title font_500">{{ project.name }}</h2>
            </div>

            <ul class="info-meta-list">
              <li class="meta-item">
                <span class="label font_ibm">Category</span>
                <span class="value font_ibm font_300">{{
                  project.category.join(" / ")
                }}</span>
              </li>
              <li class="meta-item">
                <span class="label font_ibm">Role</span>
                <span class="value font_ibm font_300">{{ project.role }}</span>
              </li>
              <li class="meta-item">
                <span class="label font_ibm">Date</span>
                <span class="value font_ibm font_300">{{ project.date }}</span>
              </li>
              <li class="meta-item item-skills">
                <span class="label font_ibm">Skills</span>
                <div class="value font_ibm skill-tag-group">
                  <span
                    v-for="skill in project.skills"
                    :key="skill"
                    class="skill-tag"
                  >
                    {{ skill }}
                  </span>
                </div>
              </li>
            </ul>
          </div>

          <div class="info-action">
            <a
              v-if="project.link"
              :href="project.link"
              target="_blank"
              class="view-more-btn"
            >
              <div class="icon">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_833_1795"
                    style="mask-type: luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="100"
                    height="100"
                  >
                    <path
                      d="M99.5 99.5H0.5V0.5H99.5V99.5Z"
                      fill="white"
                      stroke="white"
                    />
                  </mask>
                  <g mask="url(#mask0_833_1795)">
                    <path
                      d="M92.4092 8.17185L3.3125 97.3672"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M23.6836 2.66797C23.6836 2.66797 65.9937 2.71614 78.319 2.71614C90.6443 2.71614 97.332 10.7724 97.332 21.7878L97.332 76.5273"
                      stroke="white"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </div>
              <span class="font_ibm">View site</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { projects } from "src/data/projects"; // 데이터 가져오기

export default defineComponent({
  name: "Seoul80Anniversary",
  data() {
    return {
      project: projects.find((p) => p.id === "kmusical"),
    };
  },
});
</script>
