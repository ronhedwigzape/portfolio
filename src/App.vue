<script setup>
import TopBar from "./components/navbars/TopBar.vue";
import SideBar from "./components/navbars/SideBar.vue";
import Footer from "./components/footer/Footer.vue";
</script>

<template>
<!-- todo: App should have sorting hat interactions -->
<!-- todo: App should have lazy loaders and skeleton loaders -->
<!-- todo: Make a Marauder's Map of Ron Hedwig -->
<!-- todo: Flying owl animation -->
<!-- todo: Responsive fontsize sucks. It should be fixed. -->
    <v-app>
        <TopBar/>
        <SideBar/>
        <RouterView/>
        <Footer/>
    </v-app>
</template>

<style scoped>

</style>
