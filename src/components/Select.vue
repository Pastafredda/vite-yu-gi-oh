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
            <select name="archetype" id="archetype">
                <option value="Alien">Alien</option>
                <option value="Archfiend">Archfiend</option>
            </select>
        </label>

    </form>
</template>

<style lang="scss" scoped>
.select {
    width: 80%;
    margin: 0 auto;
    padding: 0 0 40px 40px;


    select {
        width: 110px;
        background-color: white;
        border: none;
        border-radius: 6px;
        padding: 8px 12px;
        font-size: 14px;
    }
}
</style>