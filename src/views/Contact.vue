<script setup>
import HogwartsContactParallax from "../components/parallax/HogwartsContactParallax.vue";
import {useContactStore} from "@/stores/store-contact";

const contact = useContactStore();
</script>

<template>
    <v-main>
        <HogwartsContactParallax/>
        <v-container class="mt-md-5">
            <v-row class="my-5" align="center">
                <v-col cols="12" sm="6" md="6" lg="6">
                    <p class="text-body-1 text-sm-h6 text-md-h6 text-lg-h6"
                       v-for="description in contact.content.description">
                        {{ description }}
                    </p>
                </v-col>
                <v-col cols="12" sm="6" md="6" lg="6">
                    <v-card class="mt-lg-3">
                        <v-card-title class="my-3 my-md-6 my-lg-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4">
                            {{ contact.content.title }}
                        </v-card-title>
                        <v-card-text align="center">
                            <v-text-field
                                label="First Name"
                                hide-details="auto"
                            ></v-text-field>
                            <v-text-field
                                label="Last Name"
                                hide-details="auto"
                            ></v-text-field>
                            <v-text-field
                                label="Email"
                                hide-details="auto"
                            ></v-text-field>
                            <v-textarea label="Message"></v-textarea>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn block>Submit</v-btn>
                        </v-card-actions>
                    </v-card>

                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>

<style scoped>

</style>