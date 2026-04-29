<template>
  <!-- PAGE 1: HOMEPAGE -->
  <section id="home" class="relative min-h-screen hero-bg overflow-hidden">
  <nav class="absolute top-0 left-0 w-full z-30">
    <div class="relative max-w-7xl mx-auto h-28 px-6 flex items-center justify-between">

      <div class="hidden lg:flex flex-1 justify-end pr-40 gap-12 text-white font-medium">
        <a href="#home" data-aos="fade-down" data-aos-delay="100" class="hover:text-[#8DC63F] transition"> {{ $t('global.pages.home') }}</a>
        <a href="#products" data-aos="fade-down" data-aos-delay="200" class="hover:text-[#8DC63F] transition">{{ $t('global.pages.asortiman') }}</a>
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

  <div class="relative z-10 max-w-7xl mx-auto min-h-screen px-6 flex items-center pt-36 pb-16">
    <div class="max-w-2xl text-white">
      <h1
        class="serif text-4xl sm:text-5xl lg:text-7xl leading-[1.02] font-bold mb-6 lg:mb-8"
        data-aos="fade-up"
        data-aos-delay="350"
      >
        {{ $t('global.pages.slogan') }}
      </h1>

      <p
        class="text-lg sm:text-xl text-white/90 max-w-xl mb-8 lg:mb-10"
        data-aos="fade-up"
        data-aos-delay="500"
      >
        {{ $t('global.pages.motivacija') }}
      </p>

      <div class="flex flex-col sm:flex-row gap-4" data-aos="zoom-in" data-aos-delay="650">
        <a href="#products" class="bg-white text-[#0F4D2E] px-8 py-4 font-bold text-center hover:bg-[#8DC63F] hover:text-white transition">
          Pogledaj asortiman
        </a>

        <a href="#about" class="border border-white/70 text-white px-8 py-4 font-semibold text-center hover:bg-white hover:text-[#0F4D2E] transition">
          Saznaj više
        </a>
      </div>
    </div>
  </div>
