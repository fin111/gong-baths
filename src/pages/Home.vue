<template>
    <section class="home">
        <header>
            <h1>Welcome to Echoes of Healing</h1>
            <p>
                Experience deep relaxation and balance through the power of sound
            </p>
        </header>
        <div class="images-container">
            <div class="images-container_singing-bowl">
                <img @click="playInstrument(bowlSoundFiles)" src="../assets/images/singing-bowl.png" alt="tibetian singing bowl">
                <!-- <router-link to="/booking" class="button hollow">Book a session</router-link> -->
            </div>
            <div class="images-container_gong">
                <div class="gong-glow"></div>
                <button
                    class="gong-btn"
                    @click="playGong"
                    ref="buttonRef"
                    @mouseenter="showLabel"
                    @mouseleave="hideLabel"
                    @mousemove="moveLabel"
                >
                    <img src="../assets/images/chau-gong.png" alt="gong" />
                </button>
                <div ref="labelRef" class="cursor-label" :style="labelStyle">
                    Click to play
                </div>
            </div>
            <div class="images-container_chimes">
                <img @click="playInstrument(chimesSoundFiles)" src="../assets/images/koshi-chimes.png" alt="tibetian singing bowl">
                <!-- <router-link to="/about" class="button hollow">About the journey</router-link> -->
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { computed, onUnmounted, reactive, ref, watch } from "vue";
import gong1 from "@/assets/sounds/gong1.mp3";
import gong2 from "@/assets/sounds/gong2.mp3";
import gong3 from "@/assets/sounds/gong3.mp3";
import gong4 from "@/assets/sounds/gong4.mp3";
import gong5 from "@/assets/sounds/gong5.mp3";
import singingBowl from "@/assets/sounds/singing-bowl.mp3";
import koshiChimes from "@/assets/sounds/koshi-chimes.mp3";

const gongSoundFiles = [
    new Audio(gong1),
    new Audio(gong2),
    new Audio(gong3),
    new Audio(gong4),
    new Audio(gong5)
];

const bowlSoundFiles = [
    new Audio(singingBowl)
]

const chimesSoundFiles = [
    new Audio(koshiChimes)
]

const lastIndex = ref<number>(-1);
const buttonRef = ref<HTMLElement | null>(null);
const labelRef = ref<HTMLElement | null>(null);

const labelVisible = ref<boolean>(false);
const labelPosition = reactive({ x: 0, y: 0 });
const gongCicked = ref<boolean>(false);

function playInstrument(files: string | any[]) {
    if (files.length === 0) return;

    files[0]?.play();
}

function playGong() {
    if (gongSoundFiles.length === 0) return;

    let randomIndex: number;

    gongCicked.value = true;
    do {
        randomIndex = Math.floor(Math.random() * gongSoundFiles.length);
    } while (randomIndex === lastIndex.value && gongSoundFiles.length > 1);

    lastIndex.value = randomIndex;
    const audio = gongSoundFiles[randomIndex];

    audio?.play();
}

const labelStyle = computed(() => ({
    opacity: labelVisible.value ? 1 : 0,
    transform: labelVisible.value
        ? `translate(20%, -30%) scale(1)`
        : `translate(20%, -30%) scale(0.8)`,
    left: `${labelPosition.x}px`,
    top: `${labelPosition.y}px`,
}));

function moveLabel(e: MouseEvent) {
    labelPosition.x = e.clientX;
    labelPosition.y = e.clientY;
}

function showLabel() {
    if (!gongCicked.value) labelVisible.value = true;
}

function hideLabel() {
    labelVisible.value = false;
}

watch(
    () => gongCicked.value,
    (val: boolean) => {
        if (val) {
            labelVisible.value = false;
        }
    }
);

onUnmounted(() => {
    const soundFiles = [...bowlSoundFiles, ...gongSoundFiles, ...chimesSoundFiles];
    
    soundFiles.forEach((audio) => {
        // Fade out audio if playing
        if (!audio.paused && !audio.ended) {
            const fadeOut = () => {
                if (audio.volume > 0.05) {
                    audio.volume -= 0.05;
                    setTimeout(fadeOut, 50);
                } else {
                    audio.volume = 0;
                    audio.pause();
                    audio.currentTime = 0;
                }
            };
            fadeOut();
        } else {
            audio.pause();
            audio.currentTime = 0;
        }
        // Reset volume for next play
        audio.volume = 1;
    });
});
</script>

<style scoped lang="scss">
.home {
    text-align: center;
    padding: size(4) size(3);
    background: radial-gradient(circle at center, #1f2633 0%, #2b3442 40%, #1C2230 100%);

    @include for-phone-up {
        padding: size(6);
    }

    @include for-desktop-up {
        padding: size(8);
    }

    header {
        margin-bottom: size(6);

         @include for-phone-up {
            margin-bottom: size(10);
        }

        h1 {
            font-size: size(6);
            line-height: 1.1;
            margin-bottom: size(3);

            @include for-phone-up {
                font-size: size(12);
                line-height: 1.2;
            }
        }

        p {
            font-size: 14px;

            @include for-phone-up {
                font-size: size(4);
            }
        }
    }

    .images-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;

        @include for-phone-up {
            flex-direction: row;
        }

        &_singing-bowl, &_chimes {
            display: flex;
            flex-direction: column;
            align-items: center;

            img {
                max-width: 200px;
                cursor: pointer;
                margin-bottom: size(3);
                display: none;

                @include for-phone-up {
                    display: block;
                }
            }
        }
         &_singing-bowl {
            margin-bottom: size(4);

            @include for-phone-up {
                margin-bottom: 0;
            }
         }

         &_chimes {
            margin-top: size(4);
            
            @include for-phone-up {
                margin-top: 0;
            }
         }

        &_gong {
            position: relative;
            padding: size(4);

            .gong-glow {
                background: radial-gradient(#ffcf40, transparent);
                height: 100%;
                width: 100%;
                position: absolute;
                z-index: 0;
                border-radius: 100%;
                top: 0;
                left: 0;
                filter: blur(20px);
            }

            .gong-btn {
                border-radius: 50%;
                border: none;
                background: none;
                padding: 0;
                cursor: pointer;
                clip-path: circle(50%);
                z-index: 2;

                img {
                    width: 100%;
                    max-width: 560px;
                    transition: opacity 0.3s ease;
                    filter: saturate(0.95) brightness(1.05) sepia(0.05);
                }
            }
        }
    }
}

.circle-btn:hover img {
    opacity: 0.85;
}

/* Floating label */
.cursor-label {
    position: fixed;
    top: 0;
    left: 0;
    transform: translate(20%, -30%) scale(0.8);
    padding: size(2) size(4);
    border: 1px solid $white;
    border-radius: size(4);
    background: rgba(0, 0, 0, 0.5);
    color: $white;
    font-size: 14px;
    font-weight: 500;
    letter-spacing: 0.5px;
    pointer-events: none;
    transition: opacity 0.25s ease, transform 0.25s ease;
    z-index: 9999;
    white-space: nowrap;
    backdrop-filter: blur(3px);
    user-select: none;
}
</style>