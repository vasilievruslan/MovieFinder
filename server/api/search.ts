export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)
  const query = getQuery(event)

  return await $fetch(`${config.omdbUrl}?apikey=${config.apiKey}&s=${query.title}&plot=full`)
})