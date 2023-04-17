<template>
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 p-2">
        <div class="card">
            <div class="card-image">
                <img :src="image" class="w-100">
            </div>

            <div class="card-body text-center">


                <h5 class="text-white text-uppercase">{{ name }}</h5>

                <p class="fw-bold">{{ archetype }}</p>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Card',
    props: ['image', 'name', 'archetype']
}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/_variables.scss' as *;

.card-body {
    background-color: $main-color;
}
</style>