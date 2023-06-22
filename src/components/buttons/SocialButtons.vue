<script setup>
import {useProfileStore} from "@/stores/store-profile";
import {ref} from "vue";
import ToggleDarkModeSwitch from "./ToggleDarkModeSwitch.vue";
import HedwigsButton from "@/components/buttons/HedwigsButton.vue";

const profile = useProfileStore();
const toggle = ref(null);
</script>

<template>
    <div class="d-flex align-center flex-column pa-6">
        <v-col class="d-flex justify-space-between align-center">
            <p>Hedwig's Theme</p>
            <hedwigs-button/>
        </v-col>
        <div class="d-flex justify-space-between align-center" style="gap: 2rem;">
            <p>Appearance</p>
            <toggle-dark-mode-switch/>
        </div>

        <v-btn-toggle
            v-model="toggle"
            :mandatory="false"
            :selected-class="undefined"
            variant="outlined"
        >
            <v-btn :href="profile.social.github" target="_blank" icon="mdi-github"/>
            <v-btn :href="profile.social.facebook" target="_blank" icon="mdi-facebook"/>
            <v-btn :href="profile.social.twitter" target="_blank" icon="mdi-twitter"/>
            <v-btn :href="profile.social.linkedin" target="_blank" icon="mdi-linkedin"/>
        </v-btn-toggle>
    </div>
</template>

<style scoped>

</style>