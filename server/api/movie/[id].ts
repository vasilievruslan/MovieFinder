export default defineEventHandler((event) => {
  const {omdbUrl, apiKey} = useRuntimeConfig(event)
  const id = getRouterParam(event, 'id')

  return $fetch(`${omdbUrl}?apikey=${apiKey}&i=${id}`)
})