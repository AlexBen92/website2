<template>
  <v-container grid-list-xl>
    <h2 class="pl-4">
      <span>Web</span>
      <span class="green--text">Portfolio</span>
    </h2>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-dialog
        v-model="project.dialog"
        lazy
        max-width="1000"
        v-for="project in projects"
        :key="project.title"
      >
        <template v-slot:activator="{ on }">
          <v-flex xs12 sm6 md4 lg4 xl4 v-on="on">
            <v-card hover flat color="transparent">
              <v-img
                :src="project.poster"
                :alt="project.title"
                height="230"
                lazy-src="https://cdn.dribbble.com/users/503653/screenshots/3143656/fluid-loader.gif"
              ></v-img>
              <v-card-title primary-title class="justify-center">{{project.title}}</v-card-title>
            </v-card>
          </v-flex>
        </template>
        <v-card v-if="project.dialog">
          <v-img :src="project.poster"></v-img>
          <v-card-text>
            <h3 class="headline mb-0">
              <span>Technology</span>
            </h3>
            <v-chip color="green" text-color="white">{{project.tech.tech1}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech2}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech3}}</v-chip>
            <v-chip color="green" text-color="white">{{project.tech.tech4}}</v-chip>
          </v-card-text>
          <v-card-actions>
            <v-btn large flat dark color="green" :href="project.demo" target="_blank">
              <v-icon left>fas fa-desktop</v-icon>Demo
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "App",
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Alex BENJAMIN",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Alex BENJAMIN Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Alex BENJAMIN" },
      { property: "og:site_name", content: "Alex" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://alexbportfolio.vercel.app/" },
      {
        property: "og:image",
        content: ""
      },
      { property: "og:description", content: "Alex BENJAMIN Portfolio" }
    ]
  },
  data() {
    return {
      dialog: false,
      projects: [

        {
          dialog: false,
          title: "Tarentino Film's",
          demo: "https://tender-wescoff-cbe91a.netlify.app/",
          tech: {
            tech1: "Vue",
            tech2: "VueX",
          },
          poster:"https://sofilm.fr/wp-content/uploads/2020/11/sofilm72_couv.jpg",
        
        },
         {
          dialog: false,
          title: "Site vitrine Coach",
          demo: "https://stoic-ramanujan-4d8b1c.netlify.app/",
          tech: {
            tech1: "React",
            tech2: "React-motion",
          },
          poster:"https://i.imgur.com/ZfeASRe.jpg",
        },
        {
          dialog: false,
          title: "Calculateur FFMI",
          demo: "https://competent-lewin-55786f.netlify.app/",
          tech: {
            tech1: "VUE",
          },
          poster: require("./assets/portfolio-img1.jpg"),
        },
        {
          dialog: false,
          title: "Site e-commerce",
          demo: "https://eloquent-panini-e1743e.netlify.app/",
          tech: {
            tech1: "React",
          },
          poster: "https://i.imgur.com/jdKuoLi.jpg"
        },
        {
          dialog: false,
          title: "Jeu de boxe",
          demo: "https://silly-curie-560520.netlify.app/",
          tech: {
            tech1: "VUE",
          },
          poster: require("./assets/portfolio-img2.jpg"),
        },
        {
          dialog: false,
          title: "Calculateur de site",
          demo: "https://6155957337904517e6fcf1e3--sleepy-poincare-8bc37c.netlify.app/",
          tech: {
            tech1: "VUE",
          },
          poster: require("./assets/portfolio-img3.jpg"),
        },
      ]
    };
  }
};
</script>

<style  scoped>
</style>