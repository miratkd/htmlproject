<template>
  <header class="hero">
    <div class="hero-containear">
      <div class="hero-text">
        <h1>Simply recipes</h1>
        <h4>No fluff, just recipes</h4>
      </div>
    </div>
  </header>
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
  </section>
</template>

<script>
export default {
  name: 'Home',
  created () {
    document.title = 'SimplyRecipes || Home'
  }
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
.recipes-list{
  display: grid;
  gap: 2rem 1rem;
  padding-bottom: 3rem;
}
.tags-containear{
  order: 1;
  display: flex;
  flex-direction: column;
  padding-bottom: 3rem;
}
.recipes-containear{
  display: grid;
  gap: 2rem 1rem;
}
.hero{
  height: 40vh;
  background: url('../assets/main.jpeg') center/cover no-repeat;
  margin-bottom: 2rem;
  border-radius: var(--borderRadius);
  position: relative;
}
.hero-containear{
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  border-radius: var(--borderRadius);
  display: flex;
  align-items: center;
  justify-content: center;
}
.hero-text{
  text-align: center;
  color: var(--white);
}
@media screen and (min-width: 500px) {
  .hero-text h1{
    font-size: 4rem;
    margin-bottom: 0;
  }
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
  .tags-containear{
    order: 0;
  }
  .tags-list{
    grid-template-columns: 1fr;
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
