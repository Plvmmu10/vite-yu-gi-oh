<template>
    <div class="bg-white p-4">
        <div class="row-title bg-black text-white">
            <h6 class="m-0 p-4">Found n cards</h6>
        </div>

        <div class="row">
            <Card />
        </div>
    </div>
</template>

<script>
import Card from './Card.vue';
import { cards } from '../assets/store/store';
export default {
    name: 'CardList',
    components: {
        Card
    },
    data() {
        return {
            cards
        }
    }
}
</script>

<style lang="scss" scoped></style>