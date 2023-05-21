<script setup lang="ts">

import {ref} from "vue";

const navLinks = ref(['intro', 'about', 'crafts', 'spells', 'owlme']);
const titles = ref(['Intro', 'About', 'Crafts', 'Spells', 'Owl Me']);
</script>

<template>
    <ul id="MainNav" class="nav flex-column text-uppercase main-nav">
        <li v-for="(navLink, navLinkIndex) in navLinks" class="nav-item">
            <a :href="`#${navLink}`" class="nav-link active">
                <span class="d-inline-block pe-3">{{ titles[navLinkIndex] }}</span>
                <i class="d-inline-block ps-2 fa-solid fa-feather-pointed white-rect"></i>
            </a>
        </li>
    </ul>
</template>

<style scoped>

</style>