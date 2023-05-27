<script setup lang="ts">

import SocialLinks from "./SocialLinks.vue";
import {reactive} from "vue";

const introduction = reactive([
    {
        title: 'Unleash the Magic Within: Journey into My Digital Realm!',
        subtitle: 'Where Technology and Imagination Converge',
        description: 'Welcome to my enchanting world where technology and imagination intertwine. Explore my captivating portfolio, witness the fusion of creativity and logic, and experience the transformative power of my projects. Together, let\'s unlock hidden chambers of skill and create a realm where extraordinary meets reality. Embrace the magic within!'
    }
])
</script>

<template>
    <div class="parallax-window">
        <SocialLinks />
        <div class="section-wrap">
            <section id="intro" class="section">
                <div v-for="intro in introduction" class="bg-white-transparent intro">
                    <h1 class="display-1 mb-5 text-white harry-potter-font title">{{ intro.title }}</h1>
                    <h3 class="text-white subtitle-intro">{{ intro.subtitle }}</h3>
                    <p class="mb-0 text-white p">{{ intro.description }}</p>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>

.parallax-window {
    min-height: 662px;
    background: transparent url("/src/assets/img/hogwarts-night-castle-2.png") no-repeat;
    background-size: cover;
    position: relative;
}

.intro {
    position: absolute;
    max-width: 1500px;
    width: 80%;
    padding: 60px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

#intro {
    min-height: 100vh;
    max-width: none;
}

.title {
    text-shadow: 3px 3px 5px #1a1d20;
}

.subtitle-intro {
    text-shadow: 1px 1px 3px #1a1d20;
}

.p {
    text-shadow: 1px 1px 2px #1a1d20;
}

.bg-white-transparent {
    background: rgba(255,255,255,0.25);
    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid #000;;
}

.text-black {
    color: black;
}

@media (min-width: 991px) {
    .intro {
        top: 55%;
        width: 63%;
        left: 64.5%;
    }
}

</style>