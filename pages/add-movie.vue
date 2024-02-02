<script setup>
import { UploadFilled } from '@element-plus/icons-vue'

const form = reactive({
  title: '',
  poster: ''
});

const posterRef = ref()

const onSubmit = () => {
  ElNotification({
    title: "Saved",
    message: `${form.title} was successfuly saved!`
  })

  form.title = '';
  form.director = '';

  posterRef.value.clearFiles()
}
</script>
<template>
  <form
    class="container mx-auto mt-5"
    @submit.prevent="onSubmit"
  >
    <h1 class="text-2xl text-bold">
      Add you onw movie
    </h1>
    <div class="flex gap-4 mt-4">
      <el-input
        v-model="form.title"
        placeholder="Title"
      />
      <el-input
        v-model="form.director"
        placeholder="Director"
      />
    </div>

    <el-upload
      ref="posterRef"
      class="mt-5"
      drag
      :auto-upload="false"
    >
      <el-icon class="el-icon--upload">
        <upload-filled />
      </el-icon>
      <div class="el-upload__text">
        Drop file here or <em>click to upload</em>
      </div>
      <template #tip>
        <div class="el-upload__tip">
          jpg/png files with a size less than 500kb
        </div>
      </template>
    </el-upload>

    <el-button
      class="mt-5"
      type="success"
      native-type="submit"
    >
      Save
    </el-button>
  </form>
</template>