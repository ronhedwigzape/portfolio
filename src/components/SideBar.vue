<template>
  <v-navigation-drawer
      expand-on-hover
      rail
  >
    <v-list>
      <v-list-item
          prepend-avatar="https://avatars.githubusercontent.com/u/84697205?s=400&u=1b9c8092d282c588f8c2e78eae2e8091fcc6a7b0&v=4"
          title="Ron Hedwig"
          subtitle="ronhedwigaquinozape@gmail.com"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item :to="'/'" prepend-icon="mdi-home" title="Home" value="home" link></v-list-item>
      <v-list-item :to="'/projects'" prepend-icon="mdi-code-tags" title="Projects" value="projects" link></v-list-item>
      <v-list-item :to="'/contacts'" prepend-icon="mdi-account-box" title="Contacts" value="contacts" link></v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
export default {
  name: "SideBar"
}
</script>

<style scoped>

</style>