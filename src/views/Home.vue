<template>
  <header class="hero">
    <div class="hero-containear">
      <div class="hero-text">
        <h1>Simply recipes</h1>
        <h4>No fluff, just recipes</h4>
      </div>
    </div>
  </header>
  <RecipesListVue/>
</template>

<script>
import RecipesListVue from '../components/RecipesList.vue'

export default {
  name: 'Home',
  created () {
    document.title = 'SimplyRecipes || Home'
  },
  components: {
    RecipesListVue
  }
}
</script>

<style scoped>
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
}
</style>
