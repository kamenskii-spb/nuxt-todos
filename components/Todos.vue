<template>
  <div class="py-0">
    <Loader v-if="loading" />
    <div v-else class="inline-block min-w-full shadow rounded-lg    ">
      <table class="min-w-full leading-normal">
        <thead>
          <tr>
            <th scope="col" class=" px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              Испольнитель
            </th>
            <th scope="col" class=" px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              Задание
            </th>
            <th scope="col" class="w-1/4  py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
              Статус
            </th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(todo, idx) in todos" :key="idx" class="bg-white border-b border-gray-200 hover:bg-gray-100 cursor-pointer" @click="goTo(todo.id)">
            <td class="px-5 py-5 text-sm w-1/4 ">
              <div class="flex items-center items-end h-10">
                <div v-if="todo.user && todo.user.executorImg" class="flex-shrink-0 h-10 w-10 mr-3">
                  <img class="h-10 w-10 rounded-full" :src="todo.user.executorImg" alt="">
                </div>
                <div>
                  <div class="text-sm font-medium text-gray-900">
                    {{ todo.user ? todo.user.executorName : 'Испольнитель не задан' }}
                  </div>
                </div>
              </div>
            </td>
            <td>
              <div class="ml-3">
                <p class="text-gray-900 whitespace-no-wrap">
                  {{ todo.title }}
                </p>
              </div>
            </td>
            <td class="text-left w-1/4 border-b border-gray-200  text-sm">
              <Status :status="todo.completed" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>

import Status from '@/components/ui/Status'
import Loader from '@/components/ui/AppLoader'

export default {
  components: {
    Status, Loader
  },
  computed: {
    todos () {
      return this.$store.getters['todos/todos']
    },
    loading () {
      return this.$store.getters['todos/loading']
    }
  },
  methods: {
    goTo (id) {
      this.$router.push('/todo/' + id)
    }
  }
}
</script>

<style>

table {
  width: 100%;
}
thead, tbody tr {
  display: table;
  width: 100%;
  table-layout: fixed;
}
tbody {
  display: block;
  overflow-y: auto;
  table-layout: fixed;
  height: 600px;
}
</style>
