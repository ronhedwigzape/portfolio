<script setup lang="ts">

import {ref} from "vue";

const imageNumbering = ref([1, 2, 3, 4, 5, 6, 7, 8]);
</script>

<template>
    <div class="section-wrap bg-white">
        <section id="spells" class="row section">
            <div class="col-12 section-pad">
                <div class="flex-item-left">
                    <div class="w-80">
                        <h2 class="display-1 color-primary mb-4 harry-potter-font">My Spells</h2>
                        <p class="mb-5">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis, deleniti dolorum ex
                            nam odio tempora? Animi atque culpa exercitationem fugiat, laboriosam non nulla numquam
                            porro quae recusandae sunt totam voluptatem.
                        </p>
                    </div>
                    <div class="row images">
                        <div v-for="image in imageNumbering" class="col-xl-3 col-lg-6 col-md-4 col-sm-6 img-wrap">
                            <a href="#">
                                <img :src="`/src/assets/img/image-0${image}.jpg`" alt="Potter Image" class="img-fluid"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>