<script setup lang="ts">
import { ref } from "vue";
let path0 = ref("../../contents/")
</script>
<template>
  <img v-bind:src="path0 + 'stamps/1.png'" class="img-stamp"/>
  <img v-bind:src="path0 + 'stamps/2.png'" class="img-stamp"/>
  <img v-bind:src="path0 + 'stamps/3.png'" class="img-stamp"/>
  <img v-bind:src="path0 + 'stamps/4.png'" class="img-stamp"/>
  <img v-bind:src="path0 + 'stamps/5.png'" class="img-stamp"/>
</template>
<style>
img.img-stamp {
  width: 5%;
  height: auto;
}
</style>