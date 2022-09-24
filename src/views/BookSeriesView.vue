<script setup lang="ts">
import { onMounted, ref } from "vue";
import { bookSeriesList } from "../mocks/bookSeriesList";
import type { BookSeries } from "@/types/types";

//const bookSeries = ref<BookSeries[]>();

onMounted(() => {
  console.log("bookSeries");
});
</script>

<template>
  <h2>漫画シリーズ一覧</h2>
  <div :class="$style.bookSeriesList">
    <div v-for="bookSeries in bookSeriesList" :key="bookSeries.id" :class="$style.bookSeries">
      <router-link :to="`bookSeries/${bookSeries.id}`">
        <img :src="bookSeries.imageUrl" :alt="bookSeries.name" />
      </router-link>
      <p>{{ bookSeries.name }}</p>
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
