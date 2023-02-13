<script setup>

</script>

<template>
  <v-app>
    <v-app-bar title=""><h2>⚡ ronhedwigzape ⚡</h2></v-app-bar>
      <v-container>
        <router-view />
      </v-container>
    <v-sidebar></v-sidebar>
  </v-app>
</template>

<script>
import { onMounted } from 'vue'
import { useDisplay } from 'vuetify'
import SideBar from "./components/SideBar.vue";

export default {
  name: 'App',
  components: {
    'v-sidebar': SideBar
  },
  data() {
    return {

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
  font-size: 2rem;
  padding-left: 2rem;
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
</style>