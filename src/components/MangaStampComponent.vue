<script setup lang="ts">
import { onMounted, ref } from "vue";
import { EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline";
import axios from "axios";
import type { Stamp } from "../types/types";

interface Props {
  selectedStamp: string;
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

const stamps = ref<Stamp[]>([]);

onMounted(async () => {
  const stampResponse = await axios.get("/v1/stamps");
  stamps.value = stampResponse.data.stamps;
});
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
  &[is-selected="true"] {
    border: 1px solid;
    background-color: rgb(184, 255, 255);
  }
}
.stampImg {
  width: 20%;
  height: auto;
}
.modalButton {
  width: 5%;
  height: 100%;
  background-color: rgb(219, 219, 219);
}
.container {
  height: auto;
  display: flex;
}
</style>
