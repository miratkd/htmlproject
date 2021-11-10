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
      <article>
        <h4>Instructions</h4>
        <div class="single-instruction">
          <header>
            <p>Step 1</p>
            <div></div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium asperiores aut nisi nam laborum.</p>
        </div>
        <div class="single-instruction">
          <header>
            <p>Step 2</p>
            <div></div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium asperiores aut nisi nam laborum.</p>
        </div>
        <div class="single-instruction">
          <header>
            <p>Step 3</p>
            <div></div>
          </header>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime laudantium asperiores aut nisi nam laborum.</p>
        </div>
      </article>
      <article class="second-column">
        <div>
          <h4>
            ingredients
          </h4>
          <p class="single-ingredient">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quod.
          </p>
          <p class="single-ingredient">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quod.
          </p>
          <p class="single-ingredient">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quod.
          </p>
        </div>
        <div>
          <h4>tools</h4>
          <p class="single-tool">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, molestiae?
          </p>
          <p class="single-tool">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, molestiae?
          </p>
          <p class="single-tool">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, molestiae?
          </p>
          <p class="single-tool">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta, molestiae?
          </p>
        </div>
      </article>
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
.recipes-tags{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  font-size: 0.7em;
  font-weight: 600;
}
.recipes-tags a{
  background: var(--primary-500);
  border-radius: 5px;
  color: white;
  padding: 0.05rem 0.5rem;
  margin: 0 0.25rem;
  text-transform: capitalize;
}
.recipe-content{
  padding: 3rem 0;
  display: grid;
  gap: 2rem 5rem;
}
.single-instruction header{
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 1.5rem;
  align-items: center;
}
.single-instruction header div{
  height: 2px;
  background: grey;
}
.single-instruction header p{
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0;
  color: var(--primary-500)
}
.single-instruction > p {
  color: grey;
}
.second-column{
  display: grid;
  row-gap: 2rem;
}
.single-ingredient{
  border-bottom: 2px solid grey;
  padding-bottom: 0.75rem;
  color: grey
}
.single-tool{
  border-bottom: 2px solid grey;
  padding-bottom: 0.75rem;
  color: var(--primary-500);
  text-transform: capitalize;
}

@media (min-width: 992px) {
  .recipe-hero{
    grid-template-columns: 4fr 5fr;
    align-items: center;
  }
  .recipe-content{
    grid-template-columns: 2fr 1fr;
  }
}
</style>
