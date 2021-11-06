<template>
  <section class="recipes-containear">
    <div class="tags-containear">
      <h4>Recipes</h4>
      <div class="tags-list">
        <router-link to="tags">Beef (1)</router-link>
        <router-link to="tags">BreakFest (2)</router-link>
        <router-link to="tags">Carrots (3)</router-link>
        <router-link to="tags">Food (4)</router-link>
      </div>
    </div>
    <RecipesCardsVue/>
  </section>
</template>

<script>
import RecipesCardsVue from './RecipesCards.vue'
export default {
  name: 'RecipesList',
  components: {
    RecipesCardsVue
  }
}
</script>

<style scoped>
.recipes-containear{
  display: grid;
  gap: 2rem 1rem;
}
.tags-list a:hover{
  color: var(--primary-500);
}
.tags-list a{
  text-transform: capitalize;
  display: block;
  color: var(--grey-500);
  transition: var(--transition);
}
.tags-list{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
.tags-containear h4{
  margin-bottom: 0.5rem;
  font-weight: 500;
}
.tags-containear{
  order: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
}
@media screen and (min-width: 992px) {
  .tags-containear{
    order: 0;
  }
  .tags-list{
    grid-template-columns: 1fr;
  }
}
@media screen and (min-width: 992px) {
  .recipes-containear{
    grid-template-columns: 200px 1fr;
  }
}
</style>
