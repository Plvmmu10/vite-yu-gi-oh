<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <MainComponent />
  </main>
</template>

<script>
import { cards } from './assets/store/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue'
export default {
  name: 'App',
  components: {
    HeaderComponent,
    MainComponent
  },
  data() {
    return {
      cards
    }
  },
  methods: {
    getCards() {
      const url = cards.basepath + cards.endpoint;
      axios.get(url).then((res) => {
        cards.cardsList = res.data.data;
        console.log(cards.cardsList)
      })
    }
  },
  mounted() {
    cards.endpoint = 'cardinfo.php?num=50&offset=0';
    this.getCards()
  }
}
</script>

<style lang="scss" scoped></style>