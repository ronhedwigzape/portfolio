<script setup>

import {useUiStore} from "../../stores/store-ui";

const ui = useUiStore();

const toggleDarkMode = () => {
    ui.toggleDarkMode();
}

</script>

<template>
    <v-navigation-drawer
        temporary
        v-model="ui.sidebar"
        v-if="$vuetify.display.mdAndDown"
    >
        <v-list density="compact" nav>
            <v-list-item :to="'/'" prepend-icon="mdi-view-dashboard" title="Home" value="home"></v-list-item>
            <v-list-item :to="'/projects'" prepend-icon="mdi-briefcase" title="Projects" value="projects"></v-list-item>
            <v-list-item :to="'/contact'" prepend-icon="mdi-account" title="Contact" value="contact" ></v-list-item>
            <v-list-item prepend-icon="mdi-theme-light-dark" @click="toggleDarkMode" :title="ui.darkMode ? 'Dark Mode' : 'Light Mode'"></v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<style scoped>

</style>