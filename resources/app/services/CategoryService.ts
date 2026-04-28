import axios from "axios"

export interface Category {
  id: number
  name: string
  slug: string
}

export default {
  getAll() {
    return axios.get<Category[]>("/api/categories")
  }
}