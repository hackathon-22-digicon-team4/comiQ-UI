<script setup lang="ts"></script>

<template>
  <header>
    <h1>
      <router-link to="/">comiQ</router-link>
    </h1>
  </header>
</template>

<style module lang="scss">
header {
  position: fixed;
  height: 48px;
  width: 100%;
  background-color: rgb(230, 230, 230);
  z-index: 99;
  display: flex;
  align-items: center;
  padding: 0px 12px;
  h1 {
    a {
      color: black;
      text-decoration: none;
    }
  }
}
</style>
