<script setup lang="ts">

import SocialLinks from "./SocialLinks.vue";
</script>

<template>
    <div class="parallax-window">
        <SocialLinks />
        <div class="section-wrap">
            <section id="intro" class="section d-flex justify-content-center align-items-start">
                <div class="bg-white-transparent intro">
                    <h1 class="display-1 mb-5 color-primary harry-potter-font">Lorem ipsum.</h1>
                    <p class="text-black">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum, veritatis?
                    </p>
                    <p class="mb-0 text-black">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aspernatur, atque commodi nemo nihil numquam?
                    </p>
                </div>
            </section>
        </div>
    </div>
</template>

<style scoped>

.parallax-window {
    min-height: 662px;
    background: transparent url("/src/assets/img/hogwarts-night-castle-2.png") no-repeat;
    background-size: cover;
}

.intro {
    max-width: 500px;
    width: 100%;
    padding: 55px;
    margin-top: 0;
    margin-right: 0;
    margin-left: 0;
}

#intro {
    min-height: 100vh;
    max-width: none;
}

.bg-white-transparent {
    background: rgba(255,255,255,0.25);
    box-shadow: 20px 20px 40px -6px rgba(0,0,0,0.2);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid #000;;
}

.text-black {
    color: black;
}


</style>