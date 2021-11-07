<template>
  <section class="featured-recipes">
    <h5 class="featured-title">Look at this awesomesource!</h5>
    <RecipesCardsVue/>
  </section>
</template>

<script>
import RecipesCardsVue from '../components/RecipesCards.vue'
export default {
  name: 'FeaturedRecipes',
  components: { RecipesCardsVue }
}
</script>

<style scoped>
.featured-title{
  text-align: center;
}
</style>
