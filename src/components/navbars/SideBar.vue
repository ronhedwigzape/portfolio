<template>
    <v-navigation-drawer
        temporary
        v-model="ui.sidebar"
        v-if="$vuetify.display.mdAndDown"
    >
        <v-list density="compact" nav>
            <v-list-item
                :to="`/${home.slug}`"
                prepend-icon="mdi-home"
                :title="home.component"
                :value="`${home.slug}`"
            />
            <v-list-item
                :to="`/${project.slug}`"
                prepend-icon="mdi-magic-staff"
                :title="project.component"
                :value="`${project.slug}`"
            />
            <v-list-item
                :to="`/${contact.slug}`"
                prepend-icon="mdi-email-fast"
                :title="contact.component"
                :value="`${contact.slug}`"
            />
        </v-list>
        <template v-slot:append>
           <social-buttons/>
        </template>
    </v-navigation-drawer>
</template>

<script setup>
import {useUiStore} from "@/stores/store-ui";
import {useProfileStore} from "@/stores/store-profile";
import {useHomeStore} from "@/stores/store-home";
import {useProjectStore} from "@/stores/store-projects";
import {useContactStore} from "@/stores/store-contact";
import SocialButtons from "../buttons/SocialButtons.vue";

const ui = useUiStore();
const profile = useProfileStore();
const home = useHomeStore();
const project = useProjectStore();
const contact = useContactStore();
</script>

<style scoped>

</style>