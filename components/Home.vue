<template>
<v-row>
  <HomeCard
    v-for="(item, i) in homeCardList"
    :key="i"
    :link="item.link"
  >
    <template v-slot:cardtitle>
      {{item.title}}
    </template>
  </HomeCard>
</v-row>
</template>

<script>
import HomeCard from "@/components/home/HomeCard";
export default {
  name: "Home",
  components: {HomeCard},
  data() {
    return {
      homeCardList: [
        {
          title : 'profile',
          link : '/profile'
        },
        {
          title : 'project',
          link : '/project'
        },
        {
          title : 'contact',
          link : '/contact'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
