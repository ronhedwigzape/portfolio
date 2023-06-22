<script setup>

import {useContactStore} from "@/stores/store-contact";

const contact = useContactStore();
</script>

<template>
    <v-btn :ripple="false" class="nuxt-button-sub" :to="`/${contact.slug}`">Get in Touch</v-btn>
</template>

<style scoped>

</style>