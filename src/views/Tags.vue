<template>
  <section class="tags-wrapper">
    <router-link to="tags-template" class="tag">
      <h5>Beef</h5>
      <p>1 recipe</p>
    </router-link>

    <router-link to="tags-template" class="tag">
      <h5>Breakfast</h5>
      <p>2 recipe</p>
    </router-link>

    <router-link to="tags-template" class="tag">
      <h5>Carrots</h5>
      <p>3 recipe</p>
    </router-link>

    <router-link to="tags-template" class="tag">
      <h5>Dinner</h5>
      <p>4 recipe</p>
    </router-link>

    <router-link to="tags-template" class="tag">
      <h5>Food</h5>
      <p>1 recipe</p>
    </router-link>

  </section>
</template>

<script>
export default {
  name: 'Tags',
  created () {
    document.title = 'SimplyRecipes || Tags'
  }
}
</script>

<style scoped>
.tags-wrapper{
  display: grid;
  gap: 2rem;
  padding-bottom: 3rem;
}
.tag{
  background-color: var(--grey-500);
  border-radius: 5px;
  text-align: center;
  color: white;
  transition: var(--transition);
  padding: 0.75rem 0;
}
.tag:hover{
  background-color: var(--primary-500);
}
.tag h5, .tag p{
  margin-bottom: 0;
}
.tag h5{
  font-weight: 600;
}
@media (min-width: 576px) {
  .tags-wrapper{
    grid-template-columns: 1fr 1fr;
  }
}
@media (min-width: 992px) {
  .tags-wrapper{
    grid-template-columns: 1fr 1fr 1fr;
  }
}
</style>
