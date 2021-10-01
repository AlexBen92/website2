<template>
  <v-layout column justify-center align-center class="mt-4 pt-2">
    <VueCompareImage
      class="hidden-md-and-down"
      hover
      :style="{ minWidth: '1300px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage"
      :rightImage="rightImage"
      :sliderPositionPercentage="sliderPosition"
    />
    <VueCompareImage
      class="hidden-lg-and-up"
      hover
      :style="{ maxWidth: '400px' }"
      :sliderLineWidth="sliderLine"
      :handleSize="hSize"
      :leftImage="leftImage2"
      :rightImage="rightImage2"
      :sliderPositionPercentage="sliderPosition"
    />

    <br>

    <vue-typer class="headline" :repeat="0" text="Alex BENJAMIN"></vue-typer>
    <vue-typer
      :text="text1"
      :repeat="Infinity"
      :shuffle="false"
      initial-action="erasing"
      :pre-type-delay="70"
      :type-delay="70"
      :pre-erase-delay="1980"
      :erase-delay="150"
      erase-style="select-back"
      :erase-on-complete="false"
      caret-animation="smooth"
    ></vue-typer>
    <br>
    <v-flex xs12 sm6 md4 lg4 xl4>
      <v-card flat color="transparent" max-width="500">
        <v-card-title primary-title>
          <div>
            <div>
              <p>
                  Je suis developpeur Front-end , j’ai la chance de faire un métier que j'affectionne.
        Je suis developpeur Front-end , j’ai la chance de faire un métier que j'affectionne.
       Intéressé par tout ce qui touche au développement,
       j’effectue une veille quotidienne sur les nouveaux framworks et les différents outils.
              </p>
            </div>
          </div>
        </v-card-title>

        <v-card-actions class="hidden-sm-and-down">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-card-actions class="hidden-md-and-up justify-center">
          <v-btn
            v-for="icon in icons"
            :key="icon.icon"
            small
            fab
            dark
            outline
            color="green"
            :href="icon.href"
            target="_blank"
          >
            <v-icon dark>{{icon.icon}}</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import { VueTyper } from "vue-typer";
import VueCompareImage from "vue-compare-image";

export default {
  metaInfo: {
    title: "Home",
    titleTemplate: "%s ← Alex BENJAMIN",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "description", content: "Alex BENJAMIN Portfolio" },
      { charset: "utf-8" },
      { property: "og:title", content: "Alex' BENJAMIN" },
      { property: "og:site_name", content: "Alex'BENJAMIN" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "" },
      {
        property: "og:image",
        content: "/alex.png"
      },
      { property: "og:description", content: "Alex BENJAMIN Portfolio" }
    ]
  },
  components: {
    "vue-typer": VueTyper,
    VueCompareImage
  },
  data() {
    return {
      icons: [
        { href: "https://github.com/AlexBen92", icon: "fab fa-github" },
        
        {
          href: "https://www.linkedin.com/in/alex-benjamin-b03430189/",
          icon: "fab fa-linkedin-in"
        },
      ],
      text1: ["Front-End Developer", "Web Developer", "Web Designer"],
      leftImage: "https://i.imgur.com/mFuDFu3.jpg",
      rightImage: "https://i.imgur.com/0FrTMTn.jpg",
      leftImage2: "https://i.imgur.com/mFuDFu3.jpg",
      rightImage2: "https://i.imgur.com/0FrTMTn.jpg",
      sliderLine: 0,
      hSize: 0,
      sliderPosition: 0.5
    };
  }
};
</script>
<style>
@keyframes rocking {
  0%,
  100% {
    transform: rotateZ(-10deg);
  }

  50% {
    transform: rotateZ(10deg);
  }
}

.vue-typer {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
.vue-typer .custom.char.typed {
  color: green;
}
.vue-typer .custom.char.selected {
  color: #e91e63;
}

.vue-typer .custom.caret {
  animation: rocking 1s ease-in-out 0s infinite;
}
.vue-typer .custom.caret.typing {
  background-color: green;
}
.vue-typer .custom.caret.selecting {
  display: inline-block;
  background-color: #e91e63;
}

*{
    background-color: linear-gradient(0deg, rgba(17,37,37,1) 0%, rgba(148,147,32,0.8379551649761467) 72%)
}
</style>

