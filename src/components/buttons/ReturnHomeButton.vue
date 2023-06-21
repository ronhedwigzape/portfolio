<script setup>
import {useUiStore} from "../../stores/store-ui";

const ui = useUiStore();
</script>

<template>
    <v-btn
        :to="'/'"
        class="mt-3 nuxt-button-sub"
        :class="{
            'nuxt-dark': ui.getTheme === 'dark',
            'text-grey-darken-3': ui.getTheme === 'light'
        }"
    >
        Return to Home
    </v-btn>
</template>

<style scoped>

</style>