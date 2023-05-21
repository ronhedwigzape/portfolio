<script setup lang="ts">
import {ref} from "vue";

const numbers = ref([1, 2, 3, 4, 5])

</script>

<template>
    <div class="section-wrap bg-white">
        <section id="crafts" class="row section">
            <div class="col-12">
                <div class="w-100">
                    <div class="box-pad">
                        <div class="gallery-wrap">
                            <h2 class="display-1 color-primary mb-4 ml-2 harry-potter-font">My Crafts</h2>
                            <div v-for="(number, numberIndex) in numbers" class="gallery-item">
                                <figure class="effects">
                                    <img :src="`/src/assets/img/gallery/0${number}.jpg`" alt="My Project Image" class="img-fluid">
                                    <figcaption>
                                        <h2>Project {{ number }}</h2>
                                        <p>My Project {{ number }} sample. </p>
                                        <a :href="`/src/assets/img/gallery/large/0${number}.jpg`"
                                           target="_blank"
                                        >View more
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>