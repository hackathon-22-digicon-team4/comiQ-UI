<script setup lang="ts">
import { ref } from "vue";

const username = ref("");
const password = ref("");

function login() {
  console.log("login", username.value, password.value);
}
function signin() {
  console.log("signin", username.value, password.value);
}
</script>

<template>
  <h2>ログイン/サインイン</h2>
  <form :class="$style.form">
    <div :class="$style.inputForm">
      <label for="username">
        ユーザー名
        <input type="text" v-model="username" />
      </label>
      <label for="password">
        パスワード
        <input type="password" v-model="password" />
      </label>
    </div>
    <div :class="$style.buttons">
      <button @click="login" type="button">ログイン</button>
      <button @click="signin" type="button">サインイン</button>
    </div>
  </form>
</template>

<style module lang="scss">
.form {
  width: fit-content;
}
.inputForm {
  display: flex;
  flex-direction: column;
}
.buttons {
  display: flex;
  justify-content: space-evenly;
  padding: 8px 0;

  button {
    display: block;
    border: solid 1px black;
    background-color: #fff;
    cursor: pointer;
    border-radius: 8px;
  }
}
</style>
