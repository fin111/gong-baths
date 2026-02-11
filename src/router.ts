import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Booking from '@/pages/Booking.vue';
import Contact from '@/pages/Contact.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        meta: {
            title: 'Sound Healing & Gong Baths in Winchester | Echoes of Healing',
            description:
                'Sound healing, gong baths and corporate sound bath sessions in Winchester, UK. Relax, reset and restore with Echoes of Healing.'
        }
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        meta: {
            title: 'About Echoes of Healing | Winchester Sound Healing',
            description:
                'Learn about Echoes of Healing in Winchester and our approach to gong baths, private sessions and corporate sound healing experiences.'
        }
    },
    {
        path: '/booking',
        name: 'Booking',
        component: Booking,
        meta: {
            title: 'Book Sound Baths & Corporate Sessions | Winchester',
            description:
                'Book a sound bath, private session or enquire about corporate sound healing in Winchester. View upcoming events and reserve your place.'
        }
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact,
        meta: {
            title: 'Contact Echoes of Healing | Winchester',
            description:
                'Enquire about private or corporate sound bath sessions in Winchester. We offer workplace wellbeing events and group experiences.'
        }
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
    // GA tracking
    window.gtag?.('event', 'page_view', {
        page_path: to.fullPath,
    });

    // SEO meta update
    if (to.meta.title) {
        document.title = to.meta.title as string;
    }

    const description = document.querySelector('meta[name="description"]');

    if (description && to.meta.description) {
        description.setAttribute('content', to.meta.description as string);
    }
});

export default router;