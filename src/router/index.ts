import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookSeriesView from "../views/BookSeriesView.vue";
import LoginView from "../views/LoginView.vue";
import RereadView from "../views/RereadView.vue";
import BooksView from "../views/BooksView.vue";
import MangaPreviewView from "../views/MangaPreviewView.vue";
import mangaComponent from "../components/MangaComponent.vue";

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
      path: "/bookSeries/:id",
      name: "books",
      component: BooksView,
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
    {
      path: "/p/raw/:mangaId(\\d+)",
      name: "mangaPreviewInside",
      component: mangaComponent,
      props: true,
    },
    {
      path: "/p/:mangaId(\\d+)", // mangaIdは数字のみ
      name: "mangaPreview",
      component: MangaPreviewView,
      props: true,
    },
  ],
});

export default router;
