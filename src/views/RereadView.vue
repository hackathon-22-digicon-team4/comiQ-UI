<script setup lang="ts">
import StampCarousel from "@/components/reread/StampCarousel.vue";
import { ref, onMounted } from "vue";
import MangaCarousel from "@/components/reread/MangaCarousel.vue";
import { stamps } from "@/mocks/stamps";
import { bookUserStamps } from "@/mocks/bookUserStamps";

const selectedStamp = ref<string>("");

function handleSelectStamp(stamp: string) {
  selectedStamp.value = stamp;
  //bookuserstampsをfetch
}

onMounted(() => {
  //fetch stamps
  //stampsの一番最初の要素のbookuserstampsをfetch
  //selectedStampをstampsの一番最初の要素にする
  console.log("mounted");
});
</script>

<template>
  <h2 :class="$style.pageTitle">あの場面をもう一度</h2>
  <p>過去にスタンプを押したシーンを見返すことができます。</p>
  <StampCarousel
    :class="$style.stampTab"
    :stamps="stamps"
    :selected-stamp="selectedStamp"
    @select-stamp="handleSelectStamp($event)"
  />
  <MangaCarousel :class="$style.mangaCarousel" :book-user-stamps="bookUserStamps" />
</template>

<style module lang="scss">
.mangaCarousel {
  margin: 48px 8px;
}
</style>
