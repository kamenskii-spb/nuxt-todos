<template>
  <ul class="flex flex-col flex-nowrap justify-center w-50 px-2 my-5 ">
    <li v-for="(user, idx) in users" :key="idx" class="my-1  whitespace-nowrap hover:bg-gray-300 rounded-lg ">
      <div class="flex p-1 flex-shrink-0 items-center  cursor-pointer ">
        <img class="h-10 w-10 rounded-full" :src="user.image" :alt="user.name">
        <div class="px-2">
          {{ user.name }}
        </div>
      </div>
    </li>
  </ul>
</template>

<script>

const users = [{
  name: 'Сара',
  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  id: '1'
},
{
  name: 'Василий',
  image: 'https://www.tailwind-kit.com/images/person/1.jpg',
  id: '2'
},
{
  name: 'Ельвира',
  image: 'https://www.tailwind-kit.com/images/person/7.jpg',
  id: '3'
}
]

export default {
  data () {
    return {
      users
    }
  }
}
</script>
