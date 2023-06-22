<script setup>
import {useProfileStore} from "@/stores/store-profile";
import {reactive} from "vue";

const profile = useProfileStore();
const projectDialog = reactive({});
profile.fetchRepositories();
</script>

<template>
    <v-row class="d-flex justify-center align-center">
        <v-col cols="12" sm="6" md="6" lg="6" v-for="repo in profile.repositories" :key="repo.id">
            <v-card class="card pa-7">
                <v-row class="content d-flex flex-column">
                    <v-col>
                        <div class="heading">
                            {{ repo.name }}
                            <v-chip
                                class="float-end text-uppercase"
                                size="small"
                            >
                                {{ repo.visibility }}
                            </v-chip>
                        </div>
                        <p class="pt-4">{{ repo.description }}</p>
                    </v-col>
                    <v-row class="mx-auto py-5">
                        <v-col class="px-0" style="width: 120px;">
                            <span class="text-subtitle-2">
                                <v-icon
                                    :color="
                                    repo.language === 'Vue' ? 'green-accent-3' :
                                    repo.language === 'PHP' ? 'indigo-darken-2' :
                                    ''"
                                >mdi-circle</v-icon>
                                {{ repo.language }}
                            </span>
                        </v-col>
                        <v-col class="px-0" style="width: 120px;">
                            <span class="text-subtitle-2"><v-icon>mdi-star</v-icon> Stars: {{ repo.stars }}</span>
                        </v-col>
                        <v-col class="px-0" style="width: 120px;">
                            <span class="text-subtitle-2"><v-icon>mdi-source-fork</v-icon> Forks: {{ repo.forks }}</span>
                        </v-col>
                        <v-col class="px-0" style="width: 120px;">
                            <span class="text-subtitle-2"><v-icon>mdi-eye</v-icon> Watchers: {{ repo.watchers }}</span>
                        </v-col>
                    </v-row>
                    <v-col class="d-flex justify-space-evenly">
                        <v-btn
                            :href="repo.url"
                            target="_blank"
                            variant="tonal"
                            append-icon="mdi-open-in-new"
                        >
                            View on Github
                        </v-btn>
                        <v-btn color="primary">
                            View Project
                            <v-dialog
                                v-model="projectDialog[repo.id]"
                                activator="parent"
                                width="auto"
                            >
                                <v-card>
                                    <v-card-text>
                                        {{ repo.name }}
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-btn
                                            color="primary"
                                            block @click="projectDialog[repo.id] = false"
                                        >Close Dialog</v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card>
        </v-col>
    </v-row>
</template>

<style scoped>
.card {
    height: 350px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    border: 2px solid #313131;
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content {
    transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.content .heading {
    font-weight: 700;
    font-size: 32px;
}

.card:hover {
    box-shadow: 0 0 20px rgba(9, 241, 40, 0.8);
    border-color: rgb(0, 250, 149);
}

</style>