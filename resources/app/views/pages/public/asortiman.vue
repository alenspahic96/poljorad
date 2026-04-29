<template>
  <section class="bg-[#F7F1E8] min-h-screen">
    <div class="relative bg-[#0F4D2E] text-white overflow-hidden">
      <div class="absolute inset-0 opacity-15 bg-[url('/images/poljorad_hero.png')] bg-cover bg-center"></div>

      <nav class="absolute top-0 left-0 w-full z-30">
    <div class="relative max-w-7xl mx-auto h-28 px-6 flex items-center justify-between">

      <div class="hidden lg:flex flex-1 justify-end pr-40 gap-12 text-white font-medium">
        <RouterLink
            to="/"
            class="hover:text-[#8DC63F] transition"
          >
            {{ $t('global.pages.home') }}
          </RouterLink>
          <RouterLink
            to="/asortiman?category"
            class="inline-block w-fit bg-white text-[#0F4D2E] px-7 py-3 font-bold"
          >
            {{ $t('global.pages.asortiman') }}
          </RouterLink>
      </div>

      <div class="absolute left-1/2 -translate-x-1/2 top-8" data-aos="zoom-in" data-aos-delay="300">
        <img src="/images/logo_poljorad.png" alt="Poljorad logo" class="w-44 sm:w-56 lg:w-64 object-contain">
      </div>

      <div class="hidden lg:flex flex-1 justify-start pl-40 gap-12 text-white font-medium">
        <a href="#about" data-aos="fade-down" data-aos-delay="400" class="hover:text-[#8DC63F] transition">{{ $t('global.pages.about') }}</a>
        <a href="#contact" data-aos="fade-down" data-aos-delay="500" class="hover:text-[#8DC63F] transition">{{ $t('global.pages.contact') }}</a>

        <!-- Desktop jezici -->
        <div class="relative lang-dropdown" data-aos="fade-down" data-aos-delay="600">
          <button
            type="button"
            class="flex items-center gap-2 text-white hover:text-[#8DC63F] transition"
            @click.stop="isLangOpen = !isLangOpen"
          >
            <span :class="flagClass"></span>
            {{ currentLocale.toUpperCase() }}
            <span><svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
  <path d="M19 9l-7 7-7-7"/>
</svg></span>
          </button>

          <div
            v-if="isLangOpen"
            class="absolute right-0 mt-3 w-28 overflow-hidden rounded-xl bg-white shadow-lg"
          >
            <button
              type="button"
              class="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-gray-800 hover:bg-gray-100"
              @click.stop="setLocale('en'); isLangOpen = false"
            >
              <span class="fi fi-gb"></span>
              EN
            </button>

            <button
              type="button"
              class="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-gray-800 hover:bg-gray-100"
              @click.stop="setLocale('bs'); isLangOpen = false"
            >
              <span class="fi fi-ba"></span>
              BS
            </button>
          </div>
        </div>
      </div>

      <!-- Mobile hamburger -->
      <button
        type="button"
        class="lg:hidden relative z-50 ml-auto text-white text-3xl"
        @click.stop="isMenuOpen = !isMenuOpen"
      >
        {{ isMenuOpen ? '×' : '☰' }}
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div
      v-if="isMenuOpen"
      class="lg:hidden absolute top-28 left-0 w-full z-40 px-6"
      data-aos="fade-down"
    >
      <div class="rounded-2xl bg-white p-4 shadow-2xl">
        <a href="#home" @click="isMenuOpen = false" class="block rounded-xl px-4 py-3 text-gray-800 hover:bg-gray-100">
          {{ $t('global.pages.home') }}
        </a>

        <a href="#products" @click="isMenuOpen = false" class="block rounded-xl px-4 py-3 text-gray-800 hover:bg-gray-100">
          {{ $t('global.pages.asortiman') }}
        </a>

        <a href="#about" @click="isMenuOpen = false" class="block rounded-xl px-4 py-3 text-gray-800 hover:bg-gray-100">
         {{ $t('global.pages.about') }}
        </a>

        <a href="#contact" @click="isMenuOpen = false" class="block rounded-xl px-4 py-3 text-gray-800 hover:bg-gray-100">
          {{ $t('global.pages.contact') }}
        </a>

        <!-- Mobile jezici -->
        <div class="mt-4 border-t pt-4 lang-dropdown">
          <button
            type="button"
            class="flex w-full items-center justify-between rounded-xl px-4 py-3 text-sm font-medium text-gray-800 hover:bg-gray-100"
            @click.stop="isLangOpen = !isLangOpen"
          >
            <span class="flex items-center gap-2">
              <span :class="flagClass"></span>
              {{ currentLocale.toUpperCase() }}
            </span>

            <span><svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
              <path d="M19 9l-7 7-7-7"/>
            </svg></span>
          </button>

          <div
            v-if="isLangOpen"
            class="mt-2 flex w-full flex-col overflow-hidden rounded-xl bg-gray-100"
          >
            <button
              type="button"
              class="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-gray-800 hover:bg-gray-200"
              @click.stop="setLocale('en'); isLangOpen = false; isMenuOpen = false"
            >
              <span class="fi fi-gb"></span>
              EN
            </button>

            <button
              type="button"
              class="flex w-full items-center gap-2 px-4 py-3 text-left text-sm text-gray-800 hover:bg-gray-200"
              @click.stop="setLocale('bs'); isLangOpen = false; isMenuOpen = false"
            >
              <span class="fi fi-ba"></span>
              BS
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>

      <div class="relative max-w-7xl mx-auto px-6 pt-20 pb-28 md:pt-48 md:pb-8">

        <h1 class="serif text-5xl md:text-7xl font-bold mb-6">
          {{ pageTitle }}
        </h1>

        <p class="max-w-2xl text-white/80 text-lg">
          Pregled domaćih proizvoda nastalih spojem tradicije, prirode i savremene proizvodnje.
        </p>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 py-14">
      <div class="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div class="flex gap-3 flex-wrap">
          <RouterLink
            to="/asortiman"
            class="px-5 py-3 rounded-none border font-bold transition"
            :class="!selectedCategory ? activeClass : inactiveClass"
          >
            Svi proizvodi
          </RouterLink>

          <RouterLink
            to="/asortiman?category=mlijecni"
            class="px-5 py-3 rounded-none border font-bold transition"
            :class="selectedCategory === 'mlijecni' ? activeClass : inactiveClass"
          >
            Mliječni proizvodi
          </RouterLink>

          <RouterLink
            to="/asortiman?category=kupus"
            class="px-5 py-3 rounded-none border font-bold transition"
            :class="selectedCategory === 'kupus' ? activeClass : inactiveClass"
          >
            Proizvodi od kupusa
          </RouterLink>
        </div>

        <p class="text-sm text-gray-500">
          {{ filteredProducts.length }} proizvoda
        </p>
      </div>

      <div
        v-if="filteredProducts.length"
        class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-7"
      >
        <article
          v-for="product in filteredProducts"
          :key="product.id"
          class="bg-white shadow-sm hover:shadow-xl transition overflow-hidden group"
        >
          <div class="relative overflow-hidden bg-gray-100">
            <img
              v-if="product.image_url"
              :src="product.image_url"
              class="w-full h-72 object-cover group-hover:scale-105 transition duration-700"
              :alt="product.name"
              loading="lazy"
            >

            <div
              v-else
              class="w-full h-72 flex items-center justify-center text-gray-400"
            >
              Nema slike
            </div>

            <span
              v-if="product.category"
              class="absolute top-4 left-4 bg-white/90 text-[#0F4D2E] px-4 py-2 rounded-full text-xs font-bold"
            >
              {{ product.category.name }}
            </span>
          </div>

          <div class="p-7">
            <h4 class="serif text-3xl text-[#0F4D2E] mb-3">
              {{ product.name }}
            </h4>

            <p class="text-gray-600 mb-6 line-clamp-3">
              {{ product.description }}
            </p>

            <RouterLink
              :to="`/proizvod/${product.id}`"
              class="text-[#0F4D2E] font-bold hover:text-[#8DC63F] transition"
            >
              Vidi proizvod →
            </RouterLink>
          </div>
        </article>
      </div>

      <div v-else class="bg-white p-10 text-center shadow-sm">
        <h3 class="serif text-3xl text-[#0F4D2E] mb-3">
          Trenutno nema proizvoda.
        </h3>
        <p class="text-gray-600">
          Proizvodi za ovu kategoriju bit će uskoro dostupni.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import axios from "axios"
