<script setup>
import { RouterLink, RouterView } from 'vue-router'
import TopBar from "./components/navbars/TopBar.vue";
import ToggleDarkModeSwitch from "./components/buttons/ToggleDarkModeSwitch.vue";

</script>

<template>
    <v-app>
        <TopBar/>
        <ToggleDarkModeSwitch/>
        <RouterView/>
    </v-app>
<h1>hello</h1>
</template>

<style scoped>

</style>
