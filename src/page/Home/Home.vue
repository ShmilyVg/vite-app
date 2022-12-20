<script setup>
import { ref } from 'vue'

const pageName = ref('Home')
</script>

<template>
  <div>
    <h3>{{ pageName }}</h3>
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
