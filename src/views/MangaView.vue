<script setup lang="ts">
import { ref, onMounted } from "vue";
import axios from "axios";
import { useUserStore } from "@/stores/users";
import MangaComponent from "../components/MangaComponent.vue";
import MangaStampComponent from "../components/MangaStampComponent.vue";
import StampShowComponent from "../components/StampShowComponent.vue";
import type { Stamp, Book } from "../types/types";

const userStore = useUserStore();
interface Props {
  mangaId: string;
}
const props = defineProps<Props>();
const selectedStamp = ref<string>("");
const isMyStampShow = ref<boolean>(true);
const isOtherStampShow = ref<boolean>(true);
const stamps = ref<Stamp[]>([]);

function handleSelectStamp(stamp: string) {
  selectedStamp.value = stamp;
}
function handleChangeMyStampShow() {
  isMyStampShow.value = !isMyStampShow.value;
}
function handleChangeOtherStampShow() {
  isOtherStampShow.value = !isOtherStampShow.value;
}
const bookDetail = ref<Book>({} as Book);

onMounted(async () => {
  const stampResponse = await axios.get("/v1/stamps");
  stamps.value = stampResponse.data.stamps;

  const bookResponse = await axios.get(`/v1/books/${props.mangaId}`);
  console.log(bookResponse);
  bookDetail.value = bookResponse.data;
});
</script>

<template>
  <StampShowComponent
    :is-my-stamp-show="isMyStampShow"
    :is-other-stamp-show="isOtherStampShow"
    @change-my-stamp-show="handleChangeMyStampShow"
    @change-other-stamp-show="handleChangeOtherStampShow"
  />
  <div :class="$style.mangaComesHere">
    <MangaComponent :manga-id="props.mangaId" :book-detail="bookDetail" />
  </div>
  <div :class="$style.stampComesHere">
    <MangaStampComponent
      :selected-stamp="selectedStamp"
      :stamps="stamps"
      @select-stamp="handleSelectStamp($event)"
    />
  </div>
</template>

<style module lang="scss">
.mangaComesHere {
  display: flex;
  justify-content: center;
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
  margin-top: 1%;
}
</style>
