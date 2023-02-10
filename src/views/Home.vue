<template>
    <v-container class="ms-10 mt-16">
      <v-row class="mt-5">
        <v-col cols="3">
          <v-img
            src="https://avatars.githubusercontent.com/u/84697205?s=400&u=1b9c8092d282c588f8c2e78eae2e8091fcc6a7b0&v=4"
            class="rounded-circle elevation-23"
          >
          </v-img>
        </v-col>
        <v-col cols="8" class="ms-7">
          <h1>Hello World! I am Ron Hedwig</h1>
          <p class="mt-8" style="text-indent: 7%;">
            I'm thrilled to have the opportunity to
            showcase my work and passion for coding. As a self-taught developer, I
            have always been devoted to pursuing and mastering the art of coding, driven
            by my unwavering passion and motivation to succeed. Whether it's building websites,
            creating innovative applications, or solving complex programming challenges,
            coding is my true calling. Through this website, I aim to give you a glimpse
            into my journey and the projects that have helped shape me into the developer
            I am today. So, sit back, relax, and get ready to discover the exciting world o
            f coding through my eyes!
          </p>
          <v-btn-toggle class="mt-5">
            <v-btn prepend-icon="mdi-github" href="https://github.com/ronhedwigzape" target="_blank">
              Visit my Github
            </v-btn>
          </v-btn-toggle>
        </v-col>
      </v-row>

      <v-skills></v-skills>

    </v-container>
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

</style>