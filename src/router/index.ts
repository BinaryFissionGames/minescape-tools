import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

export const LIGHTBOX_ROUTE = "/lightboxsolver";

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: LIGHTBOX_ROUTE,
    name: "Light Box Solver",
    component: () =>
      import(/* webpackChunkName: "lightbox" */ "../views/LightBoxSolver.vue")
  },
  {
    path: "/anagramsolver",
    name: "Anagram Solver",
    component: () =>
      import(
        /* webpackChunkName: "anagram" */ "../views/AnagramCipherSolver.vue"
      )
  },
  {
    path: "/skillcalcs",
    name: "Skill Calculators",
    component: () =>
      import(
        /* webpackChunkName: "skillcalcs" */ "../views/SkillCalculators.vue"
      )
  }
];

const router = new VueRouter({
  routes
});

export default router;
