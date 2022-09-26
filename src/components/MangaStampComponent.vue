<script setup lang="ts">
import { onMounted, ref } from "vue";
import axios from "axios";
import type { Stamp } from "../types/types";

interface Props {
  selectedStamp: string;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (event: "selectStamp", stampId: string): void;
}>();

function handleSelected(stamp: string) {
  emit("selectStamp", stamp);
}
function foo() {
  console.log("Not Implemented");
}

const stamps = ref<Stamp[]>([]);

onMounted(async () => {
  const stampResponse = await axios.get("/v1/stamps");
  stamps.value = stampResponse.data.stamps;
  if (stamps.value.length === 0) {
    return;
  }
  emit("selectStamp", stampResponse.data.stamps[0].id);
});
</script>

<template>
  <button
    v-for="stamp in stamps"
    :key="stamp.id"
    :class="$style.stampButton"
    :isSelected="selectedStamp === stamp.id"
    @click="handleSelected(stamp.id)"
  >
    <img :src="stamp.imageUrl" :class="$style.stampImg" />
  </button>
  <button :class="$style.modalButton" @click="foo">・</button>
</template>

<style module lang="scss">
.stampButton {
  width: 10%;
  height: auto;
  &[isSelected="true"] {
    border: 1px solid;
  }
}
.modalButton {
  width: 10%;
  height: 100px;
  background-color: rgb(219, 219, 219);
}
</style>
