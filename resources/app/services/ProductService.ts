import axios from "axios"

export interface Category {
  id: number
  name: string
  slug: string
}
export interface Product {
  id: number
  name: string
  description: string | null
  image?: string | null
  image_url?: string | null
  category_id?: number
  category?: Category | null
  created_at?: string
  updated_at?: string
}

export default {
  getAll() {
    return axios.get<Product[]>("/api/products")
  },

  get(id: number) {
    return axios.get<Product>(`/api/products/${id}`)
  },

  create(data: FormData) {
  return axios.post("/api/products", data, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  })
},

  // ✅ UPDATE WITH IMAGE (FormData)
  update(id: number, data: FormData) {
    return axios.post<Product>(`/api/products/${id}?_method=PUT`, data, {
      headers: {
        "Content-Type": "multipart/form-data"
      }
    })
  },

  delete(id: number) {
    return axios.delete(`/api/products/${id}`)
  }
}