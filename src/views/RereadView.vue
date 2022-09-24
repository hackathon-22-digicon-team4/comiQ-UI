<script setup lang="ts">
import { ref } from "vue";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/vue/24/solid";

const stamps = ref(["これすき", "w", "感動", "そうはならんやろ", "おいすー"]);
</script>

<template>
  <h2>reread</h2>
  <div :class="$style.tab">
    <button :class="$style.navButton">
      <ChevronLeftIcon :class="$style.icon" />
    </button>
    <button :class="$style.tabButton" v-for="stamp in stamps" :key="stamp">
      {{ stamp }}
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
  margin: 0px 20px;
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
