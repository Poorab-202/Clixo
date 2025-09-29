<template>
  <div class="info-card">

    <h1 class="title">{{ product.title }}</h1>


    <p class="desc">{{ product.description }}</p>


    <ul class="details">
      <li><span>Brand:</span> {{ product.brand }}</li>
      <li><span>Category:</span> {{ product.category }}</li>
      <li><span>Price:</span>{{ formatINR((product.price * 88).toFixed(0)) }} ₹</li>
      <li>
        <span>Stock:</span>
        <span :class="['stock', product.stock < 5 ? 'low' : 'in-stock']">
          {{ product.stock }} ({{ product.availabilityStatus }})
        </span>
      </li>
      <li><span>Warranty:</span> {{ product.warrantyInformation }}</li>
      <li><span>Return Policy:</span> {{ product.returnPolicy }}</li>
    </ul>


    <router-link :to="`/order/${product.id}`" class="cta">
      <n-button type="primary" class="buy-btn" block>
        Buy Now
      </n-button>
    </router-link>
  </div>
</template>

<script setup>
import { NButton } from "naive-ui"
import formatINR from '../utils/formatINR.js';
import { Cart } from "@vicons/ionicons5";


defineProps({
  product: { type: Object, required: true }
})
</script>

<style scoped>
.info-card {
  background: var(--color-white);
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.info-card:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}


.title {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--color-dark-purple, #3B0270);
}


.desc {
  color: #444;
  line-height: 1.5;
  margin-bottom: 1rem;
}


.details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.details li {
  margin: 0.5rem 0;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px dashed #ddd;
  padding-bottom: 0.3rem;
}

.details li span:first-child {
  font-weight: 600;
  color: var(--color-dark-purple, #3B0270);
}


.stock {
  font-weight: bold;
}

.stock.low {
  color: crimson;
}

.stock.in-stock {
  color: var(--color-bright-purple, #6F00FF);
}


.cta {
  margin-top: 1rem;
}

.buy-btn {
  font-size: 1.1rem;
  padding: 0.8rem;
  border-radius: 12px;
  background: var(--color-bright-purple, #6F00FF);
  color: #FFF;
  font-weight: 600;
  transition: background 0.3s ease;
}

.buy-btn:hover {
  background: var(--color-dark-purple, #3B0270);
}
</style>
