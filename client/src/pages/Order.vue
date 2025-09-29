<template>
    <div class="container" v-if="product">
        <h1>Order: {{ product.title }}</h1>
        <p><strong>Price per unit:</strong> \${{ product.price.toFixed(2) }}</p>

        <form @submit.prevent="submitOrder" class="order-form">
            <!-- Quantity Input -->
            <label for="quantity">Quantity:</label>
            <n-input-number id="quantity" v-model:value="quantity" :min="1" :step="1" style="max-width: 200px;" />

            <!-- Totals -->
            <div v-if="totals" class="totals">
                <p><strong>Base:</strong> \${{ totals.base.toFixed(2) }}</p>
                <p><strong>GST (18%):</strong> \${{ totals.gstAmount.toFixed(2) }}</p>
                <p><strong>Total:</strong> \${{ totals.total.toFixed(2) }}</p>
            </div>

            <n-button type="primary" attr-type="submit">Confirm Order</n-button>
        </form>
    </div>

    <p v-else>Loading product...</p>
</template>

<script setup>
import { ref, onMounted, computed } from "vue"
import { useRoute } from "vue-router"
import { NInputNumber, NButton } from "naive-ui"
import { calculateTotal } from "../utils/calc.js"

const route = useRoute()
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
        alert("Quantity must be at least 1")
        return
    }
    alert(
        `Order placed for ${quantity.value} ${product.value.title}(s).\nTotal: $${totals.value.total}`
    )
}
</script>

<style scoped>
.container {
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.order-form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}

.totals {
    background: #f9f9f9;
    padding: 1rem;
    border-radius: 8px;
}
</style>
