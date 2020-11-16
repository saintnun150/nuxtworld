<template>
  <v-card
    class="mx-auto"
  >
  탱구탱구
    <!--<v-img
      v-bind:src="require('~/assets/img/kakao_lion_card_after.jpg')"
    >
    </v-img>-->

    <v-timeline
      align-top
      :dense="$vuetify.breakpoint.smAndDown"
    >
      <v-virtual-scroll height="1000" item-height="200">
      <v-timeline-item
        v-for="(item, i) in items"
        :key="i"
        :color="item.color"
        :icon="item.icon"
        fill-dot
      >
      </v-timeline-item>
      </v-virtual-scroll>
    </v-timeline>

  </v-card>
</template>

<script>
export default {
  name: "Profile",
  data: () => ({
    items: [
      {
        color: 'red lighten-2',
        icon: 'mdi-star',
      },
      {
        color: 'purple darken-1',
        icon: 'mdi-book-variant',
      },
      {
        color: 'green lighten-1',
        icon: 'mdi-airballoon',
      },
      {
        color: 'indigo',
        icon: 'mdi-buffer',
      },
    ],
  }),
}
</script>

<style scoped>

</style>
