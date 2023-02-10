<template>
  <v-hover v-slot="{ isHovering, props }">
  <v-card
      v-bind="props"
      :elevation="isHovering ? 24 : 6"
      class="mx-auto"
      max-width="344"
  >
    <v-img
        :src="`https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/st-lawrence-online/st-lawrence-online-ordering.PNG`"
        :lazy-src="`https://raw.githubusercontent.com/ronhedwigzape/portfolio/master/src/assets/img/st-lawrence-online/st-lawrence-online-ordering.PNG`"
        height="200px"
        cover
    ></v-img>

    <v-card-title>
      St. Lawrence Online Product Ordering
    </v-card-title>

    <v-card-subtitle>
      The St. Lawrence Funeral Homes Online Reservation makes booking faster, hassle-free, and cares for customer satisfaction that makes customer comfortable. The Center can render service right away after the death of your loved ones.
    </v-card-subtitle>

    <v-card-actions>
      <v-btn
          color="orange-lighten-2"
          variant="text"
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
          The St. Lawrence Funeral Homes Online Reservation makes booking faster, hassle-free, and cares for customer satisfaction that makes customer comfortable. The Center can render service right away after the death of your loved ones.</v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
  </v-hover>
</template>

<script>
export default {
  name: "ProjectThree",
  props: ['show']
}
</script>

<style scoped>

</style>