<script setup>
import {useProfileStore} from "@/stores/store-profile";
import {computed} from "vue";
import {useUiStore} from "@/stores/store-ui";

const profile = useProfileStore();
const ui = useUiStore();
profile.fetchRepositories();

const message = computed(() => {
  return profile.getMessage;
});

</script>

<template>
  <v-row v-if="message !== null">
    <v-col class="text-h5 text-md-h4 text-lg-h4 potter">{{ message }}</v-col>
    <v-progress-linear
        indeterminate
        color="green-accent-3"
    ></v-progress-linear>
  </v-row>
  <v-row v-if="profile.repositories" class="d-flex justify-center align-center my-6">
    <v-col cols="12" sm="6" md="6" lg="6" v-for="repo in profile.repositories" :key="repo.id">
      <v-card
          class="card pa-7 d-flex align-center"
          :class="{
                    'card-LgAndUp': $vuetify.display.lgAndUp,
                    'card-mdAndDown': $vuetify.display.mdAndDown,
                    'card-dark': ui.getTheme === 'dark'
                }"
      >
        <v-row class="content d-flex flex-column justify-center">
          <v-col>
            <div
                :class="{
                                'position-relative': $vuetify.display.mdAndDown
                            }">
              <v-chip
                  class="float-end text-uppercase"
                  :class="{
                                    'position-absolute': $vuetify.display.mdAndDown
                                }"
                  :style="
                                    `top: ${$vuetify.display.smAndDown ? '0%' : '10%'};
                                   right: ${$vuetify.display.smAndDown ? '0%' : '5%'};`
                                "
                  size="small"
              >
                {{ repo.visibility }}
              </v-chip>
              <p class="heading pt-6 pt-lg-0">{{ repo.name }}</p>
            </div>
            <p class="pt-6">{{ repo.description }}</p>
          </v-col>
          <v-row
              class=" mx-auto mx-lg-auto py-6"
              :class="{
                            'd-flex flex-column': $vuetify.display.mdAndDown
                        }"
          >
            <v-col class="px-0" style="width: 120px;">
                            <span
                                :class="{
                                    'text-caption': $vuetify.display.mdAndDown,
                                    'text-subtitle-2': $vuetify.display.lgAndUp
                                }">
                                <v-icon
                                    class="pb-1"
                                    :color="
                                    repo.language === 'Vue' ? 'green-accent-3' :
                                    repo.language === 'PHP' ? 'indigo-darken-2' :
                                    repo.language === 'JavaScript' ? 'amber' :
                                    ''"
                                >mdi-circle</v-icon>
                                {{ repo.language }}
                            </span>
            </v-col>
            <v-col class="px-0" style="width: 120px;">
                            <span
                                :class="{
                                    'text-caption': $vuetify.display.mdAndDown,
                                    'text-subtitle-2': $vuetify.display.lgAndUp
                                }"
                            ><v-icon class="pb-1">mdi-star</v-icon> Stars: {{ repo.stars }}</span>
            </v-col>
            <v-col class="px-0" style="width: 120px;">
                            <span
                                :class="{
                                    'text-caption': $vuetify.display.mdAndDown,
                                    'text-subtitle-2': $vuetify.display.lgAndUp
                                }"
                            ><v-icon class="pb-1">mdi-source-fork</v-icon> Forks: {{ repo.forks }}</span>
            </v-col>
            <v-col class="px-0" style="width: 120px;">
                            <span
                                :class="{
                                    'text-caption': $vuetify.display.mdAndDown,
                                    'text-subtitle-2': $vuetify.display.lgAndUp
                                }"><v-icon class="pb-1">mdi-eye</v-icon> Watchers: {{ repo.watchers }}</span>
            </v-col>
          </v-row>
          <v-col
              class="d-flex justify-lg-space-evenly"
              :class="{
                            'flex-column': $vuetify.display.mdAndDown
                        }"
          >
            <v-col class="d-flex justify-center">
              <v-btn
                  :href="repo.url"
                  target="_blank"
                  variant="outlined"
                  append-icon="mdi-open-in-new"
              >
                View on Github
              </v-btn>
            </v-col>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.card {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 2px solid #313131;
  transition: all 0.5s cubic-bezier(0.23, 1, 0.320, 1);
}

.card-mdAndDown {
  height: auto;
}

.card-LgAndUp {
  height: 350px;
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

.card-dark:hover {
  background-color: #171717 !important;
}

</style>