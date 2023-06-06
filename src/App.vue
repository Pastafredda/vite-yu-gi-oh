<script>
import { store } from './store.js';
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/main.vue';



export default {
  components: {
    Header,
    Main,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      axios.get(store.apiURL)
        .then(risposta => {
          store.listCard = risposta.data.data;
        })
        .catch(error => {
          console.log(error);
        })
    }
  },
  created() {
    this.getCard();
  }
}
</script>

<template>
  <Header />
  <Main />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
