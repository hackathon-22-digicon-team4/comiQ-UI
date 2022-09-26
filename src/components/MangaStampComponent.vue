<script setup lang="ts">
import { EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline";
import type { Stamp } from "../types/types";

interface Props {
  selectedStamp: string;
  stamps: Stamp[];
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (event: "selectStamp", stampId: string): void;
}>();

function handleSelectStamp(stamp: string) {
  emit("selectStamp", stamp);
}
function foo() {
  console.log("Not Implemented");
}
</script>

<template>
  <div :class="$style.container">
    <button
      v-for="stamp in stamps"
      :key="stamp.id"
      :class="$style.stampButton"
      :is-selected="selectedStamp === stamp.id"
      @click="handleSelectStamp(stamp.id)"
    >
      <img :src="stamp.imageUrl" :class="$style.stampImg" :alt="stamp.name" />
    </button>
    <button :class="$style.modalButton" @click="foo">
      <EllipsisHorizontalCircleIcon />
    </button>
  </div>
</template>

<style module lang="scss">
.stampButton {
  cursor: pointer;
  &[is-selected="true"] {
    border: 1px solid;
    background-color: rgb(184, 255, 255);
  }
}
.stampImg {
  width: 20%;
}
.modalButton {
  width: 5%;
  cursor: pointer;
  background-color: rgb(219, 219, 219);
}
.container {
  display: flex;
  justify-content: space-between;
}
</style>
