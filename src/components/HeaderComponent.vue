<script setup lang="ts">
import { useUserStore } from "@/stores/users";

const userStore = useUserStore();
</script>

<template>
  <header>
    <h1>
      <router-link to="/">comiQ</router-link>
    </h1>
    <span>{{ userStore.me }}でログイン中</span>
  </header>
</template>

<style module lang="scss">
header {
  position: fixed;
  height: 48px;
  width: calc(100vw - 24px);
  background-color: rgb(230, 230, 230);
  z-index: 99;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 12px;
  h1 {
    a {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
