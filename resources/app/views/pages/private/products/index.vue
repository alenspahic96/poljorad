<script setup lang="ts">
import { ref, onMounted } from "vue"
import ProductService, { type Product } from "@/services/ProductService"

const products = ref<Product[]>([])

const load = async () => {
  const res = await ProductService.getAll()
  products.value = res.data
}

const remove = async (id: number) => {
  await ProductService.delete(id)
  await load()
}

onMounted(load)
</script>

<template>
  <div>
    <router-link to="/panel/products/create" class="btn btn-primary mb-4">
      + Add Product
    </router-link>

    <h1 class="text-xl font-bold mb-4">Products</h1>

    <div class="grid gap-4">
      <div
        v-for="p in products"
        :key="p.id"
        class="p-4 bg-base-100 rounded-xl shadow flex justify-between items-center"
      >
        <div class="flex items-center gap-4">
            <img
              v-if="p.image_url"
              :src="p.image_url"
              :alt="p.name"
              class="w-20 h-20 object-cover rounded-xl border"
            />

            <div
              v-else
              class="w-20 h-20 rounded-xl bg-gray-100 border flex items-center justify-center text-xs text-gray-400"
            >
              No image
            </div>

            <div>
              <h2 class="font-bold">{{ p.name }}</h2>
              <p class="text-sm opacity-60">{{ p.description }}</p>

              <p v-if="p.category" class="text-xs mt-1 text-success">
                {{ p.category.name }}
              </p>
            </div>
          </div>

        <div class="flex gap-2">
          <router-link
            :to="`/panel/products/${p.id}/edit`"
            class="btn btn-warning btn-sm flex items-center gap-1"
          >
            ✏️ Edit
          </router-link>

          <button
            class="btn btn-error btn-sm flex items-center gap-1"
            @click="remove(p.id)"
          >
            🗑 Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>