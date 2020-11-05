import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/lightboxsolver",
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
  }
];

const router = new VueRouter({
  routes
});

export default router;
