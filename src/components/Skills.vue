<template>
  <v-container class="ms-16 mt-10">
    <h3 class="mt-14">My Skills and Experties:</h3>
    <v-row class="mt-4">
      <v-col cols="1">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/vuejs/vuejs-original-wordmark.svg`"
            aspect-ratio="1"
            cover
            class="d-flex child-flex"
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
      <v-col cols="1">
        <v-img
            :src="`https://bestofjs.org/logos/vuetify.svg`"
            :lazy-src="`https://bestofjs.org/logos/vuetify.svg`"
            aspect-ratio="0"
            cover
            class="d-flex child-flex"
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
      <v-col cols="1">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/php/php-original.svg`"
            aspect-ratio="0"
            cover
            class="d-flex child-flex"
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
      <v-col cols="1">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg`"
            aspect-ratio="0"
            cover
            class="d-flex child-flex"
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
      <v-col cols="1">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg`"
            aspect-ratio="0"
            cover
            class="d-flex child-flex"
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
      <v-col cols="1">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg`"
            aspect-ratio="0"
            cover
            class="d-flex child-flex"
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
      <v-col cols="1">
        <v-img
            :src="`https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg`"
            :lazy-src="`https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg`"
            aspect-ratio="0"
            cover
            class="d-flex child-flex"
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
      <v-col cols="1">
        <v-img
            :src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg`"
            :lazy-src="`https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg`"
            aspect-ratio="0"
            cover
            class="d-flex child-flex"
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