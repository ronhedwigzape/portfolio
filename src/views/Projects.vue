<template>
  <v-row class="ms-10 ms-sm-10 ms-md-16 mt-16">
    <v-col cols="4">
      <v-project-one v-bind:show="show" />
    </v-col>

    <v-col cols="4">
      <v-project-two v-bind:show="show" />
    </v-col>

    <v-col cols="4">
      <v-project-three v-bind:show="show" />
    </v-col>
  </v-row>
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