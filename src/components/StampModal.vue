<script setup lang="ts">
import type { Stamp } from "@/types/types";

interface Props {
  stamps: Stamp[];
  selectedStamp: string;
}

defineProps<Props>();
const emit = defineEmits<{
  (e: "closeModal"): void;
  (e: "selectStamp", stampId: string): void;
}>();

function handleSelectStamp(stampId: string) {
  emit("selectStamp", stampId);
  emit("closeModal");
}
</script>

<template>
  <div :class="$style.modalWrapper" @click.self="emit('closeModal')">
    <div :class="$style.modalContent">
      <h2>スタンプ一覧</h2>
      <div :class="$style.container">
        <button
          v-for="stamp in stamps.slice(9)"
          :key="stamp.id"
          :class="$style.stampButton"
          :data-is-selected="selectedStamp === stamp.id"
          @click="handleSelectStamp(stamp.id)"
        >
          <img :src="stamp.imageUrl" :class="$style.stampImg" :alt="stamp.name" />
        </button>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.modalWrapper {
  z-index: 100;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}

.modalContent {
  position: absolute;
  inset: 0;
  width: 50%;
  height: 50%;
  margin: auto;
  background-color: white;
  overflow-y: scroll;
}

.stampButton {
  cursor: pointer;
  &[data-is-selected="true"] {
    border: solid 4px rgb(184, 255, 255);
    background-color: rgb(184, 255, 255);
  }
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
</style>
