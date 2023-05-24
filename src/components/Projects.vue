<script setup lang="ts">
import {ref} from "vue";

const numbers = ref([1, 2, 3, 4, 5])

</script>

<template>
    <div class="section-wrap bg-white">
        <section id="crafts" class="row section">
            <div class="col-12">
                <div class="w-100">
                    <div class="box-pad">
                        <div class="project-wrap">
                            <h2 class="display-1 color-primary mb-4 ml-2 harry-potter-font">My Crafts</h2>
                            <div v-for="(number, numberIndex) in numbers" class="project-item">
                                <figure class="effects">
                                    <img :src="`/src/assets/img/gallery/0${number}.jpg`" alt="My Project Image"
                                         class="img-fluid">
                                    <figcaption>
                                        <h2>Project {{ number }}</h2>
                                        <p>My Project {{ number }} sample. </p>
                                        <a :href="`/src/assets/img/gallery/large/0${number}.jpg`"
                                           target="_blank"
                                        >View more
                                        </a>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.project-item {
    padding-left: 10px;
    padding-right: 10px;
}

/*
  Gallery Item Hover Effect
  https://tympanus.net/codrops/2014/06/19/ideas-for-subtle-hover-effects/
*/
.project-item figure {
    position: relative;
    float: left;
    overflow: hidden;
    margin-bottom: 0;
    text-align: center;
    cursor: pointer;
}

.project-item figure img {
    position: relative;
    display: block;
    min-height: 100%;
    max-width: 100%;
    opacity: 0.8;
}

.project-item figure figcaption {
    padding: 1em;
    color: #fff;
    text-transform: uppercase;
    font-size: 1.25em;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.project-item figure figcaption::before,
.project-item figure figcaption::after {
    pointer-events: none;
}

.project-item figure figcaption,
.project-item figure figcaption > a {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.project-item figure figcaption > a {
    z-index: 1000;
    text-indent: 200%;
    white-space: nowrap;
    font-size: 0;
    opacity: 0;
}

.project-item figure h2 {
    word-spacing: -0.15em;
    font-weight: 300;
}

.project-item figure h2 span {
    font-weight: 800;
}

.project-item figure h2,
.project-item figure p {
    margin: 0;
}

.project-item figure p {
    letter-spacing: 1px;
    font-size: 68.5%;
}

/* Effects */
figure.effects {
    background: #000000;
}

figure.effects img {
    opacity: 1;
    -webkit-transition: opacity 0.35s;
    transition: opacity 0.35s;
}

figure.effects:hover img {
    opacity: 0.4;
}

figure.effects figcaption::before,
figure.effects figcaption::after {
    position: absolute;
    top: 15px;
    right: 15px;
    bottom: 15px;
    left: 15px;
    content: "";
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
}

figure.effects figcaption::before {
    border-top: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: scale(0, 1);
    transform: scale(0, 1);
}

figure.effects figcaption::after {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    -webkit-transform: scale(1, 0);
    transform: scale(1, 0);
}

figure.effects h2 {
    font-size: 1.5rem;
    margin-bottom: 30px;
    opacity: 0;
    -webkit-transition: -webkit-transform 0.35s;
    transition: transform 0.35s;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
}

figure.effects p {
    width: 100%;
    padding: 10px;
    opacity: 0;
    -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
    transition: opacity 0.35s, transform 0.35s;
    -webkit-transform: translate3d(0, 20px, 0);
    transform: translate3d(0, 20px, 0);
}

figure.effects:hover figcaption::before,
figure.effects:hover figcaption::after {
    opacity: 1;
    -webkit-transform: scale(1);
    transform: scale(1);
}

figure.effects:hover h2,
figure.effects:hover p {
    opacity: 1;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
}

.project-wrap {
    max-width: 1040px;
    margin-left: auto;
    margin-right: auto;
}

</style>