<template>
  <div class="recipes-list">
      <router-link to="single-recipe" class="recipe">
        <img src="../assets/recipes/recipe-1.jpeg" alt="food" class="img recipe-img">
        <h5>Carne asada</h5>
        <p>Prep : 15Min | Cook : 5min</p>
      </router-link>
      <router-link to="single-recipe" class="recipe">
        <img src="../assets/recipes/recipe-2.jpeg" alt="food" class="img recipe-img">
        <h5>Greek ribs</h5>
        <p>Prep : 15Min | Cook : 5min</p>
      </router-link>
      <router-link to="single-recipe" class="recipe">
        <img src="../assets/recipes/recipe-3.jpeg" alt="food" class="img recipe-img">
        <h5>Vegetable soup</h5>
        <p>Prep : 15Min | Cook : 5min</p>
      </router-link>
      <router-link to="single-recipe" class="recipe">
        <img src="../assets/recipes/recipe-4.jpeg" alt="food" class="img recipe-img">
        <h5>Banana pancake</h5>
        <p>Prep : 15Min | Cook : 5min</p>
      </router-link>
    </div>
</template>

<script>
export default {
  name: 'RecipesCards'
}
</script>

<style scoped>
.recipe p{
  margin-bottom: 0;
  line-height: 1;
  margin-top: 0.5rem;
  color: var(--grey-500);
  letter-spacing: var(--letterSpacing);
}
.recipe h5{
  margin-bottom: 0;
  line-height: 1;
  color: var(--grey-700);
}
.recipe{
  display: block;
}
.recipe-img{
  height: 15rem;
  border-radius: var(--borderRadius);
  margin-bottom: 1rem;
}
.recipes-list{
  display: grid;
  gap: 2rem 1rem;
  padding-bottom: 3rem;
}
@media screen and (min-width: 500px) {
  .recipes-list{
    grid-template-columns: 1fr 1fr;
  }
  .recipe-img{
    height: 10rem;
  }
}
@media screen and (min-width: 992px) {
  .recipes-containear{
    grid-template-columns: 200px 1fr;
  }
  .recipe p{
    font-size: 0.85rem;
  }
}
@media screen and (min-width: 1200px) {
  .recipe h5{
    font-size: 1.15rem;
  }
  .recipes-list{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
