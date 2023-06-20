<script setup>


import {useStore} from "../../stores";

const portfolio = useStore();
</script>

<template>
    <v-app-bar
        scroll-behavior="hide"
        class="bg-black"
        height="60"
        flat
    >
        <template v-slot:prepend>
            <v-icon class="ms-3">mdi-owl</v-icon>
        </template>
        <v-app-bar-title class="font-weight-bold">{{ portfolio.app.brand }}</v-app-bar-title>

        <template v-slot:append>
            <v-app-bar-nav-icon/>
        </template>
    </v-app-bar>
</template>

<style scoped>

</style>