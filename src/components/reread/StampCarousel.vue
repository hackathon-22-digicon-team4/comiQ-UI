<script setup lang="ts">
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import type { Stamp } from "@/types/types";

interface Props {
  stamps: Stamp[];
  selectedStamp: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (event: "selectStamp", stampId: string): void;
}>();

function handleSelectStamp(stamp: string) {
  emit("selectStamp", stamp);
}
</script>

<template>
  <Carousel :items-to-show="5" wrap-around :class="$style.stampCarousel" class="stampCarousel">
    <Slide v-for="stamp in props.stamps" :key="stamp.id">
      <button
        :class="$style.stampButton"
        :data-selected="selectedStamp === stamp.id"
        @click="handleSelectStamp(stamp.id)"
      >
        <img :src="stamp.imageUrl" :alt="stamp.name" height="32" />
      </button>
    </Slide>
    <template #addons>
      <Navigation />
    </template>
  </Carousel>
</template>

<style module lang="scss">
.stampCarousel {
  padding: 12px 0;
  border: solid 2px black;
  border-radius: 20px;
}
.stampButton {
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
  &[data-selected="true"] {
    background-color: rgb(203, 203, 252);
  }
}

.icon {
  width: 24px;
}
</style>

<style lang="scss">
.stampCarousel {
  .carousel__prev {
    left: 24px;
  }
  .carousel__next {
    right: 24px;
  }
}
</style>
