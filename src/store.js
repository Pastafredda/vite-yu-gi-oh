import { reactive } from 'vue'

export const store = reactive({
    cardApi: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    listCard: [],
    selectedArchetype: "",
    apiParameter: "archetype",
    archetypeApi: "https://db.ygoprodeck.com/api/v7/archetypes.php",
    listarchetype: [],
});

