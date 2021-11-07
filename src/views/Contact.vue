<template>
  <section class="contact-containear">
    <article class="contact-info">
      <h3>Want To Get In Touch?</h3>
      <p>Four dollar toast biodiesel plaid salvia actually pickled banjo bespoke mlkshk intelligentsia edison bulb synth.</p>
      <p>Cardigan prism bicycle rights put a bird on it deep v.</p>
      <p>Hashtag swag health goth air plant, raclette listicle fingerstache cold-pressed fanny pack bicycle rights cardigan poke.</p>
    </article>
    <article>
      <form class="form contact-form">
        <div class="form-row">
          <label for="name" class="form-label">Your name</label>
          <input type="text" name="name" id="name" class="form-input">
        </div>
        <div class="form-row">
          <label for="email" class="form-label">Your email</label>
          <input type="email" name="email" id="email" class="form-input">
        </div>
        <div class="form-row">
          <label for="message" class="form-label">Message</label>
          <textarea name="message" id="message" class="form-textarea"></textarea>
        </div>
        <button type="submit" class="btn btn-block">Submit</button>
      </form>
    </article>
  </section>
  <FeaturedRecipes/>
</template>

<script>
import FeaturedRecipes from '../components/FeaturedRecipes.vue'
export default {
  name: 'Contact',
  created () {
    document.title = 'SimplyRecipes || Contact'
  },
  components: {
    FeaturedRecipes
  }
}
</script>

<style scoped>
.contact-form{
  width: 100%;
  margin: 0;
}
.contact-containear{
  display: grid;
  gap: 2rem 3rem;
  padding-bottom: 3rem;
}
@media screen and (min-width: 1000px) {
  .contact-containear{
    grid-template-columns: 1fr 450px;
    align-items: center;
  }
}
</style>
