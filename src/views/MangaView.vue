<script setup lang="ts">
import { ref, onMounted, computed } from "vue";
import StampShowComponent from "../components/StampShowComponent.vue";
import type {
  Stamp,
  Book,
  BookUserStamp,
  BookUserStampRequest,
  StampStatistics,
} from "../types/types";
import MangaComponent from "../components/MangaComponent.vue";
import MangaStampComponent from "../components/MangaStampComponent.vue";
import axios from "axios";
import { parseQueryParamToNumber } from "../utils/parseQueryParam";
import { useRoute } from "vue-router";

export type ShowStampMode = "me" | "others" | "all" | "none";

interface Props {
  mangaId: string;
}
const props = defineProps<Props>();
const route = useRoute();

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
const stampStatistics = ref<StampStatistics[]>([]);
const page = parseQueryParamToNumber(route.query.page);

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
  if (showStampMode.value === "none") {
    bookUserStamps.value = [];
    return;
  }
  const res = await axios.get(
    `https://api.comiq.kyosutech.com/v1/book_user_stamps?bookId=${props.mangaId}&users=${showStampMode.value}`,
    {
      withCredentials: true,
    },
  );
  bookUserStamps.value = res.data.bookUserStamps;
}

async function addStamp(BookUserStamp: BookUserStampRequest) {
  const res = await axios.post(
    "https://api.comiq.kyosutech.com/v1/book_user_stamps",
    BookUserStamp,
    {
      withCredentials: true,
    },
  );
  bookUserStamps.value.push(res.data);
  selectedStamp.value = "";
}

async function deleteStamp(id: string) {
  await axios.delete(`https://api.comiq.kyosutech.com/v1/book_user_stamps/${id}`, {
    withCredentials: true,
  });
  bookUserStamps.value = bookUserStamps.value.filter((bookUserStamp) => bookUserStamp.id !== id);
}

onMounted(async () => {
  const stampResponse = await axios.get("https://api.comiq.kyosutech.com/v1/stamps", {
    withCredentials: true,
  });
  stamps.value = stampResponse.data.stamps;
  const mangaResponse = await axios.get(
    `https://api.comiq.kyosutech.com/v1/books/${props.mangaId}`,
    {
      withCredentials: true,
    },
  );
  manga.value = { ...mangaResponse.data, imageUrl: mangaResponse.data.imageUrl.slice(0, -5) };

  const stampStatisticsResponse = await axios.get(
    `https://api.comiq.kyosutech.com/v1/book_user_stamp_counts?bookSeriesId=${manga.value.bookSeriesId}&bookId=${props.mangaId}`,
    { withCredentials: true },
  );
  console.table(stampStatisticsResponse);
  stampStatistics.value = stampStatisticsResponse.data.bookUserStampCounts;

  getBookUserStamps();
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
      :stamps="stamps"
      :stamp-statistics="stampStatistics"
      :defaultPage="Math.floor((page + 1) / 2)"
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
