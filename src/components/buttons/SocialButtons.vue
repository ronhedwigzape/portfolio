<script setup>
import {useProfileStore} from "../../stores/store-profile";
import {ref} from "vue";

const profile = useProfileStore();
const toggle = ref(null);
</script>

<template>
    <div class="d-flex align-center flex-column pa-6">
        <v-btn-toggle
            v-model="toggle"
            :mandatory="false"
            :selected-class="undefined"
            variant="outlined"
        >
            <v-btn :href="profile.social.github" target="_blank" icon="mdi-github"/>
            <v-btn :href="profile.social.facebook" target="_blank" icon="mdi-facebook"/>
            <v-btn :href="profile.social.twitter" target="_blank" icon="mdi-twitter"/>
            <v-btn :href="profile.social.linkedin" target="_blank" icon="mdi-linkedin"/>
        </v-btn-toggle>
    </div>
</template>

<style scoped>

</style>