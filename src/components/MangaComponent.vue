<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';

/*
const props = defineProps({
  mangaId: {
    type: String, required: true
  }
})*/

let page = ref(2); // 2*page, 2*page+1ページが写し出されている 
let path0 = ref("../../contents/");
let path1 = ref("../../contents/1/3.jpg");
let path2 = ref("../../contents/1/4.jpg");

</script>
<template>
  <!-- pathはcomputedで処理してもいいかも -->
  <img v-bind:src="path0 + '1' + '/' + (2*page) + '.jpg'" class="img-contents" v-on:click="page++"/>
  <img v-bind:src="path0 + '1' + '/' + (2*page-1) + '.jpg'" class="img-contents" v-on:click="page--" v-if="page>0"/>
</template>

<style module lang="scss">
img {
  width: 30%;
  height: auto;
}
</style>