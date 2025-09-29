<template>
    <div class="order-page" v-if="product">
        <!-- Card -->
        <div class="order-card">
            <!-- Title -->
            <h1 class="title">Order: {{ product.title }}</h1>
            <p class="unit-price">
                Price per unit:
                <span class="highlight">₹{{ formatINR(Math.round(product.price * 88)) }}</span>
            </p>

            <!-- Order Form -->
            <form @submit.prevent="submitOrder" class="order-form">
                <!-- Quantity Input -->
                <div class="form-row">
                    <label for="quantity">Quantity:</label>
                    <n-input-number id="quantity" v-model:value="quantity" :min="1" :step="1" class="quantity-input" />
                </div>

                <!-- Totals -->
                <div v-if="totals" class="totals">
                    <p><span>Base:</span> ₹{{ formatINR((totals.base * 88).toFixed(0)) }}</p>
                    <p><span>GST (18%):</span> ₹{{ formatINR((totals.gstAmount * 88).toFixed(0)) }}</p>
                    <p class="grand-total">
                        <span>Total:</span> ₹{{ formatINR((totals.total * 88).toFixed(0)) }}
                    </p>
                </div>

                <!-- CTA -->
                <n-button type="primary" attr-type="submit" class="confirm-btn">
                    Confirm Order
                </n-button>
            </form>
        </div>
    </div>

    <p v-else class="loading">Loading product...</p>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useRoute, useRouter } from "vue-router"
import { NInputNumber, NButton, useMessage } from "naive-ui"
import { calculateTotal } from "../utils/calc.js"
import formatINR from '../utils/formatINR.js';

const route = useRoute()
const router = useRouter()
const message = useMessage()

const product = ref(null)
const quantity = ref(1)

onMounted(async () => {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
    product.value = await res.json()
})

const totals = computed(() => {
    if (product.value && quantity.value >= 1) {
        return calculateTotal(product.value.price, quantity.value)
    }
    return null
})

function submitOrder() {
    if (quantity.value < 1) {
        message.error("Quantity must be at least 1")
        return
    }

   
    message.success(
        `✅ Order placed for ${quantity.value} ${product.value.title}(s).`
    )

 
    setTimeout(() => {
        router.push(`/products/${product.value.id}`)
    }, 1000)
}
</script>

<style scoped>
.order-page {
    display: flex;
    justify-content: center;
    padding: 3rem 1rem;
    background: #ffffff;
}

.order-card {
    background: #fff;
    border-radius: 16px;
    padding: 2rem;
    max-width: 500px;
    width: 100%;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
}


.title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #3b0270;
}

.unit-price {
    font-size: 1.1rem;
    color: #444;
}

.unit-price .highlight {
    color: #6f00ff;
    font-weight: 600;
}


.order-form {
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-top: 1rem;
}

.form-row {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    font-weight: 600;
    color: #3b0270;
}

.quantity-input {
    max-width: 200px;
}

.totals {
    background: #f9f9f9;
    padding: 1rem 1.5rem;
    border-radius: 12px;
    font-size: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.totals span {
    font-weight: 600;
    color: #3b0270;
}

.grand-total {
    font-size: 1.2rem;
    font-weight: 700;
    color: #6f00ff;
    margin-top: 0.5rem;
}


.confirm-btn {
    font-size: 1.1rem;
    padding: 0.8rem;
    border-radius: 10px;
    background: #6f00ff;
    color: #fff;
    font-weight: 600;
    transition: background 0.3s ease;
}

.confirm-btn:hover {
    background: #3b0270;
}


.loading {
    text-align: center;
    margin-top: 3rem;
    font-size: 1.2rem;
    color: #6f00ff;
}
</style>
