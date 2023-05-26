<script setup lang="ts">

import {reactive} from "vue";

const aboutProfile = reactive([
    {
        title: 'About Me',
        description: 'Hi, I\'m Ron Hedwig, a 3rd-year Bachelor of Science in Computer Science student at ACLC College of Iriga. On my website, I showcase my contributions to the world through GitHub. My portfolio has a Harry Potter theme that I believe you\'ll enjoy. Take a look and have a great time exploring my site!'
    },
    {
        title: 'Background',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, repudiandae!'
    }
]);

</script>

<template>
    <div class="section-wrap bg-white">
        <section id="about" class="row section">
            <div v-for="about in aboutProfile" class="col-xl-6">
                <div class="section-half">
                    <h2 class="display-1 color-primary mb-5 harry-potter-font harry-potter-font">{{ about.title }}</h2>
                    <p>{{ about.description }}</p>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.section-half {
    padding: 55px;
    overflow-x: hidden;
}

</style>