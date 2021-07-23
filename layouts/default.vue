<template>
  <div class="bg-gray-100 dark:bg-gray-800  h-screen overflow-hidden text-gray-800">
    <Header />
    <main class="container">
      <div class="flex items-start justify-between">
        <div
          class=" hidden lg:block my-4 ml-4
        relative w-80 bg-white dark:bg-gray-800 shadow rounded-lg"
        >
          <Navbar />
        </div>

        <div class="flex flex-col w-full pl-0 md:p-4  md:space-y-4">
          <nuxt />
        </div>
      </div>
    </main>
  </div>
</template>
