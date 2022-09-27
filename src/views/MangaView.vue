<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import StampShowComponent from "../components/StampShowComponent.vue";
import type { Stamp, Book, BookUserStamp, BookUserStampRequest } from "../types/types";
import MangaComponent from "../components/MangaComponent.vue";
import MangaStampComponent from "../components/MangaStampComponent.vue";
import axios from "axios";

export type ShowStampMode = "me" | "others" | "all" | "none";

interface Props {
  mangaId: string;
}
const props = defineProps<Props>();

const selectedStamp = ref<string>("");
const isMyStampShow = ref<boolean>(true);
const isOtherStampShow = ref<boolean>(true);
const showStampMode = computed<ShowStampMode>(() => {
  if (isMyStampShow.value && isOtherStampShow.value) {
    return "all";
  } else if (isMyStampShow.value) {
    return "me";
  } else if (isOtherStampShow.value) {
    return "others";
  } else {
    return "none";
  }
});
const stamps = ref<Stamp[]>([]);
const bookUserStamps = ref<BookUserStamp[]>([]);
const manga = ref<Book>({} as Book);

function handleSelectStamp(stamp: string) {
  selectedStamp.value = stamp;
}
function handleChangeMyStampShow() {
  isMyStampShow.value = !isMyStampShow.value;
  getBookUserStamps();
}
function handleChangeOtherStampShow() {
  isOtherStampShow.value = !isOtherStampShow.value;
  getBookUserStamps();
}

async function getBookUserStamps() {
  const res = await axios.get(
    `/v1/book_user_stamps?bookId=${props.mangaId}&users=${showStampMode.value}`,
  );
  bookUserStamps.value = res.data.bookUserStamps;
}

async function addStamp(BookUserStamp: BookUserStampRequest) {
  const res = await axios.post("/v1/book_user_stamps", BookUserStamp);
  bookUserStamps.value.push(res.data);
  bookUserStamps.value.push({
    id: "aaa",
    bookId: "a",
    pageNum: 2,
    x: BookUserStamp.x,
    y: BookUserStamp.y,
    userId: "aaa",
    stampId: BookUserStamp.stampId,
    bookPageImageUrl: "https://q.trap.jp/api/v3/public/icon/mehm8128",
  }); //あとで消す
  selectedStamp.value = "";
}

async function deleteStamp(id: string) {
  await axios.delete(`/v1/book_user_stamps/${id}`);
  bookUserStamps.value = bookUserStamps.value.filter((bookUserStamp) => bookUserStamp.id !== id);
}

onMounted(async () => {
  const stampResponse = await axios.get("/v1/stamps");
  stamps.value = stampResponse.data.stamps;

  const bookResponse = await axios.get(`/v1/books/${props.mangaId}`);
  manga.value = bookResponse.data;
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
    <MangaComponent
      :manga="manga"
      :selected-stamp="selectedStamp"
      :book-user-stamps="bookUserStamps"
      @add-stamp="addStamp($event)"
      @delete-stamp="deleteStamp($event)"
    />
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
