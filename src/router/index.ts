import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookSeriesView from "../views/BookSeriesView.vue";
import LoginView from "../views/LoginView.vue";
import RereadView from "../views/RereadView.vue";
import BookView from "../views/BookView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bookSeries",
      name: "bookSeries",
      component: BookSeriesView,
    },
    {
      path: "/books",
      name: "books",
      component: BookView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/reread",
      name: "reread",
      component: RereadView,
    },
  ],
});

export default router;
