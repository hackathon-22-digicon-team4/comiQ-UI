<script setup lang="ts">
import { EllipsisHorizontalCircleIcon } from "@heroicons/vue/24/outline";
import type { Stamp } from "../types/types";
import s_fuffuffu from "@/assets/1.png";
import s_kandoushita from "@/assets/2.png";
import s_koresuki from "@/assets/3.png";
import s_oisu from "@/assets/4.png";
import s_souhanaranyaro from "@/assets/5.png";
import s_tasukaru from "@/assets/6.png";
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
const stamps: Stamp[] = [
  { name: "これすき", id: "1", imageUrl: s_koresuki },
  { name: "感動した", id: "3", imageUrl: s_kandoushita },
  { name: "そうはならんやろ", id: "4", imageUrl: s_souhanaranyaro },
  { name: "おいすー", id: "5", imageUrl: s_oisu },
  { name: "フッフッフ", id: "6", imageUrl: s_fuffuffu },
  { name: "たすかる", id: "7", imageUrl: s_tasukaru },
  { name: "これすき", id: "1", imageUrl: s_koresuki },
  { name: "感動した", id: "3", imageUrl: s_kandoushita },
  { name: "そうはならんやろ", id: "4", imageUrl: s_souhanaranyaro },
  { name: "おいすー", id: "5", imageUrl: s_oisu },
  { name: "フッフッフ", id: "6", imageUrl: s_fuffuffu },
  { name: "たすかる", id: "7", imageUrl: s_tasukaru },
];

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
  background-color: rgb(219, 219, 219);
}
.container {
  display: flex;
  justify-content: space-between;
}
</style>
