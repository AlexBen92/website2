<template>
  <v-container grid-list-xl>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex v-for="portfolio in portfolios" :key="portfolio.src" xs12 sm12 md4 lg4 xl4>
        <v-card
          :to="'/portfolio/'+(portfolio.title).toLowerCase()"
          hover
          flat
          color="transparent"
          height="230"
        >
          <v-card-title></v-card-title>
          <v-img :src="portfolio.src" aspect-ratio="2.75" height="130" contain></v-img>
          <v-card-title primary-title class="justify-center">
            <v-flex text-xs-center subheading font-weight-bold>{{portfolio.title}}</v-flex>
          </v-card-title>
        </v-card>
      </v-flex>
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
      portfolios: [
        {
          src: "https://i.imgur.com/GvTt5GG.png",
          title: "Web"
        },
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
</style>