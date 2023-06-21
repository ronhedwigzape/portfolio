<script setup>

import {useUiStore} from "../../stores/store-ui";
import {useProfileStore} from "../../stores/store-profile";
import SocialButtons from "../buttons/SocialButtons.vue";

const ui = useUiStore();
const profile = useProfileStore();

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
            <v-list-item prepend-icon="mdi-theme-light-dark" @click="ui.toggleDarkMode" :title="ui.darkMode ? 'Dark Mode' : 'Light Mode'"></v-list-item>
        </v-list>
        <template v-slot:append>
           <social-buttons/>
        </template>
    </v-navigation-drawer>
</template>

<style scoped>

</style>