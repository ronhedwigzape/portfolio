<script setup>

import TopBar from "./components/navbars/TopBar.vue";
import SideBar from "./components/navbars/SideBar.vue";
</script>

<template>
    <v-app>
        <TopBar/>
        <SideBar/>
        <router-view/>
    </v-app>
</template>

<style scoped>

</style>
