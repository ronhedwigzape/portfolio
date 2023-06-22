<script setup>
import ToggleDarkModeSwitch from "./ToggleDarkModeSwitch.vue";
import {useProfileStore} from "@/stores/store-profile";
import {useHomeStore} from "@/stores/store-home";
import {useProjectStore} from "@/stores/store-projects";
import {useContactStore} from "@/stores/store-contact";

const profile = useProfileStore();
const home = useHomeStore();
const project = useProjectStore();
const contact = useContactStore();
</script>

<template>
    <v-btn
        class="button bl"
        :exact="true"
        :ripple="false"
        stacked
        :to="`/${home.slug}`">
        {{ home.component }}
    </v-btn>
    <v-btn
        class="button bl"
        :exact="true"
        :ripple="false"
        stacked
        :to="`/${project.slug}`">
        {{ project.component }}
    </v-btn>
    <v-btn
        class="button br bl"
        :ripple="false"
        stacked
        :to="`/${contact.slug}`">
        {{ contact.component }}
    </v-btn>
    <v-btn
        stacked
        :ripple="false">
       <toggle-dark-mode-switch/>
    </v-btn>
    <v-btn
        :href="profile.social.github"
        :ripple="false"
        class="text-grey-lighten-1 social-button"
        target="_blank"
        icon="mdi-github"/>
    <v-btn
        :href="profile.social.facebook"
        :ripple="false"
        class="text-grey-lighten-1 social-button"
        target="_blank"
        icon="mdi-facebook"/>
    <v-btn
        :href="profile.social.twitter"
        :ripple="false"
        class="text-grey-lighten-1 social-button"
        target="_blank"
        icon="mdi-twitter"/>
    <v-btn
        :href="profile.social.linkedin"
        :ripple="false"
        class="text-grey-lighten-1 social-button"
        target="_blank"
        icon="mdi-linkedin"/>
</template>

<style scoped>
.bl {
    position: relative;
}

.bl::before {
    content: "";
    position: absolute;
    left: 0;
    top: 25%;
    height: 50%;
    border-left: 1px solid #343434;
}

.br {
    position: relative;
}

.br::before {
    content: "";
    position: absolute;
    right: 0;
    top: 25%;
    height: 50%;
    border-right: 1px solid #343434;
}

.button {
    transition: 0.3s;
}

.button:hover {
    color: #00fa95;
}

.social-button {
    transition: 0.3s;
}

.social-button:hover {
    color: white !important;
}
</style>