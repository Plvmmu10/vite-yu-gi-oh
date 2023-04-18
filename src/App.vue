<template>
  <header>
    <HeaderComponent />
  </header>

  <main>
    <div class="myContainer">
      <FilterComponent class="p-3" @newSearch="getCards" />
      <MainComponent />
    </div>

  </main>
</template>

<script>
import { cards } from './assets/store/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import FilterComponent from './components/FIlterComponent.vue';
import MainComponent from './components/MainComponent.vue';
export default {
  name: 'App',
  components: {
    HeaderComponent,
    FilterComponent,
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
      let options = {};
      let params = {};

      for (let key in cards.search) {
        if (cards.search[key]) {
          params[key] = cards.search[key]
        }
      }

      if (Object.keys(params).length > 0) {
        options.params = params;
      }

      axios.get(url, options).then((res) => {
        cards.cardsList = res.data.data;
      })



    }
  },
  mounted() {
    cards.endpoint = 'cardinfo.php?num=100&offset=0';
    this.getCards()
  }
}
</script>

<style lang="scss" scoped>
@use './assets/styles/partials/variables' as *;

.myContainer {
  width: 70%;
  margin: 0 auto;
  background-color: $main-color;
  padding: 2rem;
}
</style>