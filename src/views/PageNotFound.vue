<script setup>
import ReturnHomeButton from "../components/buttons/ReturnHomeButton.vue";
import {useUiStore} from "@/stores/store-ui";

const ui = useUiStore();
</script>

<template>
    <v-main>
        <v-container class="d-flex justify-center align-center align-content-center flex-column text-center">
            <h1 class="my-4">404 - Page Not Found</h1>
            <p class="my-2"
               :class="{
                    'text-grey-lighten-1': ui.getTheme === 'dark',
                    'text-grey-darken-1': ui.getTheme === 'light'
                }"
            >The page you are looking for does not exist.</p>
            <return-home-button/>
        </v-container>
    </v-main>
</template>

<style scoped>


</style>