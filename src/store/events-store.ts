import { dateIsAfter } from '@/util/helpers';
import { defineStore } from 'pinia';

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

export const useEventsStore = defineStore('events', {
    state: () => ({
        events: [] as TTEvent[],
    }),
    actions: {
        async fetchEvents() {
            try {
                const res = await fetch('/.netlify/functions/events');

                if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
                }
                const data = await res.json();

                const filteredResults = data.data.filter((event: { status: string; start: { iso: string | number | Date; }; }) => {
                    return event.status === 'published' && dateIsAfter(event.start.iso, new Date().toISOString());
                });

                this.events = filteredResults;

            } catch (error) {
                console.error('Failed to fetch events:', error);    
            }
        }
    },
});