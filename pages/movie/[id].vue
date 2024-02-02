<script setup>
definePageMeta({
  name: "Movie"
})
const route = useRoute()
const { data } = await useFetch(`/api/movie/${route.params.id}`)
</script>
<template>
  <div>
    <h1 class="text-center font-bold text-2xl mt-5">
      {{ data?.Title }}
    </h1>
    <div class="container mx-auto mt-5 flex">
      <el-image
        :src="data.Poster"
        :alt="data.Title"
      />
      <div class="lg:ml-5">
        <p>Year: {{ data.Year }}</p>
        <p>Director: {{ data.Director }}</p>
      </div>
    </div>
  </div>
</template>