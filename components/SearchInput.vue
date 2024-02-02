<script setup>
import { Search } from '@element-plus/icons-vue'
defineProps({
  size: {
    type: String,
    default: 'default'
  }
})
const route = useRoute()
const title = ref(route.query.title || '')
const onSubmit = () => {
  if(title.value) {
    navigateTo({
      path: '/search',
      query: {
        title: title.value
      }
    })
  }
}
</script>
<template>
  <form @submit.prevent="onSubmit">
    <el-input
      v-model="title"
      placeholder="Movie title"
      :size="size"
    >
      <template #append>
        <el-button
          :icon="Search"
          native-type="submit"
        >
          Search
        </el-button>
      </template>
    </el-input>
  </form>
</template>