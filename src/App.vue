<script setup lang="ts">
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
</script>

<template>
  <HeaderComponent />
  <main>
    <RouterView />
  </main>
</template>

<style module lang="scss">
main {
  height: calc(100vh - 48px);
  padding-top: 48px;
}
</style>
