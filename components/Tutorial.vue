/* eslint-disable nuxt/no-globals-in-created */
<!-- Please remove this file from your project -->
<template>
  <main class="bg-gray-100 dark:bg-gray-800 h-screen overflow-hidden relative">
    <div class="flex items-start justify-between">
      <div class="h-screen hidden lg:block shadow-lg relative w-80">
        <div class="bg-white h-full dark:bg-gray-700">
          <div class="flex items-center justify-start pt-6 ml-8">
            <p class="font-bold dark:text-white text-xl">
              Plannifer
            </p>
          </div>
          <nav class="mt-6">
            <div>
              <a class="w-full text-gray-800 dark:text-white flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start border-l-4 border-purple-500" href="#">
                <span class="text-left">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1472 992v480q0 26-19 45t-45 19h-384v-384h-256v384h-384q-26 0-45-19t-19-45v-480q0-1 .5-3t.5-3l575-474 575 474q1 2 1 6zm223-69l-62 74q-8 9-21 11h-3q-13 0-21-7l-692-577-692 577q-12 8-24 7-13-2-21-11l-62-74q-8-10-7-23.5t11-21.5l719-599q32-26 76-26t76 26l244 204v-195q0-14 9-23t23-9h192q14 0 23 9t9 23v408l219 182q10 8 11 21.5t-7 23.5z" />
                  </svg>
                </span>
                <span class="mx-2 text-sm font-normal">
                  Home
                </span>
              </a>
              <a class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent" href="#">
                <span class="text-left">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1070 1178l306-564h-654l-306 564h654zm722-282q0 182-71 348t-191 286-286 191-348 71-348-71-286-191-191-286-71-348 71-348 191-286 286-191 348-71 348 71 286 191 191 286 71 348z" />
                  </svg>
                </span>
                <span class="mx-2 text-sm font-normal">
                  Refered Projects
                  <span class="p-1 ml-4 rounded-lg w-4 h-2 bg-gray-200 text-gray-400 text-xs">
                    0
                  </span>
                </span>
              </a>
              <a class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent" href="#">
                <span class="text-left">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1728 608v704q0 92-66 158t-158 66h-1216q-92 0-158-66t-66-158v-960q0-92 66-158t158-66h320q92 0 158 66t66 158v32h672q92 0 158 66t66 158z" />
                  </svg>
                </span>
                <span class="mx-4 text-sm font-normal">
                  Resources
                </span>
              </a>
              <a class="w-full text-gray-400 flex items-center pl-6 p-2 my-2 transition-colors duration-200 justify-start hover:text-gray-800 border-l-4 border-transparent" href="#">
                <span class="text-left">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 2048 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M580 461q0-41-25-66t-66-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 66-24.5t25-65.5zm743 507q0-28-25.5-50t-65.5-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q40 0 65.5-22t25.5-51zm-236-507q0-41-24.5-66t-65.5-25q-43 0-76 25.5t-33 65.5q0 39 33 64.5t76 25.5q41 0 65.5-24.5t24.5-65.5zm635 507q0-28-26-50t-65-22q-27 0-49.5 22.5t-22.5 49.5q0 28 22.5 50.5t49.5 22.5q39 0 65-22t26-51zm-266-397q-31-4-70-4-169 0-311 77t-223.5 208.5-81.5 287.5q0 78 23 152-35 3-68 3-26 0-50-1.5t-55-6.5-44.5-7-54.5-10.5-50-10.5l-253 127 72-218q-290-203-290-490 0-169 97.5-311t264-223.5 363.5-81.5q176 0 332.5 66t262 182.5 136.5 260.5zm592 561q0 117-68.5 223.5t-185.5 193.5l55 181-199-109q-150 37-218 37-169 0-311-70.5t-223.5-191.5-81.5-264 81.5-264 223.5-191.5 311-70.5q161 0 303 70.5t227.5 192 85.5 263.5z" />
                  </svg>
                </span>
                <span class="mx-4 text-sm font-normal">
                  Store feedback
                </span>
              </a>
            </div>
          </nav>
        </div>
      </div>
      <div class="flex flex-col w-full md:space-y-4">
        <div class="overflow-auto h-screen pb-24 md:px-6">
          <div class="block lg:hidden ml-6">
            <button class="flex p-2 items-center rounded-full bg-white shadow text-gray-500 text-md" @click="isOpen = !isOpen">
              <svg
                width="20"
                height="20"
                class="text-gray-400"
                fill="currentColor"
                viewBox="0 0 1792 1792"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z" />
              </svg>
            </button>
          </div>
          <h1 class="text-4xl font-semibold text-gray-800 dark:text-white">
            Good afternoom, Charlie
          </h1>

          <div class=" mx-auto ">
            <div class="py-8">
              <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div class="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table class="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          User
                        </th>
                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Role
                        </th>
                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          Created at
                        </th>
                        <th scope="col" class="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal">
                          status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a href="#" class="block relative">
                                <img alt="profil" src="/images/person/8.jpg" class="mx-auto object-cover rounded-full h-10 w-10 ">
                              </a>
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Jean marc
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Admin
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            12/09/2020
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                            <span class="relative">
                              active
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a href="#" class="block relative">
                                <img alt="profil" src="/images/person/9.jpg" class="mx-auto object-cover rounded-full h-10 w-10 ">
                              </a>
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Marcus coco
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Designer
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            01/10/2012
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                            <span class="relative">
                              active
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a href="#" class="block relative">
                                <img alt="profil" src="/images/person/10.jpg" class="mx-auto object-cover rounded-full h-10 w-10 ">
                              </a>
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Ecric marc
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            Developer
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            02/10/2018
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                            <span class="relative">
                              active
                            </span>
                          </span>
                        </td>
                      </tr>
                      <tr>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div class="flex items-center">
                            <div class="flex-shrink-0">
                              <a href="#" class="block relative">
                                <img alt="profil" src="/images/person/6.jpg" class="mx-auto object-cover rounded-full h-10 w-10 ">
                              </a>
                            </div>
                            <div class="ml-3">
                              <p class="text-gray-900 whitespace-no-wrap">
                                Julien Huger
                              </p>
                            </div>
                          </div>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            User
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <p class="text-gray-900 whitespace-no-wrap">
                            23/09/2010
                          </p>
                        </td>
                        <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <span class="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
                            <span aria-hidden="true" class="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
                            <span class="relative">
                              active
                            </span>
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative">
      <button v-if="isOpen" tabindex="-1" class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default" @click="isOpen = false" />
      <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl">
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account settings</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
        <a href="#" class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sign out</a>
      </div>
    </div>
  </main>
</template>

<script>
// javascript
export default {
  data () {
    return {
      isOpen: false
    }
  }
}
</script>
