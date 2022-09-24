<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';

interface Props{
  mangaId: string
}
const props = defineProps<Props>()
const page = ref(1); // 2*page, 2*page+1ページが写し出されている 
const path0 = ref("../../contents/");

</script>

<template>
  <button @click="page++">
    <img :src="`${path0}${mangaId}/${2*page}.jpg`" class="img-contents"/>
  </button>
  <button @click="page--">
    <img :src="`${path0}${mangaId}/${2*page-1}.jpg`" class="img-contents"/>
  </button>
</template>

<style module lang="scss">
img {
  width: 100%;
  height: auto;
}
button {
  width: 30%;
  height: auto;
  background-color: white;
  border: none;
  padding: 0px;
}
</style>