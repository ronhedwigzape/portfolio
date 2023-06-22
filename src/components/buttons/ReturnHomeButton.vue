<script setup>
import {useUiStore} from "@/stores/store-ui";
import {useHomeStore} from "@/stores/store-home";

const ui = useUiStore();
const home = useHomeStore();
</script>

<template>
    <v-btn
        :to="`/${home.slug}`"
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