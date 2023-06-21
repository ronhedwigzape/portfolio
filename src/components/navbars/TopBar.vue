<template>
    <v-app-bar
        scroll-behavior="hide"
        class="bg-black border-b"
        height="60"
        flat
    >
        <template v-slot:prepend>
            <v-icon class="ms-3">mdi-owl</v-icon>
            <v-app-bar-title class="ms-3">{{ store.app.brand }}</v-app-bar-title>
        </template>

        <template v-slot:append>
            <navigation-buttons v-if="$vuetify.display.lgAndUp"/>
            <v-app-bar-nav-icon v-if="$vuetify.display.mdAndDown" @click.stop="ui.sidebar = !ui.sidebar" />
        </template>
    </v-app-bar>
</template>
<script setup>
import {useStore} from "../../stores";
import {useUiStore} from "../../stores/store-ui";
import NavigationButtons from "../buttons/NavigationButtons.vue";

const store = useStore();
const ui = useUiStore();

ui.init();
</script>

<style scoped>

</style>