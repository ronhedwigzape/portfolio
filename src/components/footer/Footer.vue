<script setup>

import {useStore} from "../../stores";

const store = useStore()
</script>

<template>
    <v-footer>
        <v-row justify="center" no-gutters>
            <v-col class="text-center my-4" cols="12">
                {{ new Date().getFullYear() }} — <strong>{{ store.app.brand }}</strong>
            </v-col>
        </v-row>
    </v-footer>
</template>

<style scoped>

</style>