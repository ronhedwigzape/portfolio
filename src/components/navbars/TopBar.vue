<template>
    <!-- todo: App should have a house mode based on hover lights namely: Gryffindor, Slytherin, Ravenclaw, Hufflepuff -->
    <v-app-bar
        class="border-b"
        :class="{
            'bg-black': ui.getTheme === 'dark',
            'bg-white': ui.getTheme === 'light'
        }"
        :height="ui.topBarHeight"
        flat
    >
        <v-container class="d-flex flex-row align-center">
            <v-icon
                class="ms-3"
                :class="{
                    'text-grey-lighten-1': ui.getTheme === 'dark',
                    'text-grey-darken-1': ui.getTheme === 'light'
                }"
            >
                mdi-owl
            </v-icon>
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