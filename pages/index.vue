<template>
  <v-container id="index-container">
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <logo />
          <vuetify-logo />
        </div>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col>
        <v-card>
          <v-card-title class="headline">
            Welcome to NuxtWorld
          </v-card-title>
          <v-card-text>
            <p>NuxtWorld Vue.js + Nuxt.js + Vuetify.js를 통해 제작한 사이트입니다.</p>
            <p>하단 메뉴를 선택해주세요</p>
          </v-card-text>
          <v-card-actions>
            <v-spacer/>
            <v-btn
              color="primary"
              nuxt
              to="/interactive"
            >
              Continue
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col>
        <Home/>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Home from "@/components/Home";

export default {
  components: {
    Home,
    Logo,
    VuetifyLogo
  }
}
</script>
<style lang="scss">
#index-container {
  padding: 0 !important;
}
</style>
