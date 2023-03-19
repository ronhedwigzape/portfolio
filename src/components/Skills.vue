<template>
  <v-container align="center">
    <h3 class="mt-14">My Skills and Experties:</h3>
    <v-row class="mt-4" align="center">
      <v-col xs="12" sm="12" md="12" lg="8">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg`"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="8">
        <v-img
            :src="`https://bestofjs.org/logos/vuetify.svg`"
            :lazy-src="`https://bestofjs.org/logos/vuetify.svg`"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="8">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg`"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="8">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg`"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="8">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg`"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="8">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg`"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="8">
        <v-img
            :src="`https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg`"
            :lazy-src="`https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg`"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
      <v-col xs="12" sm="12" md="12" lg="5">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg`"
        >
          <template v-slot:placeholder>
            <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
            >
              <v-progress-circular
                  indeterminate
                  color="grey-lighten-5"
              ></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style scoped>

</style>