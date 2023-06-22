<script setup>

import {useProfileStore} from "@/stores/store-profile";

const profile = useProfileStore();

profile.fetchRepositories();
</script>

<template>
    <v-row class="d-flex justify-center align-center">
        <v-col cols="12" sm="6" md="6" lg="4" v-for="repo in profile.repositories">
            <v-card class="card pa-7">
                <div class="content d-flex flex-column align-start">
                    <p class="heading">{{ repo.name }}</p>
                    <p class="para">{{ repo.description }}</p>
                    <v-row>

                    </v-row>
                </div>
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped>
.card {
    height: 280px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    border: 2px solid #313131;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content {
    gap: 20px;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content .heading {
    font-weight: 700;
    font-size: 32px;
}

.content .para {
    line-height: 1.5;
}

.card:hover {
    box-shadow: 0 0 20px rgba(9, 241, 40, 0.8);
    border-color: rgb(0, 250, 149);
}

</style>