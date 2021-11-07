<template>
  <section class="about-page">
    <article>
      <h2>I'm baby coloring book poke taxidermy</h2>
      <p>Taxidermy forage glossier letterpress heirloom before they sold out you probably haven't heard of them banh mi biodiesel chia.</p>
      <p>Taiyaki tumblr flexitarian jean shorts brunch, aesthetic salvia retro.</p>
      <ContactVue style="text-align: left; border-top: none"/>
    </article>
    <img src="../assets/about.jpeg" alt="about" class="img about-img">
  </section>
  <FeaturedRecipes/>
</template>

<script>
import ContactVue from '../components/ContactButton.vue'
import FeaturedRecipes from '../components/FeaturedRecipes.vue'
export default {
  name: 'About',
  created () {
    document.title = 'SimplyRecipes || About'
  },
  components: {
    ContactVue,
    FeaturedRecipes
  }
}
</script>

<style scoped>
.about-page h2{
  text-transform: none;
  font-weight: bold;
}
.about-page{
  display: grid;
  gap: 2rem 4rem;
  padding-bottom: 3rem;
}
.about-img{
  border-radius: var(--borderRadius);
  height: 300px;
}

@media screen and (min-width:1000px) {
  .about-page{
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 400px;
    align-items: center;
  }
  .about-img{
    height: 100%;
  }
}
</style>
