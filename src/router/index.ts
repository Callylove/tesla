import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Report from "../views/Report.vue";
import Activity from "../views/Activity.vue";
import Home from "../views/Home.vue";
import Library from "../views/Library.vue";
import People from "../views/People.vue";
import Settings from "../views/Settings.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Home.vue"),
  },
  {
    path: "/report",
    name: "report",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Report.vue"),
  },
  {
    path: "/activity",
    name: "activity",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Activity.vue"),
  },
  {
    path: "/library",
    name: "library",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Library.vue"),
  },
  {
    path: "/people",
    name: "people",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/People.vue"),
  },
  {
    path: "/settings",
    name: "settings",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Settings.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
