<template>
  <div class="container">
    <h1>Our Products</h1>

    <p v-if="loading">Loading products...</p>

    <div v-else class="grid">
      <ProductCard v-for="item in products" :key="item.id" :product="item" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import ProductCard from "../components/ProductCard.vue"

const products = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=12")
    const data = await res.json()
    products.value = data.products
  } catch (err) {
    console.error("Error fetching products:", err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem 1rem;
}

h1 {
  text-align: center;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 1.5rem;
}
</style>
