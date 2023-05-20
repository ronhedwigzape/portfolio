<script setup lang="ts">

import {ref} from "vue";

const imageNumbering = ref([1, 2, 3, 4, 5, 6, 7, 8]);
</script>

<template>
    <div class="row images">
        <div v-for="image in imageNumbering" class="col-xl-3 col-lg-6 col-md-4 col-sm-6 img-wrap">
            <a href="#">
                <img :src="`/src/assets/img/image-0${image}.jpg`" alt="Potter Image" class="img-fluid"/>
            </a>
        </div>
    </div>
</template>

<style scoped>

</style>