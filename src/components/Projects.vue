<script setup lang="ts">
import {ref} from "vue";

const numbers = ref([1, 2, 3, 4, 5])

</script>

<template>
    <div class="project-gallery">
        <div v-for="(number, numberIndex) in numbers" class="gallery-item">
            <figure class="effects">
                <img :src="`/src/assets/img/gallery/0${number}.jpg`" alt="My Project Image" class="img-fluid">
                <figcaption>
                    <h2>Project <span>{{ number }}</span></h2>
                    <p>My Project {{ number }} sample. </p>
                    <a :href="`/src/assets/img/gallery/large/0${number}.jpg`">View more</a>
                </figcaption>
            </figure>
        </div>
    </div>
</template>

<style scoped>

</style>