const routes = [
  {
    path: "/",
    // 빈 레이아웃 적용
    component: () => import("layouts/EmptyLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: { IndexPage: true },
      },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "about",
        component: () => import("pages/AboutPage.vue"),
        meta: { AboutPage: true, footerType: "A" },
      },
      {
        path: "project",
        component: () => import("pages/ProjectPage.vue"),
        meta: { ProjectPage: true, footerType: "A" },
      },
      {
        path: "project/kmusical",
        component: () => import("pages/project/KmusicalMarket.vue"),
        meta: { isDarkPage: true, footerType: "B" },
      },
      {
        path: "project/seoul80",
        component: () => import("pages/project/Seoul80Anniversary.vue"),
        meta: { footerType: "B" },
      },
      {
        path: "project/picorporation",
        component: () => import("pages/project/PiCorporation.vue"),
        meta: { isDarkPage: true, footerType: "B" },
      },
      {
        path: "project/heruelab",
        component: () => import("pages/project/HeruePage.vue"),
        meta: { footerType: "B" },
      },
      {
        path: "project/hanwhalife",
        component: () => import("pages/project/HanwhalifeEvent.vue"),
        meta: { footerType: "B" },
      },
      // {
      //   path: "project/seouluniversity",
      //   component: () => import("pages/project/HanwhalifeEvent.vue"),
      // },
      {
        path: "project/rebound",
        component: () => import("pages/project/ReboundFestival.vue"),
        meta: { footerType: "B" },
      },
      // {
      //   path: "project/louche9",
      //   component: () => import("pages/project/ReboundFestival.vue"),
      // },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
