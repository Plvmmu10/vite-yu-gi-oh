<template>
    <div class="container">
        <div>
            <FilterComponent />
        </div>
    </div>
</template>

<script>
import FilterComponent from './FIlterComponent.vue';
export default {
    name: 'MainComponent',
    components: {
        FilterComponent,
    }
}
</script>

<style lang="scss" scoped>
.container {
    padding: 2rem;
}
</style>