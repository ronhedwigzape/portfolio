<script setup>
import HogwartsProjectParallax from "../components/parallax/HogwartsProjectParallax.vue";
import {useProjectStore} from "../stores/store-projects";

const project = useProjectStore();
</script>

<template>
    <v-main>
        <HogwartsProjectParallax/>
        <v-container class="mt-md-5">
            <h2 class="my-3 text-h5 text-sm-h5 text-md-h4 text-lg-h4">{{ project.content.title }}</h2>
            <p class="my-2 text-body-1 text-sm-h6 text-md-h6 text-lg-h6" v-for="description in project.content.description">{{ description }}</p>

        </v-container>
    </v-main>
</template>

<style scoped>

</style>