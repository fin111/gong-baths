 <template>
    <nav class="menu">
        <input type="checkbox" href="#" v-model="isChecked" class="menu-open" name="menu-open" id="menu-open"/>
        <label class="menu-open-button" for="menu-open">
            <span class="hamburger hamburger-1"></span>
            <span class="hamburger hamburger-2"></span>
            <span class="hamburger hamburger-3"></span>
        </label>
        <RouterLink class="menu-item" to="/">Home</RouterLink>
        <RouterLink class="menu-item" to="/about">About</RouterLink>
        <RouterLink class="menu-item" to="/booking">Booking</RouterLink>
        <RouterLink class="menu-item" to="/contact">Contact</RouterLink>
    </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const isChecked = ref<boolean>(false);

watch(route, () => {
  isChecked.value = false;
});

</script>

<style lang="scss" scoped>
// idea from Lucas Bebber https://codepen.io/lbebber/pen/RNgBPP

$home-x: -100px;
$home-y: 10px;

$about-x: -50px;
$about-y: 90px;

$booking-x: 50px;
$booking-y: 90px;

$contact-x: 100px;
$contact-y: 10px;

.menu {
    position: absolute;
    left: 50%;
    margin-left: -190px;
    padding-top: 20px;
    padding-left: 190px;
    width: 380px;
    height: 250px;
    box-sizing: border-box;
    font-size: 14px;
    text-align: left;

    .menu-open {
        display: none;

        &:checked + .menu-open-button {
            transition-timing-function: linear;
            transition-duration: 200ms;
            transform: scale(0.9, 0.9) translate3d(0, 0, 0);
        }

        &:checked + .menu-open-button .hamburger-1 {
            transform: translate3d(0, 0, 0) rotate(45deg);
        }

        &:checked + .menu-open-button .hamburger-2 {
           transform: translate3d(0, 0, 0) scale(0.1, 1);
        }

        &:checked + .menu-open-button .hamburger-3 {
            transform: translate3d(0, 0, 0) rotate(-45deg);
        }

        &:checked ~ .menu-item:nth-child(3) {
            transition-duration: 180ms;
            transform: translate3d($home-x, $home-y, 0);
        }

        &:checked ~ .menu-item:nth-child(4) {
            transition-duration: 280ms;
            transform: translate3d($about-x, $about-y, 0);
        }

        &:checked ~ .menu-item:nth-child(5) {
            transition-duration: 380ms;
            transform: translate3d($booking-x, $booking-y, 0);
        }

        &:checked ~ .menu-item:nth-child(6) {
            transition-duration: 480ms;
            transform: translate3d($contact-x, $contact-y, 0);
        }
    }

    .menu-open-button {
        z-index: 2;
        transition-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition-duration: 400ms;
        transform: scale(1.1, 1.1) translate3d(0, 0, 0);
        outline: 1px solid rgba(255, 255, 255, 0.5);
        outline-offset: -3px;
        cursor: pointer;

        &:hover{
            transform:scale(1.1,1.1) translate3d(0,0,0);
        }
        
        .hamburger {
            width: 25px;
            height: 3px;
            background: white;
            display: block;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-left: -12.5px;
            margin-top: -1.5px;
            transition: transform 200ms;

            &.hamburger-1 {
                transform: translate3d(0, -8px, 0);
            }

            &.hamburger-2 {
                transform: translate3d(0, 0, 0);
            }

            &.hamburger-3 {
                transform: translate3d(0, 8px, 0);
            }
        }
    }

    .menu-item,
    .menu-open-button {
        background: #a67c00;
        border-radius: 100%;
        width: 70px;
        height: 70px;
        margin-left: -40px;
        position: absolute;
        top: 20px;
        color: white;
        text-align: center;
        text-decoration: none;
        line-height: 70px;
        transform: translate3d(0, 0, 0);
        transition: transform ease-out 200ms;
    }

    .menu-item {
        transform: translate3d(0,0,0);
        transition: transform 300ms cubic-bezier(0.935, 0.000, 0.340, 1.330), 
                    opacity 200ms;
        will-change: transform;
        outline: 1px solid rgba(255, 255, 255, 0.5);
        outline-offset: -3px;

        &:hover{
            text-decoration: underline;
        }
    }
}
</style>