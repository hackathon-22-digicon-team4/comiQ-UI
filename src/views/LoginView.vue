<script setup lang="ts">
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useUserStore } from "@/stores/users";
const userStore = useUserStore();

const router = useRouter();

const id = ref("");
const password = ref("");

async function login() {
  try {
    await axios.post("https://api.comiq.kyosutech.com/v1/users/login", {
      id: id.value,
      password: password.value,
    });
    alert("logged in");
    userStore.me = id.value;
    router.push("/");
  } catch {
    alert("failed to login");
  }
}
async function signup() {
  try {
    await axios.post("https://api.comiq.kyosutech.com/v1/users/signup", {
      id: id.value,
      password: password.value,
    });
    alert("signed up");
    router.push("/");
  } catch {
    alert("failed to signup");
  }
}
</script>

<template>
  <h2>ログイン/サインアップ</h2>
  <form :class="$style.form">
    <div :class="$style.inputForm">
      <label for="id">
        ユーザー名
        <input type="text" v-model="id" name="username" />
      </label>
      <label for="password">
        パスワード
        <input type="password" v-model="password" name="password" />
      </label>
    </div>
    <div :class="$style.buttons">
      <button @click="login" type="button">ログイン</button>
      <button @click="signup" type="button">サインアップ</button>
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
  justify-content: space-around;
  padding: 12px 0;

  button {
    border: solid 1px black;
    background-color: #fff;
    cursor: pointer;
    border-radius: 8px;
    padding: 2px 4px;
  }
}
</style>
