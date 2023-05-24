<script setup lang="ts">

import {reactive} from "vue";

const aboutProfile = reactive([
    {
        title: 'About Me',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, repudiandae!',
        description2: 'Sed at orci non metus tristique suscipit vitae in nibh. Sedrutrum odio ac est hendrerit, at vestibulum felis condimentum.'
    },
    {
        title: 'Education',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, repudiandae!',
        description2: 'Sed at orci non metus tristique suscipit vitae in nibh. Sedrutrum odio ac est hendrerit, at vestibulum felis condimentum.'
    }
]);

</script>

<template>
    <div class="section-wrap bg-white">
        <section id="about" class="row section">
            <div v-for="about in aboutProfile" class="col-xl-6">
                <div class="section-half">
                    <h2 class="display-1 color-primary mb-5 harry-potter-font harry-potter-font">{{ about.title }}</h2>
                    <p class="mb-5">{{ about.description }}</p>
                    <p>{{ about.description2 }}</p>
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