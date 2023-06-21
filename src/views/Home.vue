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
            <h3>{{ home.content.title }}</h3>
            <p>{{ }}</p>
        </v-container>
    </v-main>
</template>

<style scoped>

</style>