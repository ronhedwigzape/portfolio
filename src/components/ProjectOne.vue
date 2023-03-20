<template>
  <v-hover v-slot="{ isHovering, props }">
  <v-card
      v-bind="props"
      :elevation="isHovering ? 24 : 6"
      class="mx-auto"
	  max-width="600px"
  >
    <v-img
        :src="`https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/aclc-grading-system/aclc-grading-recorder.PNG`"
        :lazy-src="`https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/aclc-grading-system/aclc-grading-recorder.PNG`"
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
		  append-icon="mdi-open-in-new"
		  href="#"
		  target="_blank"
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
          ACLC Grading System computes student's grade (50% Face-to-face and 50% Online) from their respective course.
          Only (1) one course subject can do to compute grades. This website aims to help students estimate their
          actual grade and this is just a simulator to make them aware what will their grade be like. Below is a tabular
          data consists of student's record that had been computed 50% F-F and 50% Online of their grades.
         </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-hover>
</template>

<script>

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