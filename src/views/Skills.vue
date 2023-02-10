<template>
    <v-row class="mt-16">
      <v-col>
        <v-img
            :src="`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg`"
            :lazy-src="`https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg`"
            aspect-ratio="1"
            cover
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
</template>

<script>
export default {
  name: "Skills"
}
</script>

<style scoped>

</style>