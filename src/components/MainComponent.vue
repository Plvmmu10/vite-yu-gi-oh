<template>
    <div class="container">
        <div class="p-3">
            <FilterComponent />
        </div>

        <div>
            <CardList />
        </div>
    </div>
</template>

<script>

import FilterComponent from './FIlterComponent.vue';
import CardList from './CardList.vue'
export default {
    name: 'MainComponent',
    components: {
        FilterComponent,
        CardList
    }
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

.container {
    background-color: $main-color;
}
</style>