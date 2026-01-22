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
          <div class="info-header">
            <span class="sub-title font_ibm">{{ project.description }}</span>
            <h2 class="main-title font_500">{{ project.name }}</h2>
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
                  width="80"
                  height="80"
                  viewBox="0 0 80 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask
                    id="mask0_833_1970"
                    style="mask-type: luminance"
                    maskUnits="userSpaceOnUse"
                    x="0"
                    y="0"
                    width="80"
                    height="80"
                  >
                    <path
                      d="M79.5 79.5H0.5V0.5H79.5V79.5Z"
                      fill="white"
                      stroke="white"
                    />
                  </mask>
                  <g mask="url(#mask0_833_1970)">
                    <path
                      d="M73.9297 6.53631L2.65234 77.8926"
                      stroke="white"
                      stroke-width="2"
                    />
                    <path
                      d="M18.9492 2.1332C18.9492 2.1332 52.7973 2.17174 62.6576 2.17174C72.5178 2.17174 77.868 8.61677 77.868 17.429L77.868 61.2207"
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
    <section class="summary-section">
      <div class="wrapper">
        <ul class="info-meta-list">
          <li class="meta-item">
            <span class="label font_ibm">Category</span>
            <span class="value font_ibm">{{
              project.category.join(" / ")
            }}</span>
          </li>
          <li class="meta-item">
            <span class="label font_ibm">Role</span>
            <span class="value font_ibm">{{ project.role.join(", ") }}</span>
          </li>
          <li class="meta-item">
            <span class="label font_ibm">Date</span>
            <span class="value font_mon">{{ project.date }}</span>
          </li>
          <li class="meta-item item-skills">
            <span class="label font_ibm">Skills</span>
            <div class="skill-tag-group">
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
    </section>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import { projects } from "src/data/projects"; // 데이터 가져오기

export default defineComponent({
  name: "KmusicalMarket",
  data() {
    return {
      project: projects.find((p) => p.id === "kmusical"),
    };
  },
});
</script>
