<template>
    <section class="contact">
        <div class="contact-header mb-8">
            <h1>Contact Me</h1>
            <p>
                If you have any questions about sound healing, upcoming sessions, or bookings, 
                feel free to reach out. <br />
                Private or corporate sound healing sessions are available by request and can be 
                tailored to your individual needs. If you’re interested in a private session, 
                please use the form below to discuss availability.
            </p>
            <br />
            <p>
                You’re also welcome to contact me if you’re unsure which session is right for you, 
                or if you’d like more information before booking.
            </p>
        </div>
        <ContactForm />
    </section>
</template>

<script setup lang="ts">
import ContactForm from '@/components/ContactForm.vue';

</script>

<style scoped lang="scss">
    .contact {
        max-width: 700px;
        margin: 0 auto;
        line-height: 1.4;
        padding: 0 16px;

        @include for-phone-up {
            padding: 0;
        }
    }
</style>
