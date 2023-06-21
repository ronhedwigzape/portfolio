<template>
    <v-navigation-drawer
        temporary
        v-model="ui.sidebar"
        v-if="$vuetify.display.mdAndDown"
    >
        <v-list density="compact" nav>
            <v-list-item :to="'/'" prepend-icon="mdi-view-dashboard" :title="home.component" value="home"></v-list-item>
            <v-list-item :to="'/projects'" prepend-icon="mdi-briefcase" :title="project.component" value="projects"></v-list-item>
            <v-list-item :to="'/contact'" prepend-icon="mdi-account" :title="contact.component" value="contact" ></v-list-item>
        </v-list>
        <template v-slot:append>
           <social-buttons/>
        </template>
    </v-navigation-drawer>
</template>

<script setup>
import {useUiStore} from "../../stores/store-ui";
import {useProfileStore} from "../../stores/store-profile";
import {useHomeStore} from "../../stores/store-home";
import {useProjectStore} from "../../stores/store-projects";
import {useContactStore} from "../../stores/store-contact";
import SocialButtons from "../buttons/SocialButtons.vue";

const ui = useUiStore();
const profile = useProfileStore();
const home = useHomeStore();
const project = useProjectStore();
const contact = useContactStore();
</script>

<style scoped>

</style>