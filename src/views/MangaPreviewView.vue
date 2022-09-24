<script setup lang="ts">
import { ref } from 'vue';
import mangaComponent from "../components/MangaComponent.vue"
import mangaStampComponent from '../components/MangaStampComponent.vue'

let page = ref(0);
const props = defineProps({
  mangaId: {
    type: String, required: true
  }
})
</script>

<template>
  manga preview view
  {{ mangaId }}
  <mangaComesHere>
    <mangaComponent mangaId="1"/>
  </mangaComesHere>
  <stampComesHere>
    <mangaStampComponent/>
  </stampComesHere>
</template>

<style module lang="scss">
Contents {
  margin: auto;
}
mangaComesHere {
  border: 1px solid black;
  width: 80%;
  text-align: center;
  display: block;
  margin: auto;
}
stampComesHere {
  border: 1px solid black;
  width: 80%;
  text-align: center;
  display: block;
  margin: auto;
}
</style>