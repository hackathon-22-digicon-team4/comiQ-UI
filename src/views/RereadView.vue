<script setup lang="ts">
import StampCarousel from "@/components/reread/StampCarousel.vue";
import { ref, onMounted } from "vue";
import MangaCarousel from "@/components/reread/MangaCarousel.vue";
import axios from "axios";
import type { BookUserStamp, Stamp } from "@/types/types";

const selectedStamp = ref<string>("");
const bookUserStamps = ref<BookUserStamp[]>([]);
const stamps = ref<Stamp[]>([]);

async function handleSelectStamp(stamp: string) {
  selectedStamp.value = stamp;
  const res = await axios.get(`/v1/book_user_stamps?stampId=${stamp}&users=me`, {
    withCredentials: true,
  });
  bookUserStamps.value = res.data.bookUserStamps;
}

onMounted(async () => {
  const stampResponse = await axios.get("/v1/stamps", {
    withCredentials: true,
  });
  stamps.value = stampResponse.data.stamps;
  if (stamps.value.length === 0) {
    return;
  }
  const bookUserStampResponse = await axios.get(
    `/v1/book_user_stamps?stampId=${stampResponse.data.stamps[0].id}&users=me`,
    {
      withCredentials: true,
    },
  );
  bookUserStamps.value = bookUserStampResponse.data.bookUserStamps;
  selectedStamp.value = stampResponse.data.stamps[0].id;
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
