<template>
  <h4>Beef</h4>
  <RecipesCardsVue/>
</template>

<script>
import RecipesCardsVue from '../components/RecipesCards.vue'
export default {
  name: 'Tags',
  created () {
    document.title = 'SimplyRecipes || Tags'
  },
  components: {
    RecipesCardsVue
  }
}
</script>
