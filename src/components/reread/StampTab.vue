<script setup lang="ts">
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";
import type { Stamp } from "@/types/stamp";

interface Props {
  stamps: Stamp[];
  selectedStamp: string;
}

const props = defineProps<Props>();
const emit = defineEmits<{
  (event: "selectStamp", stampId: string): void;
}>();

function handleSelectStamp(stamp: string) {
  emit("selectStamp", stamp);
}
</script>

<template>
  <div :class="$style.tab">
    <button :class="$style.navButton">
      <ChevronLeftIcon :class="$style.icon" />
    </button>
    <button
      :class="$style.tabButton"
      v-for="stamp in props.stamps"
      :data-selected="selectedStamp === stamp.id"
      :key="stamp.id"
      @click="handleSelectStamp(stamp.id)"
    >
      {{ stamp.name }}
    </button>
    <button :class="$style.navButton">
      <ChevronRightIcon :class="$style.icon" />
    </button>
  </div>
</template>

<style module lang="scss">
.tab {
  height: 100px;
  border: solid 2px black;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
.tabButton {
  display: block;
  font-size: 16px;
  padding: 16px 56px;
  border-radius: 20px;
  border: solid 1px black;
  cursor: pointer;
  background-color: rgb(240, 240, 240);
  &:hover {
    background-color: rgb(212, 212, 212);
  }
  &[data-selected="true"] {
    background-color: rgb(203, 203, 252);
  }
}

.navButton {
  background-color: transparent;
  border: none;
  cursor: pointer;
}
.icon {
  width: 24px;
}
</style>
