<template>
  <span class="relative inline-block px-3 py-1 font-semibold  leading-tight">
    <span aria-hidden="true" :class="`absolute inset-0 ${status ? 'bg-green-200' : 'bg-gray-200'} opacity-50 rounded-full`" />
    {{ todoStatus }}
  </span>
</template>

<script>
export default {
  props: ['status'],
  computed: {
    todoStatus () {
      return this.status ? 'Сompleted' : 'Pending'
    }
  }
}
</script>

<style>

</style>
