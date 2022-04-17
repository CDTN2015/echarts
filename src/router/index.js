import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "@/view/HomeView";
import IntroductoryView from "@/view/echarts/1.IntroductoryView";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    redirect: "/introductory",
  },
  {
    path: "/introductory",
    name: "introductory",
    component: IntroductoryView,
  },
  {
    path: "/title",
    name: "title",
    component: () => import("../view/echarts/2.TitleView"),
  },
  {
    path: "/tooltip",
    name: "tooltip",
    component: () => import("../view/echarts/3.TooltipView"),
  },
  {
    path: "/legend",
    name: "legend",
    component: () => import("../view/echarts/4.LegendView"),
  },
  {
    path: "/bar",
    name: "bar",
    component: () => import("../view/echarts/5.BarView"),
  },
  {
    path: "/pie",
    name: "pie",
    component: () => import("../view/echarts/6.PieView"),
  },
  {
    path: "/line",
    name: "line",
    component: () => import("../view/echarts/7.LineView"),
  },
  {
    path: "/multiline",
    name: "multiline",
    component: () => import("../view/echarts/8.MultiLineView"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
