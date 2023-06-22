<script setup>
import {onMounted, ref} from "vue";
import {useAudioStore} from "@/stores/store-audio";

const backgroundAudio = ref(null);
const audioStore = useAudioStore();

onMounted(() => {
    audioStore.setAudioElement(backgroundAudio.value);
});
</script>

<template>
    <audio ref="backgroundAudio" :src="audioStore.song" loop></audio>
    <v-btn
        @click="audioStore.toggleAudio"
        :ripple="false"
        :active="false"
        size="large"
        :variant="$vuetify.display.mdAndDown ? 'outlined': 'plain'"
    >
        <v-icon size="x-large">mdi-music-circle</v-icon>
        <v-tooltip
            activator="parent"
            location="bottom"
        >
            Hedwig's Theme
        </v-tooltip>
    </v-btn>
</template>

<style scoped>

</style>