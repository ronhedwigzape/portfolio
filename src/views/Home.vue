<template>
  <v-row class="mt-16" align-content="center" align="center">
    <v-col xs="12" sm="12" md="12" lg="3" class="mt-10">
      <v-img
        src="https://avatars.githubusercontent.com/u/84697205?v=4"
        class="rounded-circle elevation-23 mt-lg-16 mx-auto align-content-lg-center my-auto"
        :height="250"
        :width="250"
      >
      </v-img>
    </v-col>
    <v-col xs="12" sm="12" md="12" lg="8" class="mx-auto mx-sm-auto mt-10 mt-sm-10 mt-md-10 ms-lg-10" align="center">
      <h1 class="">Hello World! I am Ron Hedwig</h1>
      <v-divider class="my-8"></v-divider>
      <p class="mt-8" style="text-indent: 7%;">
        I'm thrilled to have the opportunity to
        showcase my work and passion for coding. As a self-taught developer, I
        have always been devoted to pursuing and mastering the art of coding, driven
        by my unwavering passion and motivation to succeed. Whether it's building websites,
        creating innovative applications, or solving complex programming challenges,
        coding is my true calling. Through this website, I aim to give you a glimpse
        into my journey and the projects that have helped shape me into the developer
        I am today. So, sit back, relax, and get ready to discover the exciting world of
        coding through my eyes!
      </p>
      <v-btn-toggle class="mt-5 mx-3">
        <v-btn
            prepend-icon="mdi-github"
            append-icon="mdi-open-in-new"
            href="https://github.com/ronhedwigzape"
            target="_blank"
            elevation="23"
        >
          Github
        </v-btn>
      </v-btn-toggle>
      <v-btn-toggle class="mt-5 mx-3">
        <v-btn
            prepend-icon="mdi-twitter"
            append-icon="mdi-open-in-new"
            href="https://twitter.com/ronhedwigzape"
            target="_blank"
            elevation="23"
        >
          Twitter
        </v-btn>
      </v-btn-toggle>
      <v-btn-toggle class="mt-5 mx-3">
        <v-btn
            prepend-icon="mdi-facebook"
            append-icon="mdi-open-in-new"
            href="https://web.facebook.com/ronhedwigzape"
            target="_blank"
            elevation="23"
        >
          Facebook
        </v-btn>
      </v-btn-toggle>
    </v-col>
  </v-row>
  <v-skills></v-skills>
</template>

<script>
import Skills from "../components/Skills.vue";

export default {
  name: "Home",
  components: {
    'v-skills': Skills
  }
}
</script>

<style scoped>
.d-flex {
  display: flex;
}

.align-items-center {
  align-items: center;
}
h1 {
  font-size: 3rem;
}
</style>