<script setup>

</script>

<template>
    <v-btn :ripple="false" class="nuxt-button" :to="'/contact'">Get in Touch</v-btn>
</template>

<style scoped>
.nuxt-button {
    border-radius: 8px;
    border: 1px solid transparent;
    font-weight: 500;
    font-family: inherit;
    cursor: pointer;
    transition: border-color 0.25s;
}

.nuxt-button:hover {
    border-color: #00fa95;
}

.nuxt-button:focus,
.nuxt-button:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
}

</style>