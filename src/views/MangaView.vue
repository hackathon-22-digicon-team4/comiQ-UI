<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/users";
import MangaComponent from "../components/MangaComponent.vue";
import MangaStampComponent from "../components/MangaStampComponent.vue";

const userStore = useUserStore();
interface Props {
  mangaId: string;
}
const props = defineProps<Props>();
const selectedStamp = ref<string>("");

function handleSelectStamp(stamp: string) {
  selectedStamp.value = stamp;
  const res = await axios.get(`/v1/book_user_stamps?stampId=${stamp}&userId=${userStore.me}`);
  bookUserStamps.value = res.data.bookUserStamps;
}
</script>

<template>
  <div :class="$style.mangaComesHere">
    <MangaComponent :mangaId="props.mangaId" />
  </div>
  <div :class="$style.stampComesHere">
    <MangaStampComponent :selected-stamp="selectedStamp" />
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
