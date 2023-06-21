<script setup>
import {useContactStore} from "../../stores/store-contact";

const contact = useContactStore();
</script>

<template>
    <v-parallax
        :src="contact.header.parallax.location"
        :height="$vuetify.display.smAndUp && $vuetify.display.smAndDown ? 500 :
                $vuetify.display.mdAndUp && $vuetify.display.mdAndDown ? 550 :
                $vuetify.display.lgAndUp && $vuetify.display.lgAndDown ? 600 : 620">
        <v-container class="d-flex flex-column fill-height justify-center align-center text-white">
            <h1 class="text-h3 text-sm-h2 mb-4 text-md-h1 text-shadow potter text-center">
                {{ contact.header.title }}
            </h1>
            <p class="text-shadow text-subtitle-2 text-sm-subtitle-1 text-md-h5 my-3 my-sm-0 text-center">
                {{ contact.header.subtitle }}
            </p>
        </v-container>
    </v-parallax>
</template>

<style scoped>

</style>