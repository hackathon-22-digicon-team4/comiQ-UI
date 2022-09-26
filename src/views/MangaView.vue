<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/users";
import MangaComponent from "../components/MangaComponent.vue";
import MangaStampComponent from "../components/MangaStampComponent.vue";
import StampShowComponent from "../components/StampShowComponent.vue";

const userStore = useUserStore();
interface Props {
  mangaId: string;
}
const props = defineProps<Props>();
const selectedStamp = ref<string>("");
const isMyStampShow = ref<boolean>(true);
const isOtherStampShow = ref<boolean>(true);

async function handleSelectStamp(stamp: string) {
  selectedStamp.value = stamp;
}
function changeMyStampShow() {
  isMyStampShow.value = isMyStampShow.value !== true;
}
function changeOtherStampShow() {
  isOtherStampShow.value = isOtherStampShow.value !== true;
}
</script>

<template>
  <StampShowComponent
    :isMyStampShow="isMyStampShow"
    :isOtherStampShow="isOtherStampShow"
    @changeMyStampShow="changeMyStampShow"
    @changeOtherStampShow="changeOtherStampShow"
  />
  <div :class="$style.mangaComesHere">
    <MangaComponent :mangaId="props.mangaId" />
  </div>
  <div :class="$style.stampComesHere">
    <MangaStampComponent
      :selected-stamp="selectedStamp"
      @select-stamp="handleSelectStamp($event)"
    />
  </div>
</template>

<style module lang="scss">
.mangaComesHere {
  border: 1px solid black;
  width: 80%;
  text-align: center;
  margin: auto;
}
.stampComesHere {
  border: 1px solid black;
  width: 80%;
  text-align: center;
  margin: auto;
}
</style>
