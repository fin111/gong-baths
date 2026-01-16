<template>
  <div class="grid md:grid-cols-2 gap-6">
    <div
      v-for="event in events"
      :key="event.id"
      class="border rounded-xl p-4 shadow-sm"
    >
    <img :src="event.images.thumbnail" :alt="event.name">
      <h3 class="text-lg font-semibold text-white">
        {{ event.name }}
      </h3>

      <p class="text-sm text-white-600">
        {{ event.start.formatted }}
      </p>

      <a
        class="button mt-4 inline-block bg-black text-white py-2 rounded-lg disabled:opacity-50"
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
import { onMounted, ref } from 'vue'

export interface TTEvent {
  id: string,
  name: string,
  start: {
    formatted: string,
  }
  tickets_available: boolean,
  checkout_url: string,
  images: {
    thumbnail: string,
  }
}

const events = ref<TTEvent[]>([])

onMounted(async () => {
  events.value = await fetchEvents();
})

async function fetchEvents(): Promise<TTEvent[]> {
  try {
    const res = await fetch('/.netlify/functions/events')
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`)
    }
    const data = await res.json()
    return data.data as TTEvent[]
  } catch (error) {
    console.error('Failed to fetch events:', error)
    return []
  }
}
</script>
