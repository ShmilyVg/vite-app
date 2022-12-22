<script setup>
import { ref } from 'vue'
import { login } from '@/api/user.js'

const pageName = ref('Home')

const doLogin = async () => {
  const res = await login()
}
</script>

<template>
  <div>
    <h3 @click="doLogin">{{ pageName }}</h3>
    <el-button type="primary">{{pageName}}</el-button>
    <a href="https://vuejs.org/" target="_blank">
      <img src="@/assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: $main-color;
}
</style>
