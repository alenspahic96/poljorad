<template>
  <section class="min-h-screen bg-[#F7F1E8]">
    <div class="bg-[#0F4D2E] text-white">
      <div class="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        <RouterLink to="/">
          <img src="/images/logo_poljorad.png" alt="Poljorad" class="w-36 md:w-44">
        </RouterLink>

        <RouterLink
          to="/asortiman"
          class="font-bold text-white/90 hover:text-[#8DC63F] transition"
        >
          ← Asortiman
        </RouterLink>
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
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute, RouterLink } from "vue-router"
import axios from "axios"

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const res = await axios.get(`/api/products/${route.params.id}`)
  product.value = res.data
})
</script>