<script setup>

import {useUiStore} from "../../stores/store-ui";
import {ref} from "vue";
import {useProfileStore} from "../../stores/store-profile";

const ui = useUiStore();
const profile = useProfileStore();
const toggle = ref(null);


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
        <template v-slot:append>
            <div class="d-flex align-center flex-column pa-6">
                <v-btn-toggle
                    v-model="toggle"
                    :mandatory="false"
                    :selected-class="undefined"
                    variant="outlined"
                >
                    <v-btn :to="profile.social.github" icon="mdi-github"></v-btn>
                    <v-btn icon="mdi-facebook"></v-btn>
                    <v-btn icon="mdi-twitter"></v-btn>
                    <v-btn icon="mdi-linkedin"></v-btn>
                </v-btn-toggle>
            </div>
        </template>
    </v-navigation-drawer>
</template>

<style scoped>

</style>