<script setup lang="ts">
import MangaComponent from "../components/MangaComponent.vue";
import MangaStampComponent from "../components/MangaStampComponent.vue";

interface Props {
  mangaId: string;
}
const props = defineProps<Props>();
</script>

<template>
  <div :class="$style.mangaComesHere">
    <MangaComponent :mangaId="mangaId" />
  </div>
  <div :class="$style.stampComesHere">
    <MangaStampComponent />
  </div>
</template>

<style module lang="scss">
Contents {
  margin: auto;
}
.mangaComesHere {
  border: 1px solid black;
  width: 80%;
  text-align: center;
  display: block;
  margin: auto;
}
.stampComesHere {
  border: 1px solid black;
  width: 80%;
  text-align: center;
  display: block;
  margin: auto;
}
</style>
