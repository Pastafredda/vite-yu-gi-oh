<script>
import { store } from './store.js';
import axios from 'axios';
import Header from './components/Header.vue';
import Main from './components/main.vue';
import Select from './components/Select.vue';


export default {
  components: {
    Header,
    Main,
    Select,
  },
  data() {
    return {
      store
    }
  },
  methods: {
    getCard() {
      let myUrl = store.cardApi;
      if (store.selectedArchetype !== '') {
        myUrl += `&archetype=${store.selectedArchetype}`

      }
      axios.get(myUrl)
        .then(risposta => {
          store.listCard = risposta.data.data;
        })
        .catch(error => {
          console.log(error);
        })
    },
    getArchetype() {
      axios.get(store.archetypeApi)
        .then(risposta => {
          store.listarchetype = risposta.data
          console.log('ho clicccato');
        })
    },
  },

  created() {
    this.getCard();
    this.getArchetype();
  }
}
</script>

<template>
  <Header />
  <Select @myselect="getCard" />
  <Main />
</template>

<style lang="scss">
@use './styles/general.scss' as *;
</style>
