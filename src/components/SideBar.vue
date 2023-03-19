<template>
  <v-navigation-drawer
      rail
  >

    <v-divider></v-divider>

    <v-list class="list" density="default" nav>
      <v-list-item :to="'/'" prepend-icon="mdi-home" title="Home" value="home" link></v-list-item>
      <v-list-item :to="'/projects'" prepend-icon="mdi-code-tags" title="Projects" value="projects" link></v-list-item>
      <v-list-item :to="'/contacts'" prepend-icon="mdi-account-box" title="Contacts" value="contacts" link></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
    }
  }
}
</script>

<style scoped>

</style>