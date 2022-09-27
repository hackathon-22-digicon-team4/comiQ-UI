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
function handleChangeMyStampShow() {
  emit("changeMyStampShow");
}
function handleChangeOtherStampShow() {
  emit("changeOtherStampShow");
}
</script>

<template>
  <div :class="$style.container">
    <button
      @click="handleChangeMyStampShow()"
      :class="$style.userButton"
      :is-my-stamp-show="isMyStampShow"
    >
      <UserIcon />
    </button>
    <button
      @click="handleChangeOtherStampShow()"
      :class="$style.usersButton"
      :is-other-stamp-show="isOtherStampShow"
    >
      <UserGroupIcon />
    </button>
  </div>
</template>

<style module lang="scss">
.userButton {
  width: 5%;
  cursor: pointer;
  &[is-my-stamp-show="false"] {
    opacity: 0.1;
  }
}
.usersButton {
  width: 5%;
  cursor: pointer;
  &[is-other-stamp-show="false"] {
    opacity: 0.1;
  }
}
.container {
  display: flex;
  justify-content: flex-end;
}
</style>
