<template>
    <section class="contact-form">
        <form @submit.prevent="sendEmail" ref="formRef">
                <input v-model="form.name" name="from_name" placeholder="Name" required />
                <input
                    v-model="form.email"
                    type="email"
                    name="reply_to"
                    placeholder="Email"
                    required
                />
                <textarea
                    v-model="form.message"
                    name="message"
                    placeholder="Message"
                    required
                ></textarea>
            <button 
                class="button flex justify-center mt-4 text-white disabled:opacity-50" 
                type="submit" 
                :disabled="sending"
            >
                <span v-if="!sending">Send Message</span>
                <span v-else class="loading-dots">
                    Sending<span>.</span><span>.</span><span>.</span>
                </span>
            </button>

            <transition name="fade">
                <p v-if="success" class="success">
                    ✅ Message sent successfully!
                </p>
            </transition>

            <transition name="fade">
                <p v-if="error" class="error">
                    ❌ Something went wrong. Please try again.
                </p>
            </transition>
        </form>
    </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import emailjs from "@emailjs/browser";
import { useToastStore } from "@/store/toast-store";

const toast = useToastStore();

const formRef = ref<HTMLFormElement | null>(null);
const sending = ref(false);
const success = ref(false);
const error = ref(false);

const form = ref({
    name: "",
    email: "",
    message: "",
});

const sendEmail = async () => {
    if (!formRef.value) return;

    sending.value = true;
    success.value = false;
    error.value = false;

    try {
        await emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            formRef.value,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );

        toast.show("Your message has been sent!", "success");

        form.value = { name: "", email: "", message: "" };
    } catch (err) {
        console.error(err);
        toast.show("Failed to send message. Please try again later.", "error");
    } finally {
        sending.value = false;
    }
};
</script>

<style scoped lang="scss">
.contact-form {
    max-width: 500px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    label {
        font-family: "Poppins", sans-serif;
        color: $white;
    }

    input,
    textarea {
        width: 100%;
        padding: 0.5rem;
        border: 1px solid #ccc;
        border-radius: 4px;
        color: initial;
        margin-bottom: size(4);
    }

    button {
        background: $golden;
        
        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }
    }

    .loading-dots span {
        animation: blink 1s infinite;
    }
    .loading-dots span:nth-child(2) {
        animation-delay: 0.2s;
    }
    .loading-dots span:nth-child(3) {
        animation-delay: 0.4s;
    }

    @keyframes blink {
        0%,
        80%,
        100% {
            opacity: 0;
        }
        40% {
            opacity: 1;
        }
    }

    .success,
    .error {
        font-weight: 600;
        text-align: center;
        margin-top: 1rem;
    }

    .success {
        color: green;
    }
    .error {
        color: red;
    }
}

/* simple fade animation */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
