<script setup lang="ts">
import { useUserStore } from "@/stores/users";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const userStore = useUserStore();

async function logout() {
  try {
    await axios.post("/v1/users/logout");
    userStore.me = undefined;
    router.push("/login/");
  } catch {
    alert("failed to logout");
  }
}
</script>

<template>
  <header>
    <h1>
      <router-link to="/">comiQ</router-link>
    </h1>
    <span v-if="userStore.me !== undefined">
      {{ userStore.me }}でログイン中 <span @click="logout()">ログアウト</span>
    </span>
    <span v-else>
      <router-link to="/login/"> ここを押してログイン </router-link>
    </span>
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
