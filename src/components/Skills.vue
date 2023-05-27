<script setup lang="ts">

import {reactive, ref} from "vue";

const imageNumbering = ref([1, 2, 3, 4, 5, 6, 7, 8]);

const skills = reactive([
    {
        title: 'My Spells',
        subtitle: 'Mastery of Wizardry: Unleashing Potent Skills',
        description: 'In this section, you\'ll witness the culmination of my magical abilities in the realm of technology. From web development to data analysis, each spell in my arsenal has been meticulously crafted for innovation and enchantment. Prepare to be captivated as we push the boundaries of what\'s possible in the realm of Computer Science and embark on an extraordinary journey of wizardry.'
    }
])
</script>

<template>
    <div class="section-wrap bg-white">
        <section id="spells" class="row section">
            <div class="col-12 section-pad">
                <div class="flex-item-left">
                    <div v-for="skill in skills" class="w-80">
                        <h2 class="display-1 color-primary mb-4 harry-potter-font">{{ skill.title }}</h2>
                        <h4 class="display-5 subtitle harry-potter-font mb-3">{{ skill.subtitle }}</h4>
                        <p class="mb-5">{{ skill.description }}</p>
                    </div>
                    <div class="row images">
                        <div v-for="image in imageNumbering"
                             class="col-xl-4 col-lg-6 col-md-6 col-12 img-wrap d-flex justify-content-xl-start justify-content-lg-start justify-content-md-start justify-content-sm-center justify-content-center">
                            <a href="#">
                                <img :src="`/src/assets/img/image-0${image}.jpg`" alt="Potter Image" class="img-fluid"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.section-pad {
    padding-left: 50px;
    padding-right: 50px;
    overflow-x: hidden;
}

.images {
    max-width: 1040px;
}

.w-80 {
    max-width: 80%;
}

.flex-item-left {
    align-self: flex-start;
}

.img-wrap {
    padding: 10px;
}

.img-wrap a {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 15px;
    width: 240px;
    height: 120px;
}

</style>