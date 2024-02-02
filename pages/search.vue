<script setup>
  definePageMeta({
    name: 'Search'
  })
  const route = useRoute();
  const title = computed(() => route.query.title)
  const { data } = await useFetch('api/search', { query: { title }}, {watch: [title]})
</script>
<template>
  <din class="search">
    <div class="container mx-auto mt-4">
      <template v-if="data?.Search?.length">
        <el-carousel>
          <el-carousel-item
            v-for="movie in data.Search"
            :key="movie.imdbID"
          >
            <div class="p-4">
              <div class="flex">
                <el-image
                  :src="movie.Poster"
                  alt="movie.Title"
                  class="mr-3 size-40"
                  fit="cover"
                />
                <div>
                  <h4 class="text-xl font-semibold">
                    {{ movie.Title }}
                  </h4>
                  <p>Year: {{ movie.Year }}</p>
                  <el-button
                    class="mt-4"
                    tag="router-link"
                    :to="`movie/${movie.imdbID}`"
                  >
                    More details
                  </el-button>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>
      </template>
      <div
        v-else
        class="text-center"
      >
        Not found
      </div>
    </div>
  </din>
</template>