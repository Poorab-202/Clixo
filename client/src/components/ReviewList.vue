<template>
    <div class="reviews" v-if="reviews?.length">
        <h2 class="reviews-title">Customer Reviews</h2>

        <div v-for="(review, i) in reviews" :key="i" class="review-card">
            <!-- Reviewer + Rating -->
            <div class="review-header">
                <p class="reviewer">{{ review.reviewerName }}</p>
                <p class="rating">⭐ {{ review.rating }}/5</p>
            </div>

            <!-- Comment -->
            <p class="comment">“{{ review.comment }}”</p>

            <!-- Date -->
            <small class="date">{{ new Date(review.date).toLocaleDateString() }}</small>
        </div>
    </div>
</template>

<script setup>
defineProps({
    reviews: { type: Array, default: () => [] }
})
</script>

<style scoped>
.reviews {
    margin-top: 2.5rem;
}

.reviews-title {
    font-size: 1.5rem;
    font-weight: 700;
    color: #123458;
    margin-bottom: 1.5rem;
    border-left: 5px solid #d4c9be;
    padding-left: 0.8rem;
}

/* Each review card */
.review-card {
    background: #ffffff;
    border: 1px solid #d4c9be;
    border-radius: 12px;
    padding: 1.2rem 1.5rem;
    margin-bottom: 1.2rem;
    box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.review-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 14px rgba(0, 0, 0, 0.1);
}

/* Header: name + rating */
.review-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.6rem;
}

.reviewer {
    font-weight: 600;
    color: #030303;
}

.rating {
    font-size: 0.95rem;
    font-weight: 600;
    color: #123458;
}

/* Comment */
.comment {
    font-style: italic;
    color: #444;
    margin-bottom: 0.6rem;
    line-height: 1.4;
}

/* Date */
.date {
    font-size: 0.8rem;
    color: #777;
}
</style>
