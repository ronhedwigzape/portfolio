<script setup>

</script>

<template>
  <v-app>
    <v-app-bar title="⚡ ronhedwigzape ⚡"></v-app-bar>
    <v-card>
      <v-container>
        <router-view />
      </v-container>
    </v-card>
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
