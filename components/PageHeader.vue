<script setup>
import { House, Plus } from '@element-plus/icons-vue'
</script>

<template>
  <header class="search-header border-b border-gray-300 p-4 flex">
    <el-button
      tag="router-link"
      to="/"
      :icon="House"
      class="mr-4"
    />
    <search-input />
    <el-button
      tag="router-link"
      to="/add-movie"
      :icon="Plus"
      class="ml-auto"
    />
  </header>
</template>