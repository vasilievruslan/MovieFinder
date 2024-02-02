<script setup>
import { Plus } from '@element-plus/icons-vue'
definePageMeta({
  layout: 'home',
  name: 'Home'
})
</script>

<template>
  <div class="home flex">
    <div class="input-container m-auto">
      <search-input size="large" />
      <el-button
        class="mt-3"
        tag="router-link"
        :icon="Plus"
        to="/add-movie"
      >
        Add movie
      </el-button>
    </div>
  </div>
</template>