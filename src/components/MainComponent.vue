<template>
    <div class="container">

        <div>
            <CardList />
        </div>
    </div>
</template>

<script>
import CardList from './CardList.vue'
export default {
    name: 'MainComponent',
    components: {
        CardList
    }
}
</script>

<style lang="scss" scoped></style>