import { RouterLink, useRoute } from "vue-router"

const products = ref([])
const route = useRoute()

const selectedCategory = computed(() => route.query.category || "")

const activeClass = "bg-[#0F4D2E] text-white border-[#0F4D2E]"
const inactiveClass = "bg-white text-[#0F4D2E] border-[#0F4D2E]/20 hover:bg-[#0F4D2E] hover:text-white"

const pageTitle = computed(() => {
  if (selectedCategory.value === "mlijecni") return "Mliječni proizvodi"
  if (selectedCategory.value === "kupus") return "Proizvodi od kupusa"
  return "Svi proizvodi"
})

const filteredProducts = computed(() => {
  if (!selectedCategory.value) return products.value

  return products.value.filter(
    p => p.category?.slug === selectedCategory.value
  )
})

onMounted(async () => {
  const res = await axios.get("/api/products")
  products.value = res.data
})
import { useLocaleStore } from "@/stores/locale"
import { useI18n } from 'vue-i18n'
import { onBeforeUnmount } from 'vue'
import "/node_modules/flag-icons/css/flag-icons.min.css";
import AOS from 'aos'
import 'aos/dist/aos.css'
const { t } = useI18n()

const isMenuOpen = ref(false)

const localeStore = useLocaleStore()

// reactive locale
const currentLocale = computed(() => localeStore.locale)


const isLangOpen = ref(false)

const setLocale = (lang) => {
  localeStore.setLocale(lang)
  isLangOpen.value = false
}

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}
const closeDropdown = (e) => {
  if (!e.target.closest('.relative')) {
    isLangOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out-cubic'
  })

  setTimeout(() => {
    AOS.refresh()
  }, 300)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', closeDropdown)
})
const flagClass = computed(() => {
  return currentLocale.value === 'en'
    ? 'fi fi-gb'
    : 'fi fi-ba'
})
const isScrolled = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
})
import ProductService from "@/services/ProductService"


const loadProducts = async () => {
  const res = await ProductService.getAll()
  products.value = res.data
}

const milkProducts = computed(() =>
  products.value.filter((p) => p.category?.slug === "mlijecni")
)

const kupusProducts = computed(() =>
  products.value.filter((p) => p.category?.slug === "kupus")
)
</script>