<script setup lang="ts">

import {ref} from "vue";

const socialMedias = ref(['facebook', 'twitter', 'github', 'linkedin'])

const userName = ref('ronhedwigzape');

</script>

<template>
    <ul class="nav flex-row social-links d-flex justify-content-end pt-5 pe-5">
        <li v-for="socialMedia in socialMedias" class="nav-item">
            <a :href="socialMedia === 'linkedin' ? `https://www.${socialMedia}.com/in/ron-hedwig-zape-b49062269/` : `https://${socialMedia}.com/${userName}`"
               class="nav-link social-link"
               :id="socialMedia"
               target="_blank"
            >
                <i :class="`fa-brands fa-${socialMedia}`"></i>
            </a>
        </li>
    </ul>
</template>

<style scoped>
#facebook:hover,
#facebook:focus {
    color: rgba(24, 119, 242, 1) !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
}

#twitter:hover,
#twitter:focus {
    color: rgba(29, 155, 240, 1) !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
}

#github:hover,
#github:focus {
    color: rgba(0, 0, 0, 1) !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
}

#linkedin:hover,
#linkedin:focus {
    color: rgba(0, 119, 183, 1) !important;
    background-color: rgba(255, 255, 255, 0.1) !important;
}

</style>