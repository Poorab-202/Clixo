<template>
  <div class="container">
    <h1>Our Products</h1>

    <p v-if="loading">Loading products...</p>

    <div v-else class="grid">
      <ProductCard v-for="item in products.slice((currentPage - 1) * 12, (currentPage - 1) * 12 + 12)" :key="item.id"
        :product="item" />
    </div>
    <div class="pagination">
      <button @click="handlePrevPage" class="cursor-pointer">
        <NIcon size="40">
          <ChevronLeftFilled />
        </NIcon>
      </button>
      <span class="pageNumber">{{ currentPage }}</span>
      <span class="text-4xl">/</span>
      <span class="pageNumber">{{ totalPages }}</span>

      <button @click="handleNextPage" class="cursor-pointer">
        <NIcon size="40">
          <ChevronRightFilled />
        </NIcon>
      </button>
    </div>
  </div>
</template>




<script setup>
import { ref, onMounted } from "vue"
import ProductCard from "../components/ProductCard.vue"
import { ChevronLeftFilled, ChevronRightFilled } from '@vicons/material'
import { NIcon } from 'naive-ui'

const products = ref([])
const loading = ref(true)
const currentPage = ref(1);
const totalPages = ref(0);
const productsPerPage = 12;


onMounted(async () => {
  try {
    const res = await fetch("https://dummyjson.com/products?limit=100")
    const data = await res.json()
    products.value = data.products;
    totalPages.value = Math.ceil(products.value.length / productsPerPage);
  } catch (err) {
    console.error("Error fetching products:", err)
  } finally {
    loading.value = false
  }
})



const handlePrevPage = () => {
  if (currentPage.value > 1)
    currentPage.value--;
}
const handleNextPage = () => {
  if (currentPage.value < totalPages.value)
    currentPage.value++;
}


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

.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
  gap: 1rem;
}

.pageNumber {
  font-weight: bold;
  font-size: 1.2rem;
  border: 1px solid #ccc;
  padding: 0.5rem 1rem;
  border-radius: 5px;
}
</style>
