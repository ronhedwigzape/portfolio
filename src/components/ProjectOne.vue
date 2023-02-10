<template>
  <v-hover v-slot="{ isHovering, props }">
  <v-card
      v-bind="props"
      :elevation="isHovering ? 24 : 6"
      class="mx-auto"
      max-width="344px"
  >
    <v-img
        src=""
        height="200px"
        cover
    ></v-img>

    <v-card-title>
      ACLC Grading Recorder
    </v-card-title>

    <v-card-subtitle>
      A system to simulate final average of students in ACLC in their respective course.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          color="orange-lighten-2"
          variant="text"
      >
        See Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-hover>
</template>

<script>
import aclcGradingSystem from '../assets/img/aclc-grading-system/aclc-grading-recorder.PNG'

export default {
  name: "ProjectOne",
  props: ['show'],
  data() {
    return {

    }
  }
}
</script>

<style scoped>

</style>