<script setup lang="ts">
import { ref, onMounted } from "vue"
import { useRouter } from "vue-router"
import ProductService from "@/services/ProductService"
import CategoryService from "@/services/CategoryService"

const router = useRouter()

const name = ref("")
const description = ref("")
const category_id = ref<number | null>(null)

const categories = ref([])

const file = ref<File | null>(null)
const fileInput = ref<HTMLInputElement | null>(null)
const preview = ref<string | null>(null)

function openFile() {
  fileInput.value?.click()
}

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement

  if (target.files && target.files[0]) {
    file.value = target.files[0]
    preview.value = URL.createObjectURL(target.files[0])
  }
}

// 👉 UČITAJ KATEGORIJE
const loadCategories = async () => {
  const res = await CategoryService.getAll()
  categories.value = res.data
}

const submit = async () => {
  const formData = new FormData()

  formData.append("name", name.value)
  formData.append("description", description.value)

  if (category_id.value) {
    formData.append("category_id", category_id.value.toString())
  }

  if (file.value) {
    formData.append("image", file.value)
  }

  await ProductService.create(formData)

  router.push("/panel/products")
}

onMounted(loadCategories)
</script>

<template>
  <div class="p-4">
  <h1 class="text-xl font-bold mb-4">Create Product</h1>


    <div class="mb-3">
      <label class="block text-sm font-semibold mb-1 text-[#0F4D2E]">
        Naziv proizvoda
      </label>
      <input 
        v-model="name" 
        class="input input-bordered w-full" 
        placeholder="Unesite naziv"
      />
    </div>

    <div class="mb-3">
      <label class="block text-sm font-semibold mb-1 text-[#0F4D2E]">
        Opis proizvoda
      </label>
      <input 
        v-model="description" 
        class="input input-bordered w-full" 
        placeholder="Unesite opis"
      />
    </div>

    <div class="mb-3">
      <label class="block text-sm font-semibold mb-2 text-[#0F4D2E]">
        Odaberi kategoriju proizvoda
      </label>

      <select v-model="category_id" class="select select-bordered w-full">
        <option disabled :value="null">Odaberi kategoriju</option>
        <option v-for="cat in categories" :key="cat.id" :value="cat.id">
          {{ cat.name }}
        </option>
      </select>
    </div>
      <div class="mb-4">
      <!-- LABEL -->
      <label class="block text-sm font-semibold mb-2 text-[#0F4D2E]">
        Odaberi sliku proizvoda
      </label>

      <!-- HIDDEN INPUT -->
      <input
        ref="fileInput"
        type="file"
        class="hidden"
        @change="onFileChange"
      />

      <!-- BUTTON -->
      <button
        type="button"
        class="btn btn-secondary w-full flex items-center justify-center gap-2"
        @click="openFile"
      >
        📷 Odaberi sliku
      </button>

      <!-- FILE NAME -->
      <p v-if="file" class="text-sm mt-2 text-gray-600">
        Odabrano: <span class="font-medium">{{ file.name }}</span>
      </p>

      <!-- PREVIEW -->
      <div v-if="preview" class="mt-4">
        <div class="relative w-40 group">
          <img
            :src="preview"
            class="w-40 h-40 object-cover rounded-xl shadow-md border border-gray-200"
          />

          <!-- overlay hover -->
          <div class="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-xl">
            <span class="text-white text-sm">Preview</span>
          </div>
        </div>
      </div>
    </div>
  <div>
  <button class="btn btn-primary mt-4 save-button flex items-center justify-center" @click="submit">
    Save
  </button>
</div>
</div>
</template>
