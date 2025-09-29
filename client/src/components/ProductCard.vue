<template>
    <n-card class="product-card" hoverable>
        <img :src="product.thumbnail" :alt="product.title" class="product-image" />
        <h3>{{ product.title }}</h3>
        <p class="price">{{ Math.round(product.price * 88) }} ₹</p>
        <router-link :to="`/order/${product.id}`">
            <n-button type="primary" block>Order Now</n-button>
        </router-link>
    </n-card>
</template>

<script setup>
import { NCard, NButton } from "naive-ui"

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
}

.product-image {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 0.5rem;
}

.price {
    font-weight: bold;
    margin: 0.5rem 0 1rem;
    color: #3B0270;
    
}
</style>
