<script setup>
import HogwartsProjectParallax from "../components/parallax/HogwartsProjectParallax.vue";
import {useProjectStore} from "@/stores/store-projects";
import RepositoryCard from "../components/cards/RepositoryCard.vue";
import {useUiStore} from "@/stores/store-ui";

const project = useProjectStore();
const ui = useUiStore();
</script>

<template>
    <v-main>
        <HogwartsProjectParallax/>
        <v-container class="mt-md-5">
            <h2 class="my-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4">
                {{ project.content.title }}
            </h2>
            <p class="my-5 text-body-1 text-sm-h6 text-md-h6 text-lg-h6"
               v-for="description in project.content.description"
               :class="{
                    'text-grey-lighten-1': ui.getTheme === 'dark',
                    'text-grey-darken-1': ui.getTheme === 'light'
               }"
            >
                {{ description }}
            </p>
            <repository-card/>
        </v-container>
    </v-main>
</template>

<style scoped>

</style>