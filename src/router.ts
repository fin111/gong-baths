import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Booking from '@/pages/Booking.vue';
import Contact from '@/pages/Contact.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/booking', name: 'Booking', component: Booking },
    { path: '/contact', name: 'Contact', component: Contact },
];

const router =  createRouter({
    history: createWebHistory(),
    routes,
});

router.afterEach((to) => {
  window.gtag?.('event', 'page_view', {
    page_path: to.fullPath,
  });
});

export default router;