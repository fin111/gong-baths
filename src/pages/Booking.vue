<template>
    <section class="booking">
        <h1>Book a Session</h1>
        <!-- <form @submit.prevent="submit">
            <label>
                Name:
                <input v-model="name" required />
            </label>
            <label>
                Email:
                <input v-model="email" type="email" required />
            </label>
            <label>
                Preferred Date:
                <input v-model="date" type="date" required />
            </label>
            <button type="submit">Send Booking</button>
        </form> -->
        <BookingList />
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BookingList from '@/components/BookingList.vue';

const name = ref("");
const email = ref("");
const date = ref("");

const submit = () => {
    alert(`Booking submitted for ${name.value} on ${date.value}`);
};
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