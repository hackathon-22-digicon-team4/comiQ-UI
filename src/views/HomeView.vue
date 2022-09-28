<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
</script>

<template>
  <div :class="$style.container">
    <button :class="$style.button1" @click="router.push('/bookSeries')">漫画シリーズ一覧へ</button>
    <button :class="$style.button2" @click="router.push('/reread')">あの場面をもう一度</button>
  </div>
</template>

<style module lang="scss">
.container {
  padding-top: 12px;
  flex-direction: column;
}
.button1 {
  cursor: pointer;
  padding: 7px;
  margin: 4px;
  color: white;
  background-color: #008800;
}
.button2 {
  cursor: pointer;
  padding: 7px;
  margin: 4px;
  color: white;
  background-color: #eb6100;
}
</style>
