<script>
import Card from './card.vue';
import { store } from '../store.js';


export default {
    name: 'ListCards',
    components: {
        Card
    },
    data() {
        return {
            store
        }
    },
}
</script>

<template>
    <Card v-for="card in store.listCard" :details="card" />
</template>

<style lang="scss" scoped></style>