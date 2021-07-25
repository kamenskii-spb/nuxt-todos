<template>
  <Todos />
</template>

<script>
export default {
  async asyncData ({ store }) {
    await store.dispatch('todos/load')
  },
  head: {
    title: `Главная | ${process.env.appName}`,
    meta: [
      { hid: 'homepaged', name: 'description', content: 'Список всех дел' },
      { hid: 'homepagek', name: 'keywords', content: 'todos, js, nuxt' }
    ]
  }
}
</script>
