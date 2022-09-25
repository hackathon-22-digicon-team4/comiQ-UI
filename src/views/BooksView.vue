<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import type { Book } from "@/types/types";
import { useRoute } from "vue-router";
import { parseParamToId } from "@/utils/parseParamToId";

const route = useRoute();

const books = ref<Book[]>();
const id = parseParamToId(route.params.id);

onMounted(async () => {
  const res = await axios.get(`/v1/book_series/${id}/books`);
  books.value = res.data.books;
});
</script>

<template>
  <h2>漫画一覧</h2>
  <div :class="$style.books">
    <div v-for="book in books" :key="book.id" :class="$style.book">
      <router-link :to="`books/${book.id}`">
        <img :src="book.imageUrl" :alt="book.title" />
      </router-link>
      <p>{{ book.title }}</p>
    </div>
  </div>
</template>

<style module lang="scss">
.books {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
.book {
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
