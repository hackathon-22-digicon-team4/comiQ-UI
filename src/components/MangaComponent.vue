<script setup lang="ts">
import { computed, ref, watch } from "vue";
import { XMarkIcon } from "@heroicons/vue/20/solid";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/vue/24/solid";
import type {
  BookUserStamp,
  Book,
  BookUserStampRequest,
  Stamp,
  StampStatistics,
} from "@/types/types";

type Direction = "left" | "right";

interface Props {
  manga: Book;
  selectedStamp: string;
  bookUserStamps: BookUserStamp[];
  stamps: Stamp[];
  stampStatistics: StampStatistics[];
  defaultPage: number;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (event: "addStamp", BookUserStamp: BookUserStampRequest): void;
  (event: "deleteStamp", id: string): void;
}>();

const page = ref(props.defaultPage); // 2*page, 2*page-1 ページ目が写し出されている
const lastPage = ref(4);
const mouseOnLeft = ref(false);
const mouseOnRight = ref(false);

const leftStamps = computed(() => {
  return props.bookUserStamps.filter(
    (bookUserStamp) => bookUserStamp.pageNum === 2 * page.value + 1,
  );
});
const rightStamps = computed(() => {
  return props.bookUserStamps.filter((bookUserStamp) => bookUserStamp.pageNum === 2 * page.value);
});

watch(
  () => props.manga,
  (manga) => {
    lastPage.value = manga.totalPages;
  },
);

function movePage(direction: Direction) {
  if (direction === "right") {
    page.value--;
  } else {
    page.value++;
  }
}

function handlePutStamp(e: MouseEvent, direction: Direction) {
  const { x, y } = e;
  const bookUserStamp: BookUserStampRequest = {
    bookId: props.manga.id,
    bookSeriesId: props.manga.bookSeriesId,
    pageNum: direction === "right" ? 2 * page.value - 1 : 2 * page.value,
    x: x,
    y: y,
    stampId: props.selectedStamp,
  };
  emit("addStamp", bookUserStamp);
}

function handleClick(e: MouseEvent, direction: Direction) {
  if (props.selectedStamp === "") {
    movePage(direction);
  } else {
    handlePutStamp(e, direction);
  }
}

async function handleDeleteStamp(id: string) {
  emit("deleteStamp", id);
}
</script>

<template>
  <div
    @click="handleClick($event, 'left')"
    v-if="manga && 0 < page && page < lastPage / 2"
    :class="$style.manga"
  >
    <img
      :src="`${manga.imageUrl}/${2 * page}.jpeg`"
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
    <div
      v-for="stamp in leftStamps"
      :key="stamp.id"
      :class="$style.stamp"
      :style="{ top: stamp.y + 'px', left: stamp.x + 'px' }"
    >
      <img
        :src="`https://comiq-prod-assets.s3.ap-northeast-1.amazonaws.com/stamps/${stamp.stampId}.jpeg`"
        alt=""
        width="32"
      />
      <button @click="handleDeleteStamp(stamp.id)" :class="$style.deleteButton">
        <XMarkIcon :class="$style.icon" />
      </button>
    </div>
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
  <div
    @click="handleClick($event, 'right')"
    v-if="manga && 0 < page && page < lastPage / 2"
    :class="$style.manga"
  >
    <img
      :src="`${manga.imageUrl}/${2 * page - 1}.jpeg`"
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
    <div
      v-for="stamp in rightStamps"
      :key="stamp.id"
      :class="$style.stamp"
      :style="{ top: stamp.y + 'px', left: stamp.x + 'px' }"
    >
      <img
        :src="`https://comiq-prod-assets.s3.ap-northeast-1.amazonaws.com/stamps/${stamp.stampId}.jpeg`"
        alt=""
        width="32"
      />
      <button @click="handleDeleteStamp(stamp.id)" :class="$style.deleteButton">
        <XMarkIcon :class="$style.icon" />
      </button>
    </div>
  </div>
  <div v-else-if="page === 0" :class="[$style.manga, $style.firstPage]">
    <h2>{{ manga.title }}</h2>
    <p>著者：{{ manga.authorName }}</p>
    <p>総ページ数: {{ manga.totalPages }}</p>
    <p>使用回数の多いスタンプ</p>
    <ol>
      <li
        v-for="(st, i) in stampStatistics.slice(0, 3)"
        :key="st.stampId"
        :class="$style.stampStat"
      >
        <span>{{ i + 1 }}.</span>
        <img :src="st.stampImageUrl" width="32" />
        {{ st.count }}回
      </li>
    </ol>
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
  display: inline-block;
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

.stamp {
  position: fixed;
  width: 32px;
  height: 32px;
  background-color: white;
  border: none;
  padding: 0px;
}

.icon {
  width: 20px;
}

.deleteButton {
  position: absolute;
  top: -8px;
  right: -8px;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  background-color: red;
  color: white;
  border: none;
  padding: 0px;
  opacity: 0%;
  &:hover {
    opacity: 60%;
  }
}

ol {
  margin: 0;
  padding: 0;
}

.stampStat {
  display: flex;
  align-items: center;
  gap: 4px;
  &:not(:first-child) {
    margin-top: 4px;
  }
}
</style>
