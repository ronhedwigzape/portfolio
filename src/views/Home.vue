<script setup>
import HogwartsHomeParallax from "../components/parallax/HogwartsHomeParallax.vue";
import {useHomeStore} from "@/stores/store-home";
import GetInTouchButton from "../components/buttons/GetInTouchButton.vue";
import {useUiStore} from "@/stores/store-ui";

const home = useHomeStore();
const ui = useUiStore();
</script>

<template>
    <v-main>
        <HogwartsHomeParallax/>
        <v-container class="mt-md-5">
            <h2 class="my-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4">
                {{ home.content.title }}
            </h2>
            <p class="my-5 text-body-1 text-sm-h6 text-md-h6 text-lg-h6"
               v-for="description in home.content.description"
               :class="{
                    'text-grey-lighten-1': ui.getTheme === 'dark',
                    'text-grey-darken-1': ui.getTheme === 'light'
               }"
            >
                {{ description }}
            </p>
            <v-col class="text-center">
                <get-in-touch-button/>
            </v-col>
        </v-container>
    </v-main>
</template>

<style scoped>

</style>