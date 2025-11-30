const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/IndexPage.vue"),
        meta: { IndexPage: true },
      },
      {
        path: "/about",
        component: () => import("pages/AboutPage.vue"),
        meta: { AboutPage: true },
      },
      {
        path: "/project",
        component: () => import("pages/ProjectPage.vue"),
        meta: { ProjectPage: true },
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
