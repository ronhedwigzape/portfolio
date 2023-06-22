import { defineStore } from 'pinia';

export const useAudioStore = defineStore('audio', {
    state: () => ({
        audioElement: null,
        song: './music/Hedwig\'s%20Theme.mp3',
        isPlaying: false
    }),
    actions: {
        setAudioElement(element) {
            this.audioElement = element;
        },
        toggleAudio() {
            if (this.audioElement) {
                if (this.audioElement.paused) {
                    this.audioElement.play();
                    this.setIsPlaying(true);
                } else {
                    this.audioElement.pause();
                    this.setIsPlaying(false);
                }
            }
        },
        setIsPlaying(isPlaying) {
            this.isPlaying = isPlaying;
        }
    },
});
