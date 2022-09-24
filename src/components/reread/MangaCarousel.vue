<script setup lang="ts">
import { ref } from "vue";
import image3 from "@/assets/p00003.jpg";
import image4 from "@/assets/p00004.jpg";
import image5 from "@/assets/p00005.jpg";
import image6 from "@/assets/p00006.jpg";
import image7 from "@/assets/p00007.jpg";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";
const images = ref([image3, image4, image5, image6, image7]);
</script>

<template>
  <Carousel :items-to-show="4" :class="$style.imageCarousel" wrapAround :autoplay="2000">
    <Slide v-for="image in images" :key="image">
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
