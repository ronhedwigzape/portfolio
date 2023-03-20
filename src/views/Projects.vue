<template>
  <v-row class="mt-16" align="center" justify="center">
	  <v-col xs="12" sm="12" md="12" lg="12" align="center">
		  <h1>Main Projects</h1>
		  <v-divider />
	  </v-col>

	  <v-col xs="9" sm="7" md="5" lg="4" align="center">
		  <v-project-four v-bind:show="show" />
	  </v-col>

	  <v-col xs="12" sm="12" md="12" lg="12" align="center">
		  <h1>Mini Projects</h1>
		  <v-divider />
	  </v-col>

	  <v-col xs="9" sm="7" md="5" lg="4" align="center">
		  <v-project-one v-bind:show="show" />
	  </v-col>

	  <v-col xs="9" sm="7" md="5" lg="4" align="center">
		  <v-project-two v-bind:show="show" />
	  </v-col>

	  <v-col xs="9" sm="7" md="5" lg="4" align="center">
		  <v-project-three v-bind:show="show" />
	  </v-col>
  </v-row>
</template>

<script>
import ProjectOne from "../components/ProjectOne.vue";
import ProjectTwo from "../components/ProjectTwo.vue";
import ProjectThree from "../components/ProjectThree.vue";
import ProjectFour from "../components/ProjectFour.vue";

export default {
  name: "Projects.vue",
  components: {
    'v-project-one': ProjectOne,
    'v-project-two': ProjectTwo,
    'v-project-three': ProjectThree,
	  'v-project-four': ProjectFour,
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