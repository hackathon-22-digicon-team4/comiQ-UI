<script setup lang="ts">
import { ref } from "vue";
import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "@heroicons/vue/24/solid";

interface Props {
  mangaId: string;
}
const props = defineProps<Props>();
const page = ref(1); // 2*page, 2*page+1ページが写し出されている
const lastPage = ref(88);
const path0 = ref("../../contents/");
const mouseOnLeft = ref(false);
const mouseOnRight = ref(false);
</script>

<template>
  <ArrowLeftCircleIcon class="leftCircle" v-show="mouseOnLeft" />
  <button @click="if (page < lastPage / 2) page++;">
    <img
      :src="`${path0}${mangaId}/${2 * page}.jpg`"
      :class="$style.imgLeft"
      v-on:mouseover="mouseOnLeft = true"
      v-on:mouseleave="mouseOnLeft = false"
      :style="{ opacity: 1 - 0.5 * mouseOnLeft }"
    />
  </button>
  <button @click="if (page > 1) page--;">
    <img
      :src="`${path0}${mangaId}/${2 * page - 1}.jpg`"
      :class="$style.imgRight"
      v-on:mouseover="mouseOnRight = true"
      v-on:mouseleave="mouseOnRight = false"
      :style="{ opacity: 1 - 0.5 * mouseOnRight }"
    />
  </button>
  <ArrowRightCircleIcon class="rightCircle" v-show="mouseOnRight" />
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
.imgNext {
  position: relative;
  width: 50px;
  height: auto;
  top: -100px;
  left: 0px;
}
button {
  width: 30%;
  height: auto;
  background-color: white;
  border: none;
  padding: 0px;
}
</style>

<style lang="scss">
.leftCircle {
  width: 5%;
}
.rightCircle {
  width: 5%;
}
</style>
