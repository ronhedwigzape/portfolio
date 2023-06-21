<script setup>
import TopBar from "../components/navbars/TopBar.vue";
import HogwartsHomeParallax from "../components/parallax/HogwartsHomeParallax.vue";
import {useHomeStore} from "../stores/store-home";

const home = useHomeStore();
</script>

<template>
    <v-main>
        <HogwartsHomeParallax/>
        <v-container>
            <h2 class="my-3">{{ home.content.title }}</h2>
            <p class="my-2" v-for="description in home.content.description">{{ description }}</p>
            <v-col class="text-center">
                <v-btn>Get in Touch</v-btn>
            </v-col>
        </v-container>
    </v-main>
</template>

<style scoped>

</style>