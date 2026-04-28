<template>
      <nav class="fixed top-0 left-0 z-0 w-full bg-transparent">
    <div class="relative mx-auto flex h-24 max-w-7xl items-center px-4 sm:px-6 lg:px-8 top-8">

      <!-- mobile button -->
      <div class="flex flex-1 lg:hidden">
        <button
          type="button"
          class="rounded-md p-2 text-white transition hover:bg-white/10"
          @click="toggleMobileMenu"
        >
          <svg
            v-if="!isMobileMenuOpen"
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>

          <svg
            v-else
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

    <!-- desktop nav left -->
<div class="hidden flex-1 lg:flex lg:items-center lg:justify-end lg:pr-32 xl:pr-40">
  <div class="flex items-center gap-3 xl:gap-4">
    <router-link
      to="/"
      class="inline-flex h-10 items-center px-[3rem] py-2 text-sm font-medium text-white transition duration-200 no-underline hover:no-underline hover:bg-white/80 hover:text-black hover:rounded-none"
    >
      HOME
    </router-link>
    <router-link
      to="/asortiman"
      class="inline-flex h-10 items-center px-[3rem] py-2 text-sm font-medium text-white transition duration-200 no-underline hover:no-underline hover:bg-white/80 hover:text-black hover:rounded-none"
    >
      ASORTIMAN
    </router-link>
  </div>
</div>

<!-- centered logo -->
<div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex">
  <router-link
  to="/"
  class="inline-flex h-10 items-center justify-center rounded-full px-4 py-2 transition duration-200"
>
  <img
    src="/images/logo_poljorad.png"
    alt="Logo"
    class="block w-[18rem] object-contain"
  >
</router-link>
</div>

<!-- desktop nav right -->
<div class="hidden flex-1 lg:flex lg:items-center lg:justify-start lg:pl-32 xl:pl-40">
  <div class="flex items-center gap-3 xl:gap-4">
    <router-link
      to="/"
      class="inline-flex h-10 items-center px-[3rem] py-2 text-sm font-medium text-white transition duration-200 no-underline hover:no-underline hover:bg-white/80 hover:text-black hover:rounded-none"
    >
      ABOUT US
    </router-link>
    <router-link
      to="/"
      class="inline-flex h-10 items-center px-[3rem] py-2 text-sm font-medium text-white transition duration-200 no-underline hover:no-underline hover:bg-white/80 hover:text-black hover:rounded-none"
    >
      CONTACT
    </router-link>
  </div>
</div>

      <!-- empty right side mobile -->
      <div class="flex flex-1 lg:hidden"></div>
    </div>

    <!-- mobile menu -->
    <div
      v-if="isMobileMenuOpen"
      class="mx-4 rounded-2xl bg-white/95 p-4 shadow-lg backdrop-blur-md lg:hidden"
    >
      <div class="flex flex-col gap-2">
        <router-link
          to="/"
          class="rounded-xl px-4 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100 hover:text-black"
          @click="closeMobileMenu"
        >
          O nama
        </router-link>
        <router-link
          to="/"
          class="rounded-xl px-4 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100 hover:text-black"
          @click="closeMobileMenu"
        >
          Usluge
        </router-link>
        <router-link
          to="/k"
          class="rounded-xl px-4 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100 hover:text-black"
          @click="closeMobileMenu"
        >
          Karijera
        </router-link>
        <router-link
          to="/"
          class="rounded-xl px-4 py-3 text-sm font-medium text-gray-800 transition hover:bg-gray-100 hover:text-black"
          @click="closeMobileMenu"
        >
          Kontakt
        </router-link>
      </div>
    </div>
  </nav>
  <div class="min-h-screen bg-[#f5f5f5] pt-32 px-6">
    
    <h1 class="text-4xl font-bold text-center mb-12">
      Naš asortiman
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

      <div
        v-for="product in products"
        :key="product.id"
        class="bg-white rounded-xl shadow p-4"
      >
        <img :src="`/storage/${product.image}`" />
        <h2 class="text-xl font-bold mt-4">
          {{ product.name }}
        </h2>

        <p class="text-gray-600">
          {{ product.description }}
        </p>
      </div>

    </div>

  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import axios from "axios"
import { RouterLink } from 'vue-router'
const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
const products = ref([])

onMounted(async () => {
  const res = await axios.get("http://127.0.0.1:8000/api/products")
  products.value = res.data
})
</script>