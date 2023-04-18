<template>
    <div class="bg-white p-4">
        <div class="row-title bg-black text-white">
            <h6 class="m-0 p-4">Found {{ cards.cardsList.length }} cards</h6>
        </div>

        <div class="row">
            <CardComponent v-for="card in cards.cardsList" :key="card.id" :image="card.card_images[0].image_url"
                :name="card.name" :archetype="card.archetype" />
        </div>
    </div>
</template>

<script>

import { cards } from '../assets/store/store';
import CardComponent from './CardComponent.vue';
export default {
    name: 'CardList',
    components: {
        CardComponent
    },
    data() {
        return {
            cards
        }
    }
}
</script>

<style lang="scss" scoped></style>