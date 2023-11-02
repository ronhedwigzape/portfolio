<script setup>

import {ref} from "vue";

let snackbar = ref(false);

defineProps({
  contact: {
    type: Object
  }
})

const handleSubmit = () => {
  /***********************************************
   * TODO: make code for submitting contact to mail
   */

  snackbar.value = true;
};

</script>

<template>
  <v-card class="mt-lg-3" variant="tonal">
    <v-card-title class="my-3 my-md-6 my-lg-6 text-h5 text-sm-h5 text-md-h4 text-lg-h4 px-6">
      {{ contact.content.card_title }}
      <v-icon>mdi-owl</v-icon>
    </v-card-title>
    <v-card-text align="center" class="px-6">
      <v-row>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-text-field
              variant="underlined"
              label="First Name"
              hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12" sm="6" md="6" lg="6">
          <v-text-field
              variant="underlined"
              label="Last Name"
              hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
              variant="underlined"
              label="Email"
              hide-details="auto"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-textarea
              variant="underlined"
              label="Message"
          />
        </v-col>
      </v-row>
    </v-card-text>
    <v-card-actions class="px-6 pb-4">
      <v-btn class="nuxt-button-sub" @click="handleSubmit" block>Submit</v-btn>
    </v-card-actions>
  </v-card>
  <v-snackbar v-model="snackbar" timeout="3000">
    <v-icon>mdi-book-cancel</v-icon> The owl is currently not able to fly... 😥
  </v-snackbar>
</template>

