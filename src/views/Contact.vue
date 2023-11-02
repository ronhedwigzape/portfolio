<script setup>
import HogwartsContactParallax from "../components/parallax/HogwartsContactParallax.vue";
import {useContactStore} from "@/stores/store-contact";
import {useUiStore} from "@/stores/store-ui";
import OwlCard from "@/components/cards/OwlCard.vue";

const contact = useContactStore();
const ui = useUiStore();
</script>

<template>
    <v-main>
        <HogwartsContactParallax/>
        <v-container class="mt-md-5">
            <v-row class="my-6" align="center">
                <v-col cols="12" sm="6" md="6" lg="6">
                    <h2 class="mb-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4">
                        {{ contact.content.title }}
                    </h2>
                    <p class="my-5 text-body-1 text-sm-h6 text-md-h6 text-lg-h6"
                       v-for="description in contact.content.description"
                       :class="{
                            'text-grey-lighten-1': ui.getTheme === 'dark',
                            'text-grey-darken-1': ui.getTheme === 'light'
                       }"
                    >
                        {{ description }}
                    </p>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                    <OwlCard :contact="contact" />
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<style scoped>

</style>