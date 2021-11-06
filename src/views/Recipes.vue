<template>
  <RecipesListVue/>
</template>

<script>
import RecipesListVue from '../components/RecipesList.vue'
export default {
  name: 'Recipes',
  created () {
    document.title = 'SimplyRecipes || Recipes'
  },
  components: {
    RecipesListVue
  }
}
</script>
