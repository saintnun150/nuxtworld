<template>
  <v-card
    class="mx-auto home-card"
    max-width="344"
    outlined
    nuxt
    :to="link"
  >
    <v-img class="home-card-img" v-bind:src="require('~/assets/img/kakao_lion_card_after.jpg')"/>
    <v-card-title>
      <slot name="cardtitle"></slot>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "HomeCard",
  props: ['link'],
  data() {
    return {}
  },
  mounted() {
    const options = {
      root : document.querySelector('.home-card'),
      rootMargin: '0px',
      threshold: 1.0
    }
    const callback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          /*entry.target.style.transform = "rotateY(720deg)";
          entry.target.style.animation = "turn 3.5s ease-out forwards 1s";*/
          observer.unobserve(entry.target);
          console.log('이미지 노출됨');
        } else {
          console.log('이미지 제외됨');
        }
      })
    }

    let observer = new IntersectionObserver(callback, options);

    let target = document.querySelector('.home-card-img');
    observer.observe(target);
  }
}
</script>

<style scoped lang="scss">
.home-card {
  transform: rotateY(720deg);
  animation: turn 3.5s ease-out forwards 1s;
}

@keyframes turn {
  100% {
    transform: rotateY(0deg);
  }
}
</style>
