<script setup>
import HogwartsContactParallax from "../components/parallax/HogwartsContactParallax.vue";
import {useContactStore} from "@/stores/store-contact";
import {useUiStore} from "@/stores/store-ui";

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
                    <v-card class="mt-lg-3" variant="tonal">
                        <v-card-title class="my-3 my-md-6 my-lg-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4 px-6">
                            {{ contact.content.card_title }}
                            <v-icon>mdi-owl</v-icon>
                        </v-card-title>
                        <v-card-text align="center" class="px-6">
                            <v-row>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <v-text-field
                                        variant="underlined"
                                        label="First Name"
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="6" lg="6">
                                    <v-text-field
                                        variant="underlined"
                                        label="Last Name"
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-text-field
                                        variant="underlined"
                                        label="Email"
                                        hide-details="auto"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea
                                        variant="underlined"
                                        label="Message"
                                    />
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="px-6 pb-4">
                            <v-btn class="nuxt-button-sub" block>Submit</v-btn>
                        </v-card-actions>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<style scoped>

</style>