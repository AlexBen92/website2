<template>
  <v-layout row justify-center align-center wrap class="mt-4 pt-2">
    <v-flex xs12 sm12 md5 lg6 xl6 class="mt-4 pt-4">
      <h2 class="mb-4 pl-4 pt-2">Education</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">DEC 2020</div>
                <div class="caption font-weight-bold green--text">MARS 2021</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Stage  Developpeur Full Stack</strong>
                <div class="caption mb-2">Eurocompteur</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">NOV 2020</div>
                <div class="caption font-weight-bold green--text">MARS 2020</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Auto Formation Vue JS / React JS</strong>
                <div class="caption mb-2">UDEMY</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">NOV 2019</div>
                <div class="caption font-weight-bold green--text">MARS 2020</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Formation Webdesigner Niveau III</strong>
                <div class="caption mb-2">Fondation INFA</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-flex xs12 sm12 md4 lg6 xl6 class="mt-4 pt-2">
      <h2 class="mb-4 pl-4">Experiences</h2>
      <v-card-text class="py-0">
        <v-timeline align-top dense>
          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">Aout 2021</div>
                <div class="caption font-weight-bold green--text">Maintenant</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Création de SAAS</strong>
                <div class="caption mb-2">Plateforme de mise en relation</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">Avril 2021</div>
                <div class="caption font-weight-bold green--text">JULY 2021</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Landing Page & Community Manager </strong>
                <div class="caption mb-2">Benevolat</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>

          <v-timeline-item color="green" small>
            <v-layout pt-3>
              <v-flex xs4>
                <div class="caption font-weight-bold green--text">SEP 2018 -</div>
                <div class="caption font-weight-bold green--text">MAR 2019</div>
              </v-flex>
              <v-flex class="pl-2">
                <strong>Création de site E-commerce</strong>
                <div class="caption mb-2">Gestion de facebook ADS et Site marchant sur Shopify</div>
              </v-flex>
            </v-layout>
          </v-timeline-item>
        </v-timeline>
      </v-card-text>
    </v-flex>
    <v-layout row justify-center align-center wrap class="mt-4 pt-2">
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Design</span>

          <span class="green--text">Skills</span>
        </h2>
        <br>
        <strong>Photoshop</strong>
        <v-progress-linear v-model="buffer1" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>Illustrator</strong>
        <v-progress-linear v-model="buffer2" :buffer-value="bufferValue" color="green" height="8"></v-progress-linear>
      </v-flex>
      <v-flex xs12 sm12 md4 lg5 xl5 class="mx-2 pt-4">
        <h2>
          <span>Coding</span>
          <span class="green--text">Skills</span>
        </h2>
        <br>
        <strong>VUE/NUXT</strong>
        <v-progress-linear v-model="buffer4" :buffer-value="bufferValue" color="green" height="16"></v-progress-linear>
        <strong>REACT JS</strong>
        <v-progress-linear v-model="buffer5" :buffer-value="bufferValue" color="green" height="14"></v-progress-linear>
        <strong>NODE JS</strong>
        <v-progress-linear v-model="buffer6" :buffer-value="bufferValue" color="green" height="10"></v-progress-linear>
      </v-flex>
      <div class="mt-4 pt-2">
        <v-btn
          href="https://drive.google.com/file/d/1q0UgrEQQhhnuefuqGfDMM63LbqfeP1Qv/view?usp=sharing"
          target="_blank"
          color="green"
          dark
          large
        >
          Download Resume
          <v-icon right dark>fas fa-file-download</v-icon>
        </v-btn>
      </div>
    </v-layout>
  </v-layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
    titleTemplate: "%s ← Alex BENJAMIN",
    meta: [
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        name: "description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      },
      { charset: "utf-8" },
      { property: "og:title", content: "Alex BENJAMIN" },
      { property: "og:site_name", content: "Alex BENJAMIN" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "" },
      {
        property: "og:image",
        content: "https://i.imgur.com/Dcz2PGx.jpg"
      },
      {
        property: "og:description",
        content:
          "Vue NUXT HTML CSS JavaScript Design Adobe XD Photoshop Coding Skills Resume Work Web Developer Front-End"
      }
    ]
  },
  data() {
    return {
      value: 0,
      buffer1: 0,
      buffer2: 0,
      buffer3: 0,
      buffer4: 0,
      buffer5: 0,
      buffer6: 0,
      bufferValue: 100,
      interval: 0
    };
  },
  mounted() {
    this.startBuffer();
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },

  methods: {
    startBuffer() {
      this.interval = setInterval(() => {
        this.buffer1 = 90;
        this.buffer2 = 85;
        this.buffer3 = 80;
        this.buffer4 = 80;
        this.buffer5 = 90;
        this.buffer6 = 70;
      }, 800);
    }
  }
};
</script>
<style >
</style>

