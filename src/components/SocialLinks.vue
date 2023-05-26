<script setup lang="ts">

import {ref} from "vue";

const socialMedias = ref(['facebook', 'twitter', 'github', 'linkedin'])

const userName = ref('ronhedwigzape');

</script>

<template>
    <div class="pt-5">
        <h1 class="pt-2 ps-3 ps-md-4 ps-lg-5 display-4 harry-potter-font text-white username float-start">
            {{ userName }}
        </h1>
        <ul class="nav social-links pe-3 pe-md-4 pe-lg-5 float-end">
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

    </div>
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

.social-links {
    margin-bottom: 27px;
}

.social-link {
    width: 40px;
    height: 40px;
    margin: 8px;
    border-radius: 50%;
    padding: 0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>