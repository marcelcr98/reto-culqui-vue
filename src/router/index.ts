import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: "/",
    alias: "/token",
    name: "token",
    component: () => import("../components/TokenForm.vue"),
  },

  {
    path: "/",
    alias: "/token/details",
    name: "token-list",
    component: () => import("../components/TokenList.vue"),
  },
];

console.log(process.env.BASE_URL);

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;