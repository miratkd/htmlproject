<template>
  <div class="recipe-page">
    <section class="recipe-hero">
      <img src="../assets/recipes/recipe-4.jpeg" class="img recipe-hero-img" alt="banana">
      <article class="recipe-info">
        <h2>Banna Pancakes</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis est, quam rerum nisi voluptatibus architecto velit incidunt commodi voluptatum quas odit amet id consequuntur a voluptatem eum exercitationem dolore ad.</p>
        <div class="recipe-icons">
          <article>
            <i class="fas fa-clock"></i>
            <h5>prep time</h5>
            <p>30 min.</p>
          </article>
          <article>
            <i class="far fa-clock"></i>
            <h5>cook time</h5>
            <p>15 min.</p>
          </article>
          <article>
            <i class="fas fa-user-friends"></i>
            <h5>servings</h5>
            <p>6 servings.</p>
          </article>
        </div>
        <div class="recipes-tags">
          tags: <router-link to="tags-template">Beef</router-link>
          <router-link to="tags-template">Breakfast</router-link>
          <router-link to="tags-template">Pancake</router-link>
          <router-link to="tags-template">Food</router-link>
        </div>
      </article>
    </section>
    <section class="recipe-content">

    </section>
  </div>
</template>

<script>
export default {
  name: 'SingleRecipe',
  created () {
    document.title = 'SimplyRecipes || Recipe'
  }
}
</script>

<style scoped>
.recipe-hero{
  display: grid;
  gap: 3rem;
}
.recipe-hero-img{
  height: 300px;
  border-radius: 5px;
}
.recipe-info p{
  color: grey;
}
.recipe-icons{
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
  margin: 2rem 0;
  text-align: center;
}
.recipe-icons i{
  font-size: 1.5rem;
  color: var(--primary-500);
}
.recipe-icons h5, .recipe-icons p{
  margin-bottom: 0;
  font-size: 0.85rem;
}
</style>
