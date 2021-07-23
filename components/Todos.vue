<template>
  <div class="py-0">
    <div class=" py-0 ">
      <div class="inline-block min-w-full shadow rounded-lg    ">
        <table class="min-w-full leading-normal">
          <thead>
            <tr >
              <th  scope="col" class=" px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                Title
              </th>
              <th scope="col" class="w-1/4  py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                status
              </th>
            </tr>
          </thead>

          <tbody>
            <tr v-for="(todo, idx) in todos" :key="idx">
              <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm ">
                <div class="flex items-center items-end">
                  <div class="ml-3">
                    <p class="text-gray-900 whitespace-no-wrap">
                      {{ todo.title }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="text-left w-1/4 border-b border-gray-200 bg-white text-sm">
                <Status :status="todo.completed" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

import Status from '@/components/ui/Status'

export default {
  components: {
    Status
  },
  data () {
    return {}
  },
  computed: {
    todos () {
      return this.$store.getters['todos/todos']
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
  max-height: 600px;
}
</style>
