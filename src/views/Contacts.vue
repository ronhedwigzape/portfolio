<template>
  <v-main class="ms-10 ms-sm-10 ms-md-16 mt-16">
  <v-card
    class="pa-10 elevation-23 "
  >
  <form>
    <h1 class="mb-8">Contact Me</h1>
    <v-text-field
        v-model="state.name"
        :error-messages="v$.name.$errors.map(e => e.$message)"
        :counter="10"
        label="Name"
        required
        @input="v$.name.$touch"
        @blur="v$.name.$touch"
        clearable
    ></v-text-field>

    <v-text-field
        v-model="state.email"
        :error-messages="v$.email.$errors.map(e => e.$message)"
        label="E-mail"
        required
        @input="v$.email.$touch"
        @blur="v$.email.$touch"
        clearable
    ></v-text-field>

    <v-textarea
        v-model="state.select"
        :items="items"
        :error-messages="v$.select.$errors.map(e => e.$message)"
        label="Message"
        required
        @change="v$.select.$touch"
        @blur="v$.select.$touch"
        clearable
    ></v-textarea>

    <v-checkbox
        v-model="state.checkbox"
        :error-messages="v$.checkbox.$errors.map(e => e.$message)"
        label="Are you human?"
        required
        @change="v$.checkbox.$touch"
        @blur="v$.checkbox.$touch"
    ></v-checkbox>

    <v-btn
        class="me-4"
        @click="v$.$validate"
    >
      submit
    </v-btn>
    <v-btn @click="clear">
      clear
    </v-btn>
  </form>
  </v-card>
  </v-main>
</template>

<script>
  import { reactive, ref } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { email, required } from '@vuelidate/validators'

  export default {
    setup () {
      const initialState = {
        name: '',
        email: '',
        select: null,
        checkbox: null,
      }

      const state = reactive({
        ...initialState,
      })

      const items = ref([
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4',
      ])

      const rules = {
        name: { required },
        email: { required, email },
        select: { required },
        items: { required },
        checkbox: { required },
      }

      const v$ = useVuelidate(rules, state)

      function clear () {
        v$.value.$reset()

        for (const [key, value] of Object.entries(initialState)) {
          state[key] = value
        }
      }

      return { state, items, clear, v$ }
    },
  }
</script>

<style scoped>

</style>