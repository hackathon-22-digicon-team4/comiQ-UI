<script setup lang="ts">
import { ref, watch } from "vue";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/vue/24/solid";
import type { Book } from "@/types/types";

interface Props {
  mangaId: string;
  bookDetail: Book;
}
const props = defineProps<Props>();
const page = ref(1); // 2*page, 2*page+1ページが写し出されている
const lastPage = ref(10);
const path0 = "../../contents";
const mouseOnLeft = ref(false);
const mouseOnRight = ref(false);
watch(
  () => props.bookDetail,
  (bookDetail) => {
    lastPage.value = bookDetail.totalPages;
  },
);
</script>

<template>
  <div @click="page++" v-if="0 < page && page < lastPage / 2" :class="$style.manga">
    <img
      :src="`${path0}/${props.mangaId}/${2 * page}.jpg`"
      :class="$style.imgLeft"
      @mouseover="mouseOnLeft = true"
      @mouseleave="mouseOnLeft = false"
    />
    <ArrowLeftCircleIcon
      :class="$style.leftCircle"
      v-show="mouseOnLeft"
      @mouseover="mouseOnLeft = true"
      @mouseleave="mouseOnLeft = false"
    />
  </div>
  <div
    :class="[$style.manga, $style.firstPage]"
    @click="page++"
    v-else-if="page === 0"
    @mouseover="mouseOnLeft = true"
    @mouseleave="mouseOnLeft = false"
  >
    クリックで読み始める
    <ArrowLeftCircleIcon
      :class="$style.leftCircle"
      v-show="mouseOnLeft"
      @mouseover="mouseOnLeft = true"
      @mouseleave="mouseOnLeft = false"
    />
  </div>
  <div @click="page++" v-else :class="[$style.manga, $style.lastPage]">つぎの巻に進む</div>
  <div @click="page--" v-if="0 < page && page < lastPage / 2" :class="$style.manga">
    <img
      :src="`${path0}/${props.mangaId}/${2 * page - 1}.jpg`"
      :class="$style.imgRight"
      @mouseover="mouseOnRight = true"
      @mouseleave="mouseOnRight = false"
    />
    <ArrowRightCircleIcon
      :class="$style.rightCircle"
      v-show="mouseOnRight"
      @mouseover="mouseOnRight = true"
      @mouseleave="mouseOnRight = false"
    />
  </div>
  <div v-else-if="page === 0" :class="[$style.manga, $style.firstPage]">
    <h2>タイトル: {{ bookDetail.title }}</h2>
    <p>著者：APIに追加されたら追記</p>
    <p>totalPages: {{ bookDetail.totalPages }}</p>
  </div>
  <div
    @click="page--"
    v-else
    :class="[$style.manga, $style.lastPage]"
    @mouseover="mouseOnRight = true"
    @mouseleave="mouseOnRight = false"
  >
    もどる
    <ArrowRightCircleIcon
      :class="$style.rightCircle"
      v-show="mouseOnRight"
      @mouseover="mouseOnRight = true"
      @mouseleave="mouseOnRight = false"
    />
  </div>
</template>

<style module lang="scss">
.imgLeft {
  height: 100%;
}
.imgRight {
  height: 100%;
}
.manga {
  width: 30%;
  height: 70vh;
  background-color: white;
  border: none;
  padding: 0px;
  position: relative;
}
.leftCircle {
  width: 10%;
  position: absolute;
  top: 50%;
  left: 2%;
  opacity: 0.5;
  transform: translate(0, -50%);
}
.rightCircle {
  width: 10%;
  position: absolute;
  top: 50%;
  right: 2%;
  opacity: 0.5;
  transform: translate(0, -50%);
}

.firstPage,
.lastPage {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border: solid 1px black;
}
</style>
