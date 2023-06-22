<template>
    <v-app-bar
        class="bg-black border-b"
        height="60"
        flat
    >
        <v-container class="d-flex flex-row align-center">
            <v-icon class="ms-3">mdi-owl</v-icon>
            <v-app-bar-title class="ms-3">{{ store.app.brand }}</v-app-bar-title>

            <navigation-buttons v-if="$vuetify.display.lgAndUp"/>
            <v-app-bar-nav-icon v-if="$vuetify.display.mdAndDown" @click.stop="ui.sidebar = !ui.sidebar" />
        </v-container>
    </v-app-bar>
</template>
<script setup>
import {useStore} from "@/stores";
import {useUiStore} from "@/stores/store-ui";
import NavigationButtons from "../buttons/NavigationButtons.vue";

const store = useStore();
const ui = useUiStore();

ui.init();
</script>

<style scoped>

</style>