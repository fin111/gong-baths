<template>
    <div id="app">
        <Nav v-if="currentRoute !== '/'" />
        <main :class="[ currentRoute !== '/' ? 'container-top' : '' ]">
            <RouterView />
        </main>
        <ToastContainer />
    </div>
</template>

<script setup lang="ts">
import ToastContainer from "@/components/ToastContainer.vue";
import Nav from "@/components/Nav.vue";

import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();
const currentRoute = computed(() => route.path);

</script>

<style lang="scss" scoped>
main {
    &.container-top {
        padding-top: 110px;
    }
}
</style>