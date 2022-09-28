<script setup lang="ts">
import { useUserStore } from "@/stores/users";
import { useRouter } from "vue-router";
import axios from "axios";

const router = useRouter();
const userStore = useUserStore();

async function logout() {
  try {
    await axios.post(
      "/v1/users/logout",
      {},
      {
        withCredentials: true,
      },
    );
    userStore.me = "";
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
    <div v-if="userStore.me !== ''" :class="$style.isLogin">
      <span>{{ userStore.me }}でログイン中</span>
      <button @click="logout" :class="$style.button">ログアウト</button>
    </div>
    <router-link v-else :class="$style.button" to="/login/">ログイン</router-link>
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

.button {
  border: solid 1px black;
  background-color: #fff;
  cursor: pointer;
  border-radius: 8px;
  padding: 2px 4px;
  text-decoration: none;
  color: black;
}

.isLogin {
  display: flex;
  align-items: center;
  button {
    margin-left: 8px;
  }
}
</style>
