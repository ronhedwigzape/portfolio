<script setup>

import {useHomeStore} from "../../stores/store-home";

const home = useHomeStore();
</script>

<template>
    <v-parallax :src="home.header.parallax.location">
        <v-container class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h4 mb-4 text-shadow potter text-center">
                {{ home.header.title }}
            </h1>
            <h5 class="text-shadow text-center">
                {{ home.header.subtitle }}
            </h5>
        </v-container>

    </v-parallax>
</template>

<style scoped>

</style>