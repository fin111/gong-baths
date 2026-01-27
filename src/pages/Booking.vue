<template>
    <section class="booking">
        <h1>Book a Sound Healing Session</h1>
        <p>
            Choose a date and time that suits you from below. Once booked, you’ll 
            receive a confirmation with everything you need to know to prepare for your session.
        </p>
        <p>
            If you’d prefer a <strong>private sound healing session</strong>, or are looking for something more 
            tailored to your individual needs, 
            <RouterLink class="link-item" to="/contact">please get in touch</RouterLink>. <br />
            Private sessions can be arranged by request and offer a more personalised experience.
        </p>
        <p>
            Come as you are. Leave feeling lighter, calmer, and more connected.
        </p>

        <BookingList class="booking-list"/>
    </section>
</template>

<script setup lang="ts">
import BookingList from '@/components/BookingList.vue';

</script>

<style scoped lang="scss">
.booking {
    max-width: 700px;
    margin: 0 auto 2rem auto;
    padding: 0 16px;
    display: flex;
    flex-direction: column;

    @include for-phone-up {
        padding: 0;
    }

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

    p {
        margin-bottom: 1rem;
    }
}
</style>