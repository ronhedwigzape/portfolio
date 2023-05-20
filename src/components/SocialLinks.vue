<script setup lang="ts">

import {ref} from "vue";

const socialMedias = ref(['facebook', 'twitter', 'github', 'linkedin'])

const userName = ref('ronhedwigzape');

</script>

<template>
    <ul class="nav flex-row social-links d-flex justify-content-center align-items-center mt-3">
        <li v-for="socialMedia in socialMedias" class="nav-item">
<!--            TODO: Linkedin link is not correct-->
            <a :href="`https://${socialMedia}.com/${userName}`" class="nav-link social-link">
                <i :class="`fa-brands fa-${socialMedia}`"></i>
            </a>
        </li>
    </ul>
</template>

<style scoped>

</style>