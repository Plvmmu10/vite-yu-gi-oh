import { reactive } from 'vue';

export const cards = reactive({
    cardsList: [],
    basepath: ' https://db.ygoprodeck.com/api/v7/',
    endpoint: '',
    search: {
        archetype: ''
    }
})