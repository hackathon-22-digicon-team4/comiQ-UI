<script setup lang="ts">
import { stamps } from "../mocks/stamps";
</script>

<template>
  <img :src="stamp.imageUrl" v-for="stamp in stamps" :key="stamp.id" class="img-stamp" />
</template>

<style>
img.img-stamp {
  width: 5%;
  height: auto;
}
</style>
