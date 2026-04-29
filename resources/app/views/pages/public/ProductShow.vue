<template>
  <section class="min-h-screen bg-[#F7F1E8]">
      <div class=" bg-[#0F4D2E] text-white overflow-hidden">

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
            class="hover:text-[#8DC63F] transition"
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
    <!-- Mobile dropdown -->
<div
  v-if="isMenuOpen"
  class="lg:hidden absolute top-28 left-0 w-full z-40 px-6"
>
  <div class="rounded-2xl bg-white p-4 shadow-2xl">

    <RouterLink
      to="/"
      @click="isMenuOpen = false"
      class="block rounded-xl px-4 py-3 text-gray-800 hover:bg-gray-100"
    >
      {{ $t('global.pages.home') }}
    </RouterLink>

    <RouterLink
      to="/asortiman"
      @click="isMenuOpen = false"
      class="block rounded-xl px-4 py-3 text-gray-800 hover:bg-gray-100"
    >
      {{ $t('global.pages.asortiman') }}
    </RouterLink>

    <RouterLink
      to="/#about"
      @click="isMenuOpen = false"
      class="block rounded-xl px-4 py-3 text-gray-800 hover:bg-gray-100"
    >
      {{ $t('global.pages.about') }}
    </RouterLink>

    <RouterLink
      to="/#contact"
      @click="isMenuOpen = false"
      class="block rounded-xl px-4 py-3 text-gray-800 hover:bg-gray-100"
    >
      {{ $t('global.pages.contact') }}
    </RouterLink>

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

        <span>
          <svg class="w-4 h-4 opacity-60" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M19 9l-7 7-7-7"/>
          </svg>
        </span>
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

      <div class="relative max-w-7xl mx-auto px-6 pt-33 pb-6 md:pb-28 md:pt-48 md:pb-8">

        <h1  v-if="product" class="serif text-2xl md:text-6xl font-bold mb-2">
           {{ product.name }}
        </h1>

      </div>
    </div>
    <div v-if="product" class="max-w-7xl mx-auto px-6 py-16">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div class="bg-white p-6 shadow-sm">
          <img
            v-if="product.image_url"
            :src="product.image_url"
            :alt="product.name"
            class="w-full max-h-[620px] object-contain"
          >

          <div v-else class="h-96 flex items-center justify-center text-gray-400">
            Nema slike
          </div>
        </div>

        <div>
          <p v-if="product.category" class="uppercase tracking-[0.3em] text-[#8DC63F] text-sm font-bold mb-4">
            {{ product.category.name }}
          </p>

          <h1 class="serif text-5xl md:text-7xl text-[#0F4D2E] font-bold mb-6">
            {{ product.name }}
          </h1>

          <p class="text-gray-700 text-lg leading-8 mb-10">
            {{ product.description }}
          </p>

          <div class="bg-white shadow-sm p-8 mb-8">
            <h2 class="serif text-3xl text-[#0F4D2E] font-bold mb-6">
              Tehničke specifikacije
            </h2>

            <div class="divide-y">
              <div class="py-4 flex justify-between gap-6">
                <span class="font-semibold text-gray-600">Kategorija</span>
                <span class="text-[#0F4D2E] font-bold">
                  {{ product.category?.name || 'Nije navedeno' }}
                </span>
              </div>

              <div class="py-4 flex justify-between gap-6">
                <span class="font-semibold text-gray-600">Naziv proizvoda</span>
                <span class="text-[#0F4D2E] font-bold">{{ product.name }}</span>
              </div>

              <div class="py-4 flex justify-between gap-6">
                <span class="font-semibold text-gray-600">Porijeklo</span>
                <span class="text-[#0F4D2E] font-bold">Poljorad d.o.o. Turbe-Travnik</span>
              </div>

              <div class="py-4 flex justify-between gap-6">
                <span class="font-semibold text-gray-600">Tip proizvoda</span>
                <span class="text-[#0F4D2E] font-bold">
                  {{ product.category?.slug === 'mlijecni' ? 'Mliječni proizvod' : 'Proizvod od kupusa' }}
                </span>
              </div>
            </div>
          </div>

          <RouterLink
            to="/asortiman"
            class="inline-block bg-[#0F4D2E] text-white px-8 py-4 font-bold hover:bg-[#8DC63F] hover:text-[#0F4D2E] transition"
          >
            Pogledaj ostale proizvode
          </RouterLink>
        </div>
      </div>
    </div>

    <div v-else class="max-w-7xl mx-auto px-6 py-20 text-center">
      Učitavanje proizvoda...
    </div>
  </section>
   <!-- ABOUT PAGE / SECTION -->
  <section id="about" class="py-28 bg-white">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div class="relative">
        <div class="absolute -left-6 -top-6 w-32 h-32 bg-[#8DC63F]/20"></div>
        <img src="/images/poljorad_hero.jpg" class="relative w-full h-[560px] object-cover shadow-xl" alt="Farma">
      </div>

      <div>
        <p class="uppercase tracking-[.3em] text-sm text-[#8DC63F] font-bold mb-4">O nama</p>
        <h2 class="serif text-5xl lg:text-6xl text-[#0F4D2E] leading-tight font-bold mb-8">
          Tradicija, priroda i odgovorna proizvodnja.
        </h2>
        <p class="text-lg text-gray-600 mb-5">
          Poljorad je kompanija iz Turbeta koja njeguje tradiciju proizvodnje mliječnih proizvoda i povjerenje domaćih proizvođača mlijeka.
        </p>
        <p class="text-lg text-gray-600 mb-8">
          Naši proizvodi nastaju iz pažljivo odabranog mlijeka, uz spoj tradicionalnih receptura i savremene kontrole kvaliteta.
        </p>
        <a href="#contact" class="inline-block bg-[#0F4D2E] text-white px-8 py-4 font-semibold hover:bg-[#8DC63F] transition">Kontaktirajte nas</a>
      </div>
    </div>
  </section>

   <!-- CONTACT PAGE / SECTION -->
  <section id="contact" class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-14">
      <div>
        <p class="uppercase tracking-[.3em] text-sm text-[#8DC63F] font-bold mb-4">Kontakt</p>
        <h2 class="serif text-5xl lg:text-6xl text-[#0F4D2E] font-bold mb-8">Kontaktirajte nas</h2>
        <p class="text-lg text-gray-600 mb-8">
          Za informacije o proizvodima, saradnji i otkupu mlijeka, pošaljite upit ili nas kontaktirajte direktno.
        </p>

        <div class="space-y-5 text-gray-700">
          <div>
            <p class="font-bold text-[#0F4D2E]">Lokacija</p>
            <p>Turbe, Travnik, Bosna i Hercegovina</p>
          </div>
          <div>
            <p class="font-bold text-[#0F4D2E]">Telefon</p>
            <p>+387 XX XXX XXX</p>
          </div>
          <div>
            <p class="font-bold text-[#0F4D2E]">E-mail</p>
            <p>info@poljorad.ba</p>
          </div>
        </div>
      </div>

    </div>
  </section>
  

<!-- FOOTER -->
  <footer class="bg-[#0F4D2E] text-white py-10">
    <div class="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <img src="/images/logo_poljorad.png" class="w-40" alt="Poljorad">
      <p class="text-white/70">© 2026 Poljorad. Sva prava zadržana.</p>
      <div class="flex gap-6 text-white/80">
        <a href="#home">Početna</a>
        <a href="#products">Proizvodi</a>
        <a href="#about">O nama</a>
        <a href="#contact">Kontakt</a>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRoute, RouterLink } from "vue-router"

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const res = await axios.get(`/api/products/${route.params.id}`)
  product.value = res.data
})
import { ref, onMounted, computed } from "vue"
import axios from "axios"

const products = ref([])

const selectedCategory = computed(() => route.query.category || "")



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