<template>
    <div class="gallery">
        <img :src="selectedImage" :alt="alt" class="main-image" />
        <div class="thumbnails">
            <img v-for="(img, i) in images" :key="i" :src="img" @click="selectedImage = img"
                :class="{ active: selectedImage === img }" />
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"

const props = defineProps({
    images: { type: Array, required: true },
    alt: { type: String, required: true },
    thumbnail: { type: String, required: true }
})

const selectedImage = ref(null)

onMounted(() => {
    selectedImage.value = props.thumbnail || props.images[0] // fallback to first image
})
</script>


<style scoped>
.gallery {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.main-image {
    max-width: 100%;
    border-radius: 12px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.thumbnails {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    justify-content: center;
}

.thumbnails img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    border: 2px solid transparent;
    transition: border 0.2s ease;
}

.thumbnails img.active {
    border: 2px solid #123458;
}
</style>
