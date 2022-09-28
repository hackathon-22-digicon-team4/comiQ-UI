<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
import type { BookUserStamp } from "@/types/types";

interface Props {
  bookUserStamps: BookUserStamp[];
}

const props = defineProps<Props>();
</script>

<template>
  <div v-if="bookUserStamps.length === 0">まだこのスタンプを押したことがありません。</div>
  <Carousel v-else :items-to-show="4" wrap-around :autoplay="2000" class="mangaCarousel">
    <Slide v-for="bookUserStamp in props.bookUserStamps" :key="bookUserStamp.id">
      <router-link :to="`manga/${bookUserStamp.bookId}?page=${bookUserStamp.pageNum}`">
        <img alt="" :src="bookUserStamp.bookPageImageUrl" height="400" />
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
