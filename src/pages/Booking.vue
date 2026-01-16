<template>
    <section class="booking">
        <h1>Book a Session</h1>
        <BookingList />
    </section>
</template>

<script setup lang="ts">
import BookingList from '@/components/BookingList.vue';

</script>

<style scoped lang="scss">
.booking {
    max-width: 500px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input,
    button {
        padding: 0.5rem;
    }
    button {
        background: $primary-color;
        color: white;
        border: none;
        cursor: pointer;
    }
}
</style>