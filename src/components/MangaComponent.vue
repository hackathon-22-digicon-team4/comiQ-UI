<script setup lang="ts">
import { ref } from "vue";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/vue/24/solid";

interface Props {
  mangaId: string;
}
const props = defineProps<Props>();
const page = ref(1); // 2*page, 2*page+1ページが写し出されている
const lastPage = ref(88);
const path0 = "../../contents";
const mouseOnLeft = ref(false);
const mouseOnRight = ref(false);
</script>

<template>
  <button @click="page < lastPage / 2 && page++">
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
  </button>
  <button @click="page > 1 && page--">
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
  </button>
</template>

<style module lang="scss">
.imgLeft {
  width: 100%;
  height: auto;
}
.imgRight {
  width: 100%;
  height: auto;
}
button {
  width: 30%;
  height: auto;
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
</style>
