<template>
    <form class="d-flex justify-content-center" @submit.prevent="newSearch">
        <div class="row row-cols-auto flex-wrap">
            <div class="col-6">
                <select name="type" id="type" class="form-select" v-model="cards.search.archetype">
                    <option value="" selected>Choose</option>
                    <option :value="archetype.archetype_name" v-for="(archetype, i) in optionsValue" :key="i">{{
                        archetype.archetype_name }}
                    </option>
                </select>
            </div>


            <div class="col-6">
                <button class="btn btn-primary mx-2" type="submit">Search</button>
                <button class="btn btn-danger" type="reset" @click="resetSearch">Reset</button>
            </div>
        </div>
    </form>
</template>

<script>
import { cards } from '../assets/store/store';
import axios from 'axios';
export default {
    name: 'FilterComponent',
    data() {
        return {
            cards,
            optionsValue: []
        }
    },
    methods: {
        resetSearch() {
            cards.search.name = '';
            cards.search.archetype = '';
            this.$emit('newSearch');
        },
        newSearch() {
            this.$emit('newSearch');
        }
    },
    mounted() {
        axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php').then((res) => {
            this.optionsValue = res.data;
        })
    }
}
</script>

<style lang="scss" scoped></style>