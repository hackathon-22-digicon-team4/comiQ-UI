<script setup lang="ts"></script>

<template>
  <div :class="$style.container">
    <ul>
      <li>
        <router-link to="/bookSeries">漫画シリーズ一覧へ</router-link>
      </li>
      <li>
        <router-link to="/reread">あの場面をもう一度</router-link>
      </li>
    </ul>
  </div>
</template>

<style module lang="scss">
.container {
  padding-top: 12px;
}
</style>
