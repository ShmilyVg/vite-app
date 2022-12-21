<script setup>
import { useUserStore } from '@/store/main/user.js'
const userStore = useUserStore()

const updateName = name => {
  // $patch 修改 store 中的数据
  userStore.$patch({
    name,
  })
}
console.log(import.meta.env)
</script>

<template>
  <div>
    <h3 @click="updateName('变成了新的长度的名字')">{{ userStore.name }}</h3>
    <h3 @click="updateName('超级管理员')">长度：{{ userStore.nameLength }}</h3>
    <div @click="userStore.getNameInfo()">获取名字</div>
  </div>
</template>

<style lang="scss" scoped>
.read-the-docs {
  color: $main-color;
}
</style>
