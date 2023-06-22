<script setup>
import {useHomeStore} from "@/stores/store-home";
import ExploreProjectButton from "../buttons/ExploreProjectButton.vue";

const home = useHomeStore();
</script>

<template>
    <v-parallax :src="home.header.parallax.location"
                :height="$vuetify.display.smAndUp && $vuetify.display.smAndDown ? 500 :
                $vuetify.display.mdAndUp && $vuetify.display.mdAndDown ? 550 :
                 $vuetify.display.lgAndUp && $vuetify.display.lgAndDown ? 600 : 620">
        <v-container class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h3 text-sm-h2 mb-4 text-md-h1 text-shadow potter text-center">
                {{ home.header.title }}
            </h1>
            <p class="text-shadow text-subtitle-2 text-sm-subtitle-1 text-md-h5 my-3 my-sm-0 text-center">
                {{ home.header.subtitle }}
            </p>
            <explore-project-button/>
        </v-container>

    </v-parallax>
</template>

<style scoped>

</style>