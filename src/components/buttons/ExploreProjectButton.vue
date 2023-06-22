<script setup>
import {useUiStore} from "@/stores/store-ui";
import {useProjectStore} from "@/stores/store-projects";

const ui = useUiStore();
const project = useProjectStore();
</script>

<template>
    <v-btn
        class="nuxt-button-lead mt-4 mt-sm-8"
        :class="{
            'nuxt-dark': ui.getTheme === 'dark',
            'text-grey-darken-3': ui.getTheme === 'light'
        }"
        prepend-icon="mdi-open-in-new"
        :ripple="false"
        :height="$vuetify.display.lgAndUp ? 60 : 55"
        :width="$vuetify.display.lgAndUp ? 280 : 260"
        :to="`/${project.slug}`"
    >
        Explore my Projects
    </v-btn>
</template>

<style scoped>

</style>