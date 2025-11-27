<template>
    <div class="toast-container">
        <transition-group name="toast" tag="div">
            <div
                v-for="toast in store.toasts"
                :key="toast.id"
                class="toast"
                :class="toast.type"
            >
                <span>{{ toast.message }}</span>
                <button @click="store.remove(toast.id)">✖</button>
            </div>
        </transition-group>
    </div>
</template>

<script setup lang="ts">
import { useToastStore } from "@/store/toast-store";
const store = useToastStore();
</script>

<style scoped lang="scss">
.toast-container {
    position: fixed;
    top: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    z-index: 9999;
}

.toast {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    min-width: 250px;
    padding: 1rem 1.25rem;
    border-radius: 8px;
    color: #fff;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
    font-weight: 500;

    &.success {
        background-color: #2ecc71;
    }
    &.error {
        background-color: #e74c3c;
    }
    &.info {
        background-color: #3498db;
    }

    button {
        background: none;
        border: none;
        color: inherit;
        font-size: 1.2rem;
        cursor: pointer;
    }
}

/* transition for fade + slide */
.toast-enter-active,
.toast-leave-active {
    transition: all 0.3s ease;
}
.toast-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}
.toast-leave-to {
    opacity: 0;
    transform: translateY(-10px);
}
</style>
