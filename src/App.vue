<script setup>

</script>

<template>
  <v-card>
    <v-layout>
      <v-container>
      <v-app-bar title="ronhedwigzape"></v-app-bar>

      <v-sidebar></v-sidebar>

      <router-view />
      </v-container>
    </v-layout>
  </v-card>
</template>

<script>

import SideBar from "./components/SideBar.vue";

export default {
  name: 'App',
  components: {
    'v-sidebar': SideBar
  },
}
</script>
