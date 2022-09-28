<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import type { BookUserStamp } from "@/types/types";
import { ref, watch } from "vue";

interface Props {
  bookUserStamps: BookUserStamp[];
}

const props = defineProps<Props>();

interface RereadPages {
  bookId: string;
  bookPageImageUrl: string;
  pageNum: number;
}

const pages = ref<RereadPages[]>([]);
watch(
  () => props.bookUserStamps,
  (bookUserStamps) => {
    for (const bookUserStamp of bookUserStamps) {
      pages.value.push({
        bookId: bookUserStamp.bookId,
        bookPageImageUrl: bookUserStamp.bookPageImageUrl,
        pageNum: bookUserStamp.pageNum,
      });
    }
    pages.value = Array.from(new Set(pages.value));
  },
);
</script>

<template>
  <div v-if="bookUserStamps.length === 0">まだこのスタンプを押したことがありません。</div>
  <Carousel v-else :items-to-show="4" wrap-around :autoplay="2000" class="mangaCarousel">
    <Slide v-for="(page, index) in pages" :key="index">
      <router-link :to="`manga/${page.bookId}?page=${page.pageNum}`">
        <img alt="" :src="page.bookPageImageUrl" height="400" />
      </router-link>
    </Slide>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style module lang="scss">
.image {
  padding: 12px;
}
</style>

<style lang="scss">
.mangaCarousel {
  .carousel__pagination-button {
    width: 16px;
    height: 12px;
  }
}
</style>
