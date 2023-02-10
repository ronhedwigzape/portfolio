<template>
  <v-navigation-drawer
      expand-on-hover
      rail
  >
<!--    <v-list>-->
<!--      <v-list-item-->
<!--          prepend-avatar="https://raw.githubusercontent.com/danielcranney/readme-generator/main/public/icons/skills/vuejs-colored.svg"-->
<!--          title="Ron Hedwig"-->
<!--          subtitle="ronhedwigaquinozape@gmail.com"-->
<!--      ></v-list-item>-->
<!--    </v-list>-->

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