import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Features from "../views/Features.vue";
import Team from "../views/Team.vue";
import SigIn from "../views/SignIn.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/Features",
    name: "Features",
    component: Features
  },
  {
    path: "/Team",
    name: "Team",
    component: Team
  },
  {
    path: "/SigIn",
    name: "SigIn",
    component: SigIn
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
