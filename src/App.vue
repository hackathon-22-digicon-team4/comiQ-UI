<script setup lang="ts">
import { onMounted } from "vue";
import axios from "axios";
import { RouterView } from "vue-router";
import HeaderComponent from "./components/HeaderComponent.vue";
import { useUserStore } from "@/stores/users";

const userStore = useUserStore();

onMounted(async () => {
  try {
    const me = await axios.get("https://api.comiq.kyosutech.com/v1/users/me");
    userStore.me = me.data.id;
  } catch (err) {
    alert(err);
  }
});
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
  padding: 48px 20px 0px;
}
</style>
