<script setup>

</script>

<template>
    <v-btn class="button" :ripple="false" stacked :to="'/'">
        Home
    </v-btn>
    <v-btn class="button" :ripple="false" stacked :to="'/projects'">
        Projects
    </v-btn>
    <v-btn class="button" :ripple="false" stacked :to="'/contact'">
        Contact
    </v-btn>
    <v-btn stacked :ripple="false">
        <v-switch
            hide-details
            inset
        ></v-switch>
    </v-btn>
</template>

<style scoped>
.button {
    transition: 0.3s;
}

.button:hover {
    color: #00fa95;
}
</style>