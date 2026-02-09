<template>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="event in events"
      :key="event.id"
      class="border rounded-xl p-4 shadow-sm"
    >
    <img :src="event.images.thumbnail" :alt="event.name">
      <h3 class="text-lg font-semibold text-white mt-2">
        {{ event.name }}
      </h3>

      <p class="text-sm text-white-600">
        {{ event.start.formatted }}<br />
        Domum Rd, Winchester
      </p>

      <a
        class="flex justify-center button mt-4 text-white disabled:opacity-50"
        :disabled="!event.tickets_available" 
        :href="`${event.checkout_url}?ref=website`"
        target="_blank"
        noopener
      >
        {{ !event.tickets_available ? 'Sold Out' : 'Book now' }}
    </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { dateIsAfter } from '@/util/helpers';
import { onMounted, ref } from 'vue'

export interface TTEvent {
  id: string,
  name: string,
  start: {
    formatted: string,
    iso: Date,
  },
  tickets_available: boolean,
  checkout_url: string,
  images: {
    thumbnail: string,
  },
  status: string,
}

const events = ref<TTEvent[]>([])

onMounted(async () => {
  events.value = await fetchEvents();
})

async function fetchEvents(): Promise<TTEvent[]> {
  try {
    const res = await fetch('/.netlify/functions/events');

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const data = await res.json();

    const filteredResults = data.data.filter((event: { status: string; start: { iso: string | number | Date; }; }) => {
         return event.status === 'published' && dateIsAfter(event.start.iso, new Date().toISOString());
    });

    return filteredResults as TTEvent[];

  } catch (error) {
    console.error('Failed to fetch events:', error);
    
    return [];
  }
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

