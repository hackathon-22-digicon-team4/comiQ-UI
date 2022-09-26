<script setup lang="ts">
import { UserIcon, UserGroupIcon } from "@heroicons/vue/24/solid";
interface Props {
  isMyStampShow: boolean;
  isOtherStampShow: boolean;
}
const props = defineProps<Props>();
const emit = defineEmits<{
  (event: "changeMyStampShow"): void;
  (event: "changeOtherStampShow"): void;
}>();
function _changeMyStampShow() {
  emit("changeMyStampShow");
}
function _changeOtherStampShow() {
  emit("changeOtherStampShow");
}
</script>

<template>
  <div :class="$style.container">
    <button @click="_changeMyStampShow()" :class="$style.userButton" :isMyStampShow="isMyStampShow">
      <UserIcon />
    </button>
    <button
      @click="_changeOtherStampShow()"
      :class="$style.usersButton"
      :isOtherStampShow="isOtherStampShow"
    >
      <UserGroupIcon />
    </button>
  </div>
</template>

<style module lang="scss">
.userButton {
  width: 5%;
  &[isMyStampShow="false"] {
    opacity: 0.1;
  }
}
.usersButton {
  width: 5%;
  &[isOtherStampShow="false"] {
    opacity: 0.1;
  }
}
.container {
  display: flex;
  justify-content: flex-end;
}
</style>
