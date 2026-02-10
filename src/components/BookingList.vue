<template>
    <div class="grid md:grid-cols-2 gap-6">
        <div v-for="event in events.events" :key="event.id" class="border rounded-xl p-4 shadow-sm">
            <img :src="event.images.thumbnail" :alt="event.name">
            <h3 class="text-lg font-semibold text-white mt-2">
                {{ event.name }}
            </h3>

            <p class="text-sm text-white-600">
                {{ event.start.formatted }}<br />
                Domum Rd, Winchester
            </p>

            <a class="flex justify-center button mt-4 text-white disabled:opacity-50"
                :disabled="!event.tickets_available" :href="`${event.checkout_url}?ref=website`" target="_blank"
                noopener @click="trackButton(event.start.formatted)">
                {{ !event.tickets_available ? 'Sold Out' : 'Book now' }}
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
import { trackEvent } from '@/types/ga';
import { onMounted } from 'vue'
import { useEventsStore } from '@/store/events-store';

const events = useEventsStore();

onMounted(async () => {
    await events.fetchEvents();
})

function trackButton(date: string) {
    trackEvent('book_now_click', {
        event_category: 'engagement',
        event_label: `Booking Button - ${date}`,
        value: 1
    });
}
</script>

<style scoped lang="scss">
img {
    max-height: 150px;
    object-fit: cover;
}

a {
    &.button {
        background: $golden;
    }
}
</style>
