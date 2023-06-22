<script setup>
import TopBar from "./components/navbars/TopBar.vue";
import SideBar from "./components/navbars/SideBar.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template>
    <v-app>
        <TopBar/>
        <SideBar/>
        <RouterView/>
        <Footer/>
    </v-app>
</template>

<style scoped>

</style>
