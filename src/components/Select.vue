<script>
import { store } from '../store.js';
export default {
    name: 'Select',
    data() {
        return {
            store
        }
    },
}

</script>

<template>
    <form class="select">
        <label for="archetype">
            <select name="archetype" id="archetype" v-model="store.selectedArchetype" @change="$emit('myselect')">
                <option value="Choose an Archetype">Choose an Archetype</option>
                <option v-for="(select, index) in store.listarchetype" :value="select.archetype_name" :key="index">{{
                    select.archetype_name
                }}</option>
            </select>
        </label>

    </form>
</template>

<style lang="scss" scoped>
.select {
    width: 80%;
    margin: 0 auto;
    padding: 0 0 40px 40px;
    display: flex;
    justify-content: end;

    select {
        background-color: #d48f38;
        color: white;
        border: none;
        border-radius: 6px;
        padding: 8px 12px;
        font-size: 14px;
    }
}
</style>