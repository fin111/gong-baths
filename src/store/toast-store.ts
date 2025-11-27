import { defineStore } from 'pinia';

export interface Toast {
    id: number;
    message: string;
    type: 'success' | 'error' | 'info';
}

export const useToastStore = defineStore('toast', {
    state: () => ({
        toasts: [] as Toast[],
        nextId: 1,
    }),
    actions: {
        show(message: string, type: Toast['type'] = 'info', duration = 4000) {
            const id = this.nextId++;
            this.toasts.push({ id, message, type });
            setTimeout(() => this.remove(id), duration);
        },
        remove(id: number) {
            this.toasts = this.toasts.filter(t => t.id !== id);
        },
    },
});
