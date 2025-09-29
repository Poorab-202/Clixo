<template>
  <div class="container" v-if="product">
    <h1>{{ product.title }}</h1>
    <img :src="product.thumbnail" :alt="product.title" class="product-image" />
    <p><strong>Price:</strong> \${{ product.price }}</p>
    <p>{{ product.description }}</p>
  </div>
  <p v-else>Loading product...</p>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  try {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
    product.value = await res.json()
  } catch (err) {
    console.error("Error fetching product:", err)
  }
})
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
}
.product-image {
  width: 100%;
  max-width: 400px;
  margin: 1rem 0;
  border-radius: 12px;
}
</style>
