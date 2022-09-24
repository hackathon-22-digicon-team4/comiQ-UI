<script setup lang="ts">
import StampTab from "@/components/reread/StampTab.vue";
import { ref, onMounted, computed } from "vue";
import MangaCarousel from "@/components/reread/MangaCarousel.vue";
import type { Stamp } from "@/types/stamp";
import image3 from "@/assets/p00003.jpg";
import image4 from "@/assets/p00004.jpg";
import image5 from "@/assets/p00005.jpg";
import image6 from "@/assets/p00006.jpg";
import image7 from "@/assets/p00007.jpg";

const stamps = ref<Stamp[]>([
  { name: "これすき", id: "1", imageUrl: "a" },
  { name: "w", id: "2", imageUrl: "b" },
  { name: "感動した", id: "3", imageUrl: "c" },
  { name: "そうはならんやろ", id: "4", imageUrl: "d" },
  { name: "おいすー", id: "5", imageUrl: "e" },
]);
const selectedStamp = ref<string>("1");
const images = ref<string[]>([image3, image4, image5, image6, image7]);
const mockImages = computed(() =>
  images.value.filter((_, i) => (Number(selectedStamp.value) % 2 == 0 ? i % 2 === 0 : i % 2 !== 0)),
);

function handleSelectStamp(stamp: string) {
  selectedStamp.value = stamp;
  //画像のfetch
}

onMounted(() => {
  //fetch stamps
  //stampsの一番の要素の画像のfetch
  console.log("mounted");
});
</script>

<template>
  <h2 :class="$style.pageTitle">あの場面をもう一度</h2>
  <p>過去にスタンプを押したシーンを見返すことができます。</p>
  <StampTab
    :class="$style.stampTab"
    :stamps="stamps"
    :selected-stamp="selectedStamp"
    @select-stamp="handleSelectStamp($event)"
  />
  <MangaCarousel :class="$style.mangaCarousel" :images="mockImages" />
</template>

<style module lang="scss">
.mangaCarousel {
  margin: 48px 8px;
}
</style>
