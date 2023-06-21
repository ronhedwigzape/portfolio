<template>
    <v-app-bar
        scroll-behavior="hide"
        class="bg-black"
        height="60"
        flat
    >
        <template v-slot:prepend>
            <v-icon class="ms-3">mdi-owl</v-icon>
        </template>
        <v-app-bar-title class="font-weight-bold">{{ store.app.brand }}</v-app-bar-title>

        <template v-slot:append>
            <v-app-bar-nav-icon v-if="$vuetify.display.mdAndDown" @click.stop="ui.sidebar = !ui.sidebar" />
        </template>
    </v-app-bar>
</template>
<script setup>
import {useStore} from "../../stores";
import {useUiStore} from "../../stores/store-ui";

const store = useStore();
const ui = useUiStore();

ui.init()
</script>


<style scoped>

</style>