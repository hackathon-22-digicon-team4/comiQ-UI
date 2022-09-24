<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

interface Props {
  images: string[];
}

const props = defineProps<Props>();
</script>

<template>
  <Carousel :items-to-show="4" :class="$style.imageCarousel" wrapAround :autoplay="2000">
    <Slide v-for="image in props.images" :key="image">
      <img alt="" :src="image" height="400" :class="$style.carousel__item" />
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
.carousel__pagination-button {
  width: 16px;
  height: 12px;
}
</style>
