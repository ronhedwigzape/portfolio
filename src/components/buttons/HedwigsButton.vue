<script setup>
const toggle = () => {
    toggleAudio();
}

const restart = () => {
    restartAudio();
}
</script>

<template>
    <audio id="backgroundAudio" loop crossOrigin="anonymous">
        <source src="/music/HedwigsTheme.mp3" type="audio/mp3">
    </audio>
    <v-btn
        @click="toggle"
        @dblclick="restart"
        :ripple="false"
        :active="false"
        size="large"
        :variant="$vuetify.display.mdAndDown ? 'outlined': 'plain'"
    >
        <v-icon size="x-large">mdi-music-circle</v-icon>
        <v-tooltip activator="parent" location="bottom">
            Hedwig's Theme
        </v-tooltip>
    </v-btn>
</template>

<style scoped>
</style>