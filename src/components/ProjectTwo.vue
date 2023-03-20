<template>
  <v-hover v-slot="{ isHovering, props }">
  <v-card
      v-bind="props"
      :elevation="isHovering ? 24 : 6"
      class="mx-auto"
      max-width="600px"
  >
    <v-img
        :src="`https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/js-chat/js-chat.PNG`"
        :lazy-src="`https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/js-chat/js-chat.PNG`"
        height="200px"
        cover
    ></v-img>

    <v-card-title>
      Vue JS Single Page Chat
    </v-card-title>

    <v-card-subtitle>
      A pure front-end single-page chat app made with Vue 2
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          color="orange-lighten-2"
          variant="text"
		  append-icon="mdi-open-in-new"
		  href="#"
		  target="_blank"
      >
        See Details
      </v-btn>

      <v-spacer></v-spacer>

      <v-btn
          :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'"
          @click="show = !show"
      ></v-btn>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text>
          A pure front-end single-page chat app made with Vue 2
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "ProjectTwo",
  props: ['show']
}
</script>

<style scoped>

</style>