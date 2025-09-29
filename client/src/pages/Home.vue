<template>
  <div class="home">
    
    <section class="hero">
      <div class="hero-overlay">
        <div class="hero-content">
          <h1>Welcome to <span class="brand">Clixo</span></h1>
          <p class="subtitle">Discover premium products at unbeatable prices ✨</p>
          <router-link to="/products">
            <n-button type="primary" size="large" class="shop-btn">Shop Now</n-button>
          </router-link>
        </div>
      </div>
      <img src="/hero-banner.jpg" alt="Shopping banner" class="hero-image" />
    </section>

  
    <section class="featured">
      <h2>Featured Products</h2>
      <div class="grid">
        <ProductCard v-for="p in products.slice(0, 4)" :key="p.id" :product="p" />
      </div>
      <div class="see-more">
        <router-link to="/products">
          <n-button type="primary" ghost>See All Products →</n-button>
        </router-link>
      </div>
    </section>

   
    <section class="about">
      <h2>Why Shop With Us?</h2>
      <div class="about-grid">
        <div class="about-card">
          <h3>🚚 Fast Delivery</h3>
          <p>Quick & reliable shipping on all orders.</p>
        </div>
        <div class="about-card">
          <h3>💳 Secure Payment</h3>
          <p>We support safe & flexible payment options.</p>
        </div>
        <div class="about-card">
          <h3>⭐ Top Quality</h3>
          <p>Carefully curated products with trusted reviews.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { NButton } from "naive-ui"
import ProductCard from "../components/ProductCard.vue"

const products = ref([])

onMounted(async () => {
  const res = await fetch("https://dummyjson.com/products?limit=8")
  const data = await res.json()
  products.value = data.products
})
</script>

<style scoped>
.home {
  background: #ffffff;
  color: #3B0270;
}

/* Hero Section */
.hero {
  position: relative;
  width: 100%;
  height: 450px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent; 
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
  color: #fff;
}

.hero-overlay h1 {
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.hero-overlay .brand {
  color: #E9B3FB; 
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
}

.shop-btn {
  font-size: 1.1rem;
  padding: 0.8rem 2rem;
  border-radius: 10px;
  background: #6F00FF;
}

.shop-btn:hover {
  background: #3B0270;
}


.featured {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 3rem 2rem;
  text-align: center;
  border-radius: 16px;
  background: linear-gradient(135deg, #E9B3FB 0%, #FFF1F1 100%);
}

.featured h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.see-more {
  margin-top: 2rem;
}


.about {
  background: #F9F9F9;
  padding: 3rem 2rem;
  margin-top: 4rem;
}

.about h2 {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto;
}

.about-card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  text-align: center;
}
</style>
