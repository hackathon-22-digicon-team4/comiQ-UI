<script setup lang="ts">
import { ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import image3 from "../assets/p00003.jpg";
import image4 from "../assets/p00004.jpg";
import image5 from "../assets/p00005.jpg";
import image6 from "../assets/p00006.jpg";
import image7 from "../assets/p00007.jpg";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation, Pagination } from "vue3-carousel";

const stamps = ref(["これすき", "w", "感動", "そうはならんやろ", "おいすー"]);
const images = ref([image3, image4, image5, image6, image7]);
</script>

<template>
  <h2>reread</h2>
  <div :class="$style.tab">
    <button :class="$style.navButton">
      <ChevronLeftIcon :class="$style.icon" />
    </button>
    <button :class="$style.tabButton" v-for="stamp in stamps" :key="stamp">
      {{ stamp }}
    </button>
    <button :class="$style.navButton">
      <ChevronRightIcon :class="$style.icon" />
    </button>
  </div>
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
.tab {
  height: 100px;
  border: solid 2px black;
  border-radius: 20px;
  margin: 0px 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.tabButton {
  display: block;
  font-size: 16px;
  padding: 16px 56px;
  border-radius: 20px;
  border: solid 1px black;
  cursor: pointer;
  background-color: rgb(240, 240, 240);
  &:hover {
    background-color: rgb(212, 212, 212);
  }
}

.navButton {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.icon {
  width: 24px;
}

.imageCarousel {
  margin: 48px 32px;
}

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
