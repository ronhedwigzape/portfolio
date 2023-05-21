<script setup lang="ts">

import NavbarToggler from "./NavbarToggler.vue";
import NavigationLinks from "./NavigationLinks.vue";
import {ref} from "vue";

const username = ref('ronhedwigzape')
</script>

<template>
    <nav id="sidebar" class="bg-black-transparent sidebar">

        <NavbarToggler />

        <div>
            <div class="brand-box">
                <h1 class="harry-potter-font brand">{{ username }}</h1>
            </div>

            <NavigationLinks />

            <footer class="text-center text-white small">
                <p class="pb-2 display-6 harry-potter-font">Harry Potter</p>
                <p class="pb-0">Inspired From:
                    <a href="https://www.hogwartslegacy.com/en-us" target="_blank" class="footer-link">Harry Potter Game</a>
                </p>
            </footer>
        </div>
    </nav>
</template>

<style scoped>

</style>