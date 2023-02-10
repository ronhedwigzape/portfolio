<template>
  <v-container class="ms-16 mt-16">
    <h1>Skills</h1>
    <v-row class="mt-16">
      <v-col cols="1">
        <v-img
            :src="`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg`"
            :lazy-src="`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg`"
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