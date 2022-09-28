<script setup lang="ts">
import { EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline";
import type { Stamp } from "../types/types";
import StampModal from "./StampModal.vue";
import { ref } from "vue";

interface Props {
  selectedStamp: string;
  stamps: Stamp[];
}
defineProps<Props>();
const emit = defineEmits<{
  (event: "selectStamp", stampId: string): void;
}>();

const isModalOpen = ref(false);

function handleSelectStamp(stamp: string) {
  emit("selectStamp", stamp);
}
function openModal() {
  isModalOpen.value = true;
}
function closeModal() {
  isModalOpen.value = false;
}
</script>

<template>
  <div :class="$style.container">
    <button
      v-for="stamp in stamps.slice(0, 8)"
      :key="stamp.id"
      :class="$style.stampButton"
      :data-is-selected="selectedStamp === stamp.id"
      @click="handleSelectStamp(stamp.id)"
    >
      <img :src="stamp.imageUrl" :class="$style.stampImg" :alt="stamp.name" />
    </button>
    <button :class="$style.modalButton" @click="openModal">
      <EllipsisHorizontalCircleIcon />
    </button>
  </div>
  <StampModal
    @close-modal="closeModal"
    v-if="isModalOpen"
    :stamps="stamps"
    :selected-stamp="selectedStamp"
    @select-stamp="handleSelectStamp($event)"
  />
</template>

<style module lang="scss">
.stampButton {
  cursor: pointer;
  &[data-is-selected="true"] {
    background-color: rgb(184, 255, 255);
  }
}
.stampImg {
  width: 40%;
}
.modalButton {
  width: 5%;
  cursor: pointer;
  background-color: rgb(240, 240, 240);
}
.container {
  display: flex;
  justify-content: space-between;
}
</style>
