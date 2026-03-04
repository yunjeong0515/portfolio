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
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/picorporation",
        component: () => import("pages/project/PiCorporation.vue"),
        meta: { isDarkPage: true, footerType: "B" },
      },
      {
        path: "project/heruelab",
        component: () => import("pages/project/HeruePage.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/hanwhalife",
        component: () => import("pages/project/HanwhalifeEvent.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/seouluniversity",
        component: () => import("pages/project/SeouluniversityPage.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/rebound",
        component: () => import("pages/project/ReboundFestival.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/louche9",
        component: () => import("pages/project/Louche9Page.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/avanjewelry",
        component: () => import("pages/project/AvanjewelryPage.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/shortkong",
        component: () => import("pages/project/ShortkongPage.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/eumyang",
        component: () => import("pages/project/EumyangPage.vue"),
        meta: { isDarkPage: true, footerType: "B" },
      },
      {
        path: "project/neurobb",
        component: () => import("pages/project/NeurobbPage.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/chakansonsa",
        component: () => import("pages/project/ChakansonsaPage.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/phyxup",
        component: () => import("pages/project/PhyxupPage.vue"),
        meta: { footerType: "B", lightfooter: true },
      },
      {
        path: "project/wellas",
        component: () => import("pages/project/WellasPage.vue"),
        meta: { isDarkPage: true, footerType: "B" },
      },
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
