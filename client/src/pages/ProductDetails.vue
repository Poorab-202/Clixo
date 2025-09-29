<template>
    <div class="container" v-if="product">
        <h1>{{ product.title }}</h1>

        <!-- Product Images -->
        <div class="images">
            <img :src="selectedImage" :alt="product.title" class="main-image" />
            <div class="thumbnails">
                <img v-for="(img, i) in product.images" :key="i" :src="img" @click="selectedImage = img"
                    :class="{ active: selectedImage === img }" />
            </div>
        </div>

        <!-- Info -->
        <div class="info">
            <p><strong>Brand:</strong> {{ product.brand }}</p>
            <p><strong>Category:</strong> {{ product.category }}</p>
            <p><strong>Price:</strong> \${{ product.price.toFixed(2) }}</p>
            <p><strong>Stock:</strong> {{ product.stock }} ({{ product.availabilityStatus }})</p>
            <p><strong>Warranty:</strong> {{ product.warrantyInformation }}</p>
            <p><strong>Return Policy:</strong> {{ product.returnPolicy }}</p>
            <p class="desc">{{ product.description }}</p>
        </div>

        <!-- CTA to Order -->
        <router-link :to="`/order/${product.id}`">
            <n-button type="primary">Buy Now</n-button>
        </router-link>

        <!-- Reviews -->
        <div class="reviews" v-if="product.reviews?.length">
            <h2>Customer Reviews</h2>
            <div v-for="(review, i) in product.reviews" :key="i" class="review">
                <p><strong>{{ review.reviewerName }}</strong> ({{ review.rating }}/5)</p>
                <p>{{ review.comment }}</p>
                <small>{{ new Date(review.date).toLocaleDateString() }}</small>
            </div>
        </div>
    </div>

    <p v-else>Loading product...</p>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { useRoute } from "vue-router"
import { NButton } from "naive-ui"

const route = useRoute()
const product = ref(null)
const selectedImage = ref(null)

onMounted(async () => {
    const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
    const data = await res.json()
    product.value = data
    selectedImage.value = data.thumbnail
})
</script>

<style scoped>
.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
}

.images {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-image {
    max-width: 400px;
    border-radius: 12px;
    margin-bottom: 1rem;
}

.thumbnails {
    display: flex;
    gap: 0.5rem;
}

.thumbnails img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid transparent;
}

.thumbnails img.active {
    border: 2px solid #123458;
}

.info p {
    margin: 0.3rem 0;
}

.desc {
    margin-top: 1rem;
}

.reviews {
    margin-top: 2rem;
}

.review {
    border-top: 1px solid #ddd;
    padding: 0.5rem 0;
}
</style>
