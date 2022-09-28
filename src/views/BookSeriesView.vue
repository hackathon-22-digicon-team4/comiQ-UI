<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import type { BookSeries } from "@/types/types";

const bookSeriesList = ref<BookSeries[]>();

onMounted(async () => {
  const res = await axios.get("https://api.comiq.kyosutech.com/v1/book_series");
  bookSeriesList.value = res.data.bookSeries;
});
</script>

<template>
  <h2>漫画シリーズ一覧</h2>
  <div :class="$style.bookSeriesList">
    <div v-for="bookSeries in bookSeriesList" :key="bookSeries.id" :class="$style.bookSeries">
      <router-link :to="`bookSeries/${bookSeries.id}`">
        <img :src="bookSeries.imageUrl" :alt="bookSeries.title" />
      </router-link>
      <p>{{ bookSeries.title }}</p>
    </div>
  </div>
</template>

<style module lang="scss">
.bookSeriesList {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.bookSeries {
  width: 10%;
  img {
    width: 100%;
  }
  p {
    overflow-wrap: break-word;
    margin: 0;
  }
}
</style>
