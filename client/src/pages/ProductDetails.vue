<template>
    <div class="container" v-if="product">
        <div class="layout">
            <!-- Left Column: Images -->
            <div class="left">
                <ImageGallery :images="product.images" :alt="product.title" :thumbnail="product.thumbnail" />
            </div>

            <!-- Right Column: Info -->
            <div class="right">
                <ProductInfo :product="product" />
            </div>
        </div>

        <!-- Reviews -->
        <ReviewList :reviews="product.reviews" />
    </div>

    <p v-else>Loading product...</p>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import ImageGallery from "../components/ImageGallery.vue"
import ProductInfo from "../components/ProductInfo.vue"
import ReviewList from "../components/ReviewList.vue"

const route = useRoute()
const product = ref(null)

onMounted(async () => {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
    product.value = await res.json()
})
</script>

<style scoped>


.container {
    max-width: 1100px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.layout {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
}

.left {
    display: flex;
    justify-content: center;
}

.right {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

@media (max-width: 768px) {
    .layout {
        grid-template-columns: 1fr;
    }
}
</style>
