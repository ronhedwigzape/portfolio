<template>
  <v-container class="ms-10 mt-16">
    <v-row>

      <v-col cols="4">
        <v-project-one v-bind:show="show"></v-project-one>
      </v-col>

      <v-col cols="4">
        <v-project-two v-bind:show="show"></v-project-two>
      </v-col>

      <v-col cols="4">
        <v-project-three v-bind:show="show"></v-project-three>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
import ProjectOne from "../components/ProjectOne.vue";
import ProjectTwo from "../components/ProjectTwo.vue";
import ProjectThree from "../components/ProjectThree.vue";

export default {
  name: "Projects.vue",
  components: {
    'v-project-one': ProjectOne,
    'v-project-two': ProjectTwo,
    'v-project-three': ProjectThree
  },
  data() {
    return {
      show: false,
    }
  }
}
</script>

<style scoped>

</style>