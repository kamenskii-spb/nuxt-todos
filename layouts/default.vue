<template>
  <div class="bg-gray-100 text-gray-800">
    <the-header />
    <main class="container">
      <div class="flex items-center justify-center mt-6  lg:hidden">
        <div class="flex items-center bg-gray-300 rounded-full p-3 cursor-pointer" @click="modalHandler">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
            </svg>
          </span>
          <span class="font-semibold">Фильтр</span>
        </div>
      </div>

      <div class="flex items-start justify-between">
        <div
          class=" hidden lg:block my-4 ml-4
        relative w-80 bg-white  shadow rounded-lg"
        >
          <app-filter />
        </div>
        <div class="flex flex-col w-full p-4  ">
          <nuxt />
        </div>
      </div>
      <app-modal :is-modal-open="isModalOpen" @close="modalHandler" />
    </main>
  </div>
</template>

<script>
import AppModal from '@/components/ui/AppModal'
import AppFilter from '@/components/AppFilter'
import TheHeader from '@/components/TheHeader'
export default {
  components: { AppFilter, TheHeader, AppModal },
  data () {
    return {
      isModalOpen: false
    }
  },
  methods: {
    modalHandler () {
      this.isModalOpen = !this.isModalOpen
    }

  }
}
</script>
