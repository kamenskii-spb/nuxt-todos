<template>
  <ul class="flex flex-col flex-nowrap justify-center w-50 px-2 my-5 ">
    <li :class="['my-1  whitespace-nowrap hover:text-white hover:bg-blue-600 rounded-lg', {'bg-blue-600 text-white checked': !chekedUserId.length && !noExecutor}]">
      <div class="flex p-1 flex-shrink-0 items-center  cursor-pointer user" @click.stop="clearfilter">
        <div class="py-2 pl-10 px-2 w-40">
          Все задания
        </div>
        <div class="check pl-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </li>
    <li v-for="(user, idx) in users" :key="idx" :class="['my-1  whitespace-nowrap hover:text-white hover:bg-blue-600 rounded-lg', {'bg-blue-600 text-white checked': chekedUserId.includes(user.userId)}]">
      <div class="flex p-1 flex-shrink-0 items-center  cursor-pointer user" @click.stop="checkedUser(user.userId)">
        <img class="h-10 w-10 rounded-full" :src="user.image" :alt="user.name">
        <div class="px-2 w-40">
          {{ user.name }}
        </div>
        <div class="check">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </li>
    <li :class="['my-1  whitespace-nowrap hover:text-white hover:bg-blue-600 rounded-lg', {'bg-blue-600 text-white checked': noExecutor}]">
      <div class="flex p-1 flex-shrink-0 items-center  cursor-pointer user" @click.stop="checkNoExecutor">
        <div class="py-2 pl-10 px-2 w-40">
          Без исполнителя
        </div>
        <div class="check pl-10">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

export default {
  data () {
    return {
      noExecutor: false
    }
  },
  computed: {
    users () {
      return this.$store.getters['users/users']
    },
    chekedUserId () {
      return this.$store.getters['users/chekedUserId']
    }
  },
  methods: {
    async checkedUser (id) {
      this.noExecutor = false
      this.$store.commit('todos/setLoading', true)
      this.$store.commit('users/checkedUserId', id)
      await this.$store.dispatch('todos/load')
      this.$store.commit('todos/setLoading', false)
    },
    async clearfilter () {
      this.noExecutor = false
      this.$store.commit('todos/setLoading', true)
      this.$store.commit('users/clearCheckedUserId')
      await this.$store.dispatch('todos/load')
      this.$store.commit('todos/setLoading', false)
    },
    async checkNoExecutor () {
      this.noExecutor = !this.noExecutor
      this.$store.commit('todos/setLoading', true)
      this.$store.commit('users/clearCheckedUserId')
      await this.$store.dispatch('todos/load', this.noExecutor)
      this.$store.commit('todos/setLoading', false)
    }
  }
}
</script>

<style scoped>
.check {
    display: none;
}
.checked .check {
    display: block;
}
</style>
