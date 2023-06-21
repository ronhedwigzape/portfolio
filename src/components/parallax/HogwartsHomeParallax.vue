<script setup>

import {useHomeStore} from "../../stores/store-home";

const home = useHomeStore();
</script>

<template>
    <v-parallax :src="home.header.parallax.location">
        <v-container class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h3 mb-4 text-shadow potter text-center">
                {{ home.header.title }}
            </h1>
            <p class="text-shadow text-subtitle-2 text-center">
                {{ home.header.subtitle }}
            </p>
            <v-btn
                class="nuxt-button mt-4"
                :ripple="false"
            >
                Explore my Projects
            </v-btn>
        </v-container>

    </v-parallax>
</template>

<style scoped>
.nuxt-button {
    border: 3px solid #01dc83;
    color: white;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

.nuxt-button:hover {
    border-color: #00fa95;
    box-shadow: 0 0 20px rgba(1, 220, 131, 0.8);
    background-color: black !important;
}

.nuxt-button:active {
    box-shadow: 0 0 10px rgba(1, 220, 131, 0.4);
}
</style>