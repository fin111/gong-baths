<template>
    <section class="about">
        <h1>Let the Vibrations Hold You</h1>
        <p>
            Sound healing is a deeply restorative practice that uses vibration, frequency, 
            and rhythm to support relaxation, emotional balance, and overall wellbeing. 
            Each session is a gentle invitation to step out of the noise of everyday life 
            and into a space of calm, presence, and healing.
            Whether you’re feeling stressed, overwhelmed, low in energy, or simply in need of rest, 
            a sound healing session offers you the opportunity to pause, breathe, and allow your 
            nervous system to settle.
        </p>
        <img src="../assets//images/retreat-sound-bath.jpg" alt="sound bath at the retreat">
        <p>
            As the gong’s sound unfolds, it can encourage the brain to shift from fast, alert states 
            (like beta waves) into slower, more meditative states (alpha, theta, or delta). This shift is 
            associated with deep relaxation, reduced mental chatter, and a sense of calm. In this way, 
            the sound waves of the gong don’t force change, but gently guide the brain into a more 
            balanced and restorative rhythm.
        </p>
        <p>
            You may leave feeling lighter, clearer, and more balanced, 
            as if something within you has reset. Spiritually, the gong’s resonance invites a deeper 
            connection to yourself, offering moments of insight, peace, and a sense of coming home to your 
            own inner stillness.
        </p>
        <h2>About me</h2>
        <p>
            Hi, my name is Nathan. I'm based in Winchester and am a lover of sound and the benefits it can bring. 
            I trained under Leo Cosendai and completed his RYS 200hr Naad Yoga Sound Meditation course in 2022. 
            I don't have much of a social media presence but you can find me on 
            <a class="link-item" href="https://www.facebook.com/fin111" target="_blank">Facebook</a>.
        </p>
        <h2> What to Expect</h2>
        <p>
            During your session, you’ll lie down comfortably while a combination of instruments — such as gongs, 
            singing bowls, chimes, and other therapeutic sounds — are played around you. You don’t need to do 
            anything other than rest and receive.
         </p>
         <p class="list-header">People often experience:</p>
        <ul>
            <li>Deep relaxation and stress release</li>
            <li>A sense of clarity or emotional lightness</li>
            <li>Improved sleep and restfulness</li>
            <li>Feeling grounded, centred, and rebalanced</li>
        </ul> 
        <p>
            Every experience is unique. Some sessions feel deeply calming, others can feel energising or 
            insightful—your body takes what it needs.
        </p>

        <h2>Who It’s For</h2>
        <p>Sound healing is suitable for most people and requires no prior experience. It’s ideal if you:</p>
        <ul>
            <li>Are feeling stressed, anxious, or overwhelmed</li>
            <li>Struggle to switch off or rest</li>
            <li>Want to support emotional wellbeing</li>
            <li>Are curious about holistic or alternative healing practices</li>
            <li>Simply want to carve out time for yourself</li>
        </ul>
        <p>
            If you’re unsure whether sound healing is right for you, feel free to 
            <RouterLink class="link-item" to="/contact">get in touch</RouterLink> 
            before booking.         
        </p>
        <p>
            For your comfort and wellbeing, if you have a heart condition or use a pacemaker, we kindly 
            ask that you consult your doctor before attending. Sound baths are also not recommended 
            during the first trimester of pregnancy.
        </p>
    </section>
</template>

<script lang="ts" setup></script>

<style scoped lang="scss">
.about {
    max-width: 700px;
    margin: 0 auto;
    padding: 0 16px;
    line-height: 1.4;

    @include for-phone-up {
        padding: 0;
    }

    p {
        margin-bottom: size(4);

        &.list-header {
            margin-bottom: size(1);
        }
    }

    h2 {
        padding-top: size(3);
    }

    img {
        margin-bottom: size(4);
        border: 1px solid #5d6872;
        border-radius: size(1);
    }
}
</style>