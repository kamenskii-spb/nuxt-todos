<template>
  <div v-if="todo" class="min-w-full bg-white shadow rounded-lg h-auto ">
    <div class="m-3 text-base">
      <nuxt-link to="/" class="text-2xl">
        Назад
      </nuxt-link>
    </div>
    <div class="flex justify-center items-center w-full flex-col pt-6  pb-12">
      <span class="text-center p-2 text-base bold border-b-2 border-gray-600">
        Todo
      </span>
      <h1 class="text-3xl text-center p-4 ">
        {{ todo.title }}
      </h1>
      <div v-if="user" class="flex flex-col items-center mt-20">
        <span class="p-3">Исполнитель:</span>
        <span> <img class="h-10 w-10 rounded-full" :src="user.image" :alt="user.name"></span>
        <span>{{ user.name }}</span>
      </div>
      <div v-else class="mt-20">
        <span>Исполнитель не задан</span>
      </div>
    </div>
  </div>
  <div v-else>
    <h1 class="text-3xl text-center p-4 ">
      Задание не найдено
    </h1>
  </div>
</template>

<script>
export default {
  layout: 'todo',
  validate ({ params }) {
    return Boolean(params.id)
  },
  async asyncData ({ store, params, route, redirect }) {
    try {
      if (!params.id) {
        redirect('/')
      }
      const id = params.id
      const todo = await store.dispatch('todos/loadOne', id)
      const user = await store.dispatch('users/loadOne', todo.userId)
      return { todo, user }
    } catch (error) {

    }
  },
  head () {
    return {
      title: `${this.todo.title || ''} | ${process.env.appName}`,
      meta: [
        { hid: `todod-${this.todo.id || ''}`, name: 'description', content: this.todo.title || '' },
        { hid: `todok-${this.todo.id || ''}`, name: 'keywords', content: 'todo, page, NuxtJs' }
      ]
    }
  }
}
</script>
