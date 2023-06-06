<script>
import axios from 'axios';
import Header from './components/Header.vue'
import Main from './components/main.vue'



export default {
  components: {
    Header,
    Main,
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
