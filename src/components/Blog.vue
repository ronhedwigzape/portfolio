<script setup lang="ts">

import {reactive} from "vue";

const blogs = reactive([
    {
        title: 'Wizarding World Chronicle: Recent Enchantments',
        description: ''
    }
]);

</script>

<template>
    <div class="section-wrap bg-white">
        <section id="blog" class="row section">
            <div v-for="blog in blogs" class="col-xl-6">
                <h2 class="display-1 color-primary mb-5 harry-potter-font harry-potter-font">{{ blog.title }}</h2>
                <p>{{ blog.description }}</p>
            </div>
        </section>
    </div>
</template>

<style scoped>

</style>