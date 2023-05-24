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
.section-pad {
    padding-left: 50px;
    padding-right: 50px;
    overflow-x: hidden;
}

.images {
    max-width: 1040px;
}

.w-80 {
    max-width: 80%;
}

.flex-item-left {
    align-self: flex-start;
}

.img-wrap {
    padding: 10px;
}

.img-wrap a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    width: 240px;
    height: 120px;
}

</style>