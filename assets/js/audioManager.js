let backgroundAudio = null;
let isAudioPlaying = false;
let userInteracted = false;

const toggleAudio = () => {
    if (isAudioPlaying) {
        backgroundAudio.pause();
        isAudioPlaying = false;
    } else {
        const playPromise = backgroundAudio.play();

        if (playPromise !== undefined) {
            playPromise.then(() => {
                isAudioPlaying = true;
            }).catch((error) => {
                console.error('Playback failed:', error);
            });
        }
    }
};

const playAudio = () => {
    if (userInteracted) {
        // Check if the audio is already playing
        if (!backgroundAudio.paused && !backgroundAudio.ended && backgroundAudio.readyState > backgroundAudio.HAVE_CURRENT_DATA) {
            return; // Do not call play() if the audio is already playing
        }

        const playPromise = backgroundAudio.play();

        if (playPromise !== undefined) {
            playPromise.then((success) => {
                console.log(success)
                isAudioPlaying = true;
            }).catch((error) => {
                console.error('Playback failed:', error);
            });
        }
    }
};

// Resets the audio to the beginning
const restartAudio = () => {
    backgroundAudio.currentTime = 0; // Make audio play from start
    playAudio();
};

const mounted = () => {
    backgroundAudio = document.getElementById('backgroundAudio');

    backgroundAudio.addEventListener('play', () => {
        isAudioPlaying = true;
    });
    backgroundAudio.addEventListener('pause', () => {
        isAudioPlaying = false;
    });

    // Listen for the first user interaction
    const handleFirstInteraction = () => {
        if (!userInteracted) {
            userInteracted = true;
            playAudio();
            // Remove the event listener after the first interaction
            window.removeEventListener('click', handleFirstInteraction);
        }
    };

    window.addEventListener('click', handleFirstInteraction);
};

document.addEventListener('DOMContentLoaded', () => {
    mounted();
});
