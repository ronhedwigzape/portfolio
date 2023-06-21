<script setup>

</script>

<template>
    <v-btn
        class="nuxt-button mt-4 mt-sm-8"
        prepend-icon="mdi-open-in-new"
        :ripple="false"
        :height="$vuetify.display.lgAndUp ? 60 : 50"
        :width="$vuetify.display.lgAndUp ? 280 : 250"
    >
        Explore my Projects
    </v-btn>
</template>

<style scoped>
.nuxt-button {
    border: 3px solid #01dc83;
    cursor: pointer;
    border-radius: 10px;
    transition: all 0.4s cubic-bezier(0.23, 1, 0.320, 1);
}

.nuxt-button:hover {
    border-color: #00fa95;
    box-shadow: 0 0 20px rgba(1, 220, 131, 0.8);
    background-color: black !important;
}

.nuxt-button:active {
    box-shadow: 0 0 10px rgba(1, 220, 131, 0.4);
}
</style>