<template>
    <n-card class="product-card" hoverable>

        <div class="image-wrapper">
            <img :src="product.thumbnail" :alt="product.title" class="product-image" />
        </div>


        <h3 class="title">{{ product.title }}</h3>
        <p class="price">{{ formatINR(Math.round(product.price * 88)) }} ₹</p>


        <router-link :to="`/products/${product.id}`" class="cta">
            <n-button type="primary" block class="order-btn">Order Now</n-button>
        </router-link>
    </n-card>
</template>

<script setup>
import { NCard, NButton } from "naive-ui"
import formatINR from '../utils/formatINR.js';

defineProps({
    product: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.product-card {
    text-align: center;
    border-radius: 16px;
    background: #ffffff;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 340px;
}

.product-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.image-wrapper {
    position: relative;
    overflow: hidden;
    border-radius: 12px;
}

.product-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    transition: transform 0.4s ease;
}

.product-card:hover .product-image {
    transform: scale(1.05);
}

.title {
    font-size: 1rem;
    font-weight: 600;
    margin: 0.75rem 0 0.25rem;
    color: #3B0270;
    padding: 0 0.5rem;
    line-height: 1.4;
}

.price {
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0.5rem 0 1rem;
    color: #6F00FF;
}

.cta {
    margin-top: auto;
}

.order-btn {
    font-size: 1rem;
    padding: 0.7rem;
    border-radius: 10px;
    background: #6F00FF;
    color: #fff;
    font-weight: 600;
    transition: background 0.3s ease;
}

.order-btn:hover {
    background: #3B0270;
}
</style>