</section>

     <!-- TRUST NUMBERS -->
  <section class="bg-white py-10">
    <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
      <div class="p-8 border border-[#E4EAD8]">
        <h3 class="serif text-5xl text-[#0F4D2E] font-bold">30+</h3>
        <p class="mt-2 text-gray-600">godina tradicije</p>
      </div>
      <div class="p-8 border border-[#E4EAD8]">
        <h3 class="serif text-5xl text-[#0F4D2E] font-bold">1200</h3>
        <p class="mt-2 text-gray-600">domaćih kooperanata</p>
      </div>
      <div class="p-8 border border-[#E4EAD8]">
        <h3 class="serif text-5xl text-[#0F4D2E] font-bold">Vlašić</h3>
        <p class="mt-2 text-gray-600">priroda, mlijeko i kvalitet</p>
      </div>
    </div>
  </section>
   <<section class="soft-vlasic py-28">
      <div class="max-w-7xl mx-auto px-6 text-white flex justify-center">
        <div class="max-w-2xl text-center">
          <h2 class="serif text-5xl lg:text-6xl font-bold mb-6">
            Priroda se osjeti u svakom zalogaju.
          </h2>

          <p class="text-xl text-white/85 mb-8">
            Inspirisani Vlašićem, stvaramo proizvode koji spajaju domaću recepturu i savremeni kvalitet.
          </p>

          <a
            href="#products"
            class="inline-block bg-white text-[#0F4D2E] px-8 py-4 font-bold"
          >
            Istraži proizvode
          </a>
        </div>
      </div>
    </section>
     <!-- PRODUCTS PAGE / SECTION -->
  <section id="products" class="py-24 bg-[#F8FAF4]">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-14 gap-6">
        <div>
          <p class="uppercase tracking-[.3em] text-sm text-[#8DC63F] font-bold mb-3">Asortiman</p>
          <h2 class="serif text-5xl lg:text-6xl text-[#0F4D2E] font-bold">Naši proizvodi</h2>
        </div>
        <p class="max-w-xl text-gray-600 text-lg">
          Poljorad asortiman podijeljen je u dvije glavne kategorije: proizvodi od mlijeka i proizvodi od kupusa.
        </p>
      </div>

      <!-- CATEGORY CARDS -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-14">
        <article class="relative min-h-[420px] overflow-hidden group bg-[#0F4D2E]">
          <img src="/images/vlasickisir.jpg" class="absolute inset-0 w-full h-full object-contain opacity-70 group-hover:scale-105 transition duration-700" alt="Proizvodi od mlijeka">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F4D2E] via-[#0F4D2E]/45 to-transparent"></div>
          <div class="relative z-10 h-full p-10 flex flex-col justify-end text-white">
            <h3 class="serif text-5xl font-bold mb-4">Proizvodi od mlijeka</h3>
            <p class="text-white/80 text-lg max-w-md mb-6">Sir, kajmak i drugi mliječni proizvodi nastali iz domaćeg mlijeka i tradicije Vlašića.</p>
            <a href="#milk-products" class="inline-block w-fit bg-[#8DC63F] text-[#0F4D2E] px-7 py-3 font-bold">Pogledaj proizvode</a>
          </div>
        </article>

        <article class="relative min-h-[420px] overflow-hidden group bg-[#0F4D2E]">
          <img src="/images/kupus-proizvodi.jpg" class="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition duration-700" alt="Proizvodi od kupusa">
          <div class="absolute inset-0 bg-gradient-to-t from-[#0F4D2E] via-[#0F4D2E]/45 to-transparent"></div>
          <div class="relative z-10 h-full p-10 flex flex-col justify-end text-white">
            <h3 class="serif text-5xl font-bold mb-4">Proizvodi od kupusa</h3>
            <p class="text-white/80 text-lg max-w-md mb-6">Tradicionalni proizvodi od kupusa pripremljeni za domaću kuhinju i porodičnu trpezu.</p>
            <a href="#cabbage-products" class="inline-block w-fit bg-white text-[#0F4D2E] px-7 py-3 font-bold">Pogledaj proizvode</a>
          </div>
        </article>
      </div>

     <div id="milk-products" class="mb-16">
  <div class="flex items-center gap-4 mb-8">
    <div class="h-px bg-[#8DC63F] flex-1"></div>
    <h3 class="serif text-4xl text-[#0F4D2E] font-bold">
      Proizvodi od mlijeka
    </h3>
    <div class="h-px bg-[#8DC63F] flex-1"></div>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-7">
    <article
      v-for="product in milkProducts"
      :key="product.id"
      class="bg-white shadow-sm overflow-hidden group"
    >
      <img
        v-if="product.image_url"
        :src="product.image_url"
        class="w-full h-72 object-cover group-hover:scale-105 transition duration-500"
        :alt="product.name"
      >

      <div
        v-else
        class="w-full h-72 bg-gray-100 flex items-center justify-center text-gray-400"
      >
        Nema slike
      </div>

      <div class="p-7">
        <h4 class="serif text-3xl text-[#0F4D2E] mb-3">
          {{ product.name }}
        </h4>

        <p class="text-gray-600 mb-5">
          {{ product.description }}
        </p>

        <a href="#" class="text-[#0F4D2E] font-bold">
          Vidi proizvod →
        </a>
      </div>
    </article>
  </div>
</div>

      <!-- CABBAGE PRODUCTS -->
      <div id="cabbage-products">
        <div class="flex items-center gap-4 mb-8">
          <div class="h-px bg-[#8DC63F] flex-1"></div>
          <h3 class="serif text-4xl text-[#0F4D2E] font-bold">Proizvodi od kupusa</h3>
          <div class="h-px bg-[#8DC63F] flex-1"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7">
          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/kiseli-kupus.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="Kiseli kupus">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">Kiseli kupus</h4>
              <p class="text-gray-600 mb-5">Tradicionalni proizvod za pripremu domaćih jela.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>

          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/ribani-kupus.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="Ribani kupus">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">Ribani kupus</h4>
              <p class="text-gray-600 mb-5">Praktično pakovanje za brzu pripremu tradicionalnih jela.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>

          <article class="bg-white shadow-sm overflow-hidden group">
            <img src="/images/list-kupusa.jpg" class="w-full h-72 object-cover group-hover:scale-105 transition duration-500" alt="List kupusa">
            <div class="p-7">
              <h4 class="serif text-3xl text-[#0F4D2E] mb-3">List kupusa</h4>
              <p class="text-gray-600 mb-5">Spreman za pripremu sarme i domaćih specijaliteta.</p>
              <a href="#" class="text-[#0F4D2E] font-bold">Vidi proizvod →</a>
            </div>
          </article>
        </div>
      </div>
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

    <!-- PROCESS -->
  <section class="py-24 bg-[#0F4D2E] text-white">
    <div class="max-w-7xl mx-auto px-6">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <p class="uppercase tracking-[.3em] text-sm text-[#8DC63F] font-bold mb-4">Proces</p>
        <h2 class="serif text-5xl font-bold mb-5">Od domaćeg mlijeka do proizvoda</h2>
        <p class="text-white/75 text-lg">Tri jednostavna koraka čuvaju ono najvažnije: kvalitet, svježinu i prepoznatljiv okus.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="p-8 border border-white/20">
          <span class="text-[#8DC63F] font-bold text-5xl">01</span>
          <h3 class="serif text-3xl mt-6 mb-3">Otkup mlijeka</h3>
          <p class="text-white/70">Saradnja s lokalnim proizvođačima i pažljiv odabir sirovine.</p>
        </div>
        <div class="p-8 border border-white/20">
          <span class="text-[#8DC63F] font-bold text-5xl">02</span>
          <h3 class="serif text-3xl mt-6 mb-3">Proizvodnja</h3>
          <p class="text-white/70">Tradicionalni pristup uz savremene tehnološke standarde.</p>
        </div>
        <div class="p-8 border border-white/20">
          <span class="text-[#8DC63F] font-bold text-5xl">03</span>
          <h3 class="serif text-3xl mt-6 mb-3">Kontrola kvaliteta</h3>
          <p class="text-white/70">Kvalitet koji se prati od ulaza sirovine do gotovog proizvoda.</p>
        </div>
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

      <form class="bg-[#F8FAF4] p-8 shadow-sm">
        <div class="grid grid-cols-1 gap-5">
          <input class="p-4 bg-white border border-[#E4EAD8]" placeholder="Ime i prezime">
          <input class="p-4 bg-white border border-[#E4EAD8]" placeholder="E-mail">
          <input class="p-4 bg-white border border-[#E4EAD8]" placeholder="Naslov poruke">
          <textarea class="p-4 bg-white border border-[#E4EAD8] h-36" placeholder="Poruka"></textarea>
          <button class="bg-[#0F4D2E] text-white p-4 font-bold hover:bg-[#8DC63F] transition">Pošalji poruku</button>
        </div>
      </form>
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
import { ref, computed, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { useLocaleStore } from "@/stores/locale"
import { useI18n } from 'vue-i18n'
import { onMounted, onBeforeUnmount } from 'vue'
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

const products = ref([])

const loadProducts = async () => {
  const res = await ProductService.getAll()
  products.value = res.data
}

const milkProducts = computed(() =>
  products.value.filter((p) => p.category?.slug === "mlijecni")
)

onMounted(loadProducts)
</script>

<style lang="scss" scoped>

.hero-bg {
  position: relative;
  background:
    linear-gradient(130deg, rgba(15, 77, 46, .82) 0%, rgba(15, 77, 46, .42) 85%, rgba(15, 77, 46, .08) 103%),
    linear-gradient(0deg, rgba(35, 35, 35, .82) 0%, rgba(35, 35, 35, 0) 33%),
    url('/images/poljorad_hero.png');
  background-position: center;
  background-size: cover;
}

.hero-bg::after {
  content: "";
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.22);
  pointer-events: none;
}

/* MOBILE */
@media (max-width: 768px) {
  .hero-bg {
    background:
      linear-gradient(180deg, rgba(15, 77, 46, .82) 0%, rgba(15, 77, 46, .76) 45%, rgba(0, 0, 0, .70) 100%),
      url('/images/poljorad_hero.png');
    background-position: center top;
    background-size: cover;
  }

  .hero-bg::after {
    background: rgba(0, 0, 0, 0.18);
  }
}
.nav-link {
  @apply inline-flex items-center px-6 py-2 text-white transition hover:bg-white/80 hover:text-black;
}

.mobile-link {
  @apply block px-4 py-3 text-gray-800 hover:bg-gray-100;
}
.soft-vlasic {
  background-image: linear-gradient(
      rgba(15, 77, 46, 0.35),
      rgba(15, 77, 46, 0.35)
    ),
    url('/images/vlasic_hero.png');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
.soft-vlasic > div {
  position: relative;
  z-index: 2;
}
</style>
