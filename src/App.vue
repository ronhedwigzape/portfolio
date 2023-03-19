<script setup>

</script>

<template>
  <v-app>
    <v-app-bar app >
		<v-app-bar-nav-icon color="white" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
		<v-toolbar-title>⚡ ronhedwigzape ⚡</v-toolbar-title>
	</v-app-bar>

		  <v-container @click="drawer = false">
			<router-view />
		  </v-container>
	  <v-responsive>
		  <v-navigation-drawer
			  v-model="drawer"
			  :clipped="$vuetify.display.lgAndUp"
			  temporary
			  rail
			  app
		  >

			  <v-divider></v-divider>

			  <v-list class="list" density="default" nav>
				  <v-list-item :to="'/'" prepend-icon="mdi-home" title="Home" value="home" link></v-list-item>
				  <v-list-item :to="'/projects'" prepend-icon="mdi-code-tags" title="Projects" value="projects" link></v-list-item>
				  <v-list-item :to="'/contacts'" prepend-icon="mdi-account-box" title="Contacts" value="contacts" link></v-list-item>
			  </v-list>
		  </v-navigation-drawer>
	  </v-responsive>


  </v-app>
</template>

<script>
import { onMounted } from 'vue'
import { useDisplay } from 'vuetify'

export default {
  name: 'App',
  data() {
    return {
		drawer: false
    }
  },
  setup () {
    const { mobile } = useDisplay()

    onMounted(() => {
      console.log(mobile.value) // false
    })
  }
}
</script>

<style scoped>
h2 {
  font-size: 1.5rem;
  padding-left: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
</style>