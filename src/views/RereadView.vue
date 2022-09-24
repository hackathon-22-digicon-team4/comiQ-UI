<script setup lang="ts">
import StampTab from "@/components/reread/StampTab.vue";
import MangaCarousel from "@/components/reread/MangaCarousel.vue";
</script>

<template>
  <h2 :class="$style.pageTitle">あの場面をもう一度</h2>
  <p>過去にスタンプを押したシーンを見返すことができます。</p>
  <StampTab :class="$style.stampTab" />
  <MangaCarousel :class="$style.mangaCarousel" />
</template>

<style module lang="scss">
.mangaCarousel {
  margin: 48px 8px;
}
</style>
