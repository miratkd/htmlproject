<template>
  <div >
    <nav class="navbar">
      <div class="nav-center">

        <div class="nav-header">
          <router-link to="" class="nav-logo">
            <img src="../assets/logo.svg" alt="logo">
          </router-link>
          <button type="button" class="btn nav-btn" @click="toogle" >
            <i class="fas fa-align-justify"></i>
          </button>
        </div>

        <div class="nav-links" :class="showLinksClass">
          <router-link to="" class="nav-link">Home</router-link>
          <router-link to="About" class="nav-link">About</router-link>
          <router-link to="Tags" class="nav-link">Tags</router-link>
          <router-link to="Recipes" class="nav-link">Recipes</router-link>
          <div class="nav-link contact-link">
            <router-link to="contact" class="btn">Contact</router-link>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      showLinks: false
    }
  },
  computed: {
    showLinksClass () {
      if (this.showLinks) {
        return 'show-links'
      } else {
        return ''
      }
    }
  },
  methods: {
    toogle () {
      this.showLinks = !this.showLinks
    }
  }
}
</script>

<style scoped>
.navbar{
  display: flex;
  justify-content: center;
  align-items: center;
}
.nav-center{
  width: 90vw;
  max-width: var(--max-width);
}
.nav-header{
  height: 6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.nav-header img{
  width: 200px;
}
.nav-btn{
  padding: 0.15rem 0.75rem;
}
.nav-btn i{
  font-size: 1.25rem;
}
.nav-logo{
  display: flex;
  align-items: center;
}
.nav-links{
  display: flex;
  flex-direction: column;
  height: 0;
  overflow: hidden;
  transition: var(--transition);
}
.show-links{
  height: 310px;
}
.nav-link{
  display: block;
  text-align: center;
  text-transform: capitalize;
  color: var(--grey-900);
  letter-spacing: var(--letterSpacing);
  padding: 1rem 0rem;
  border-top: 1px solid var(--grey-500);
  transition: var(--transition);
}
.nav-link:hover{
  color: var(--primary-500)
}
.contact-link a{
  padding: 0.15rem 1rem;
}

@media screen and (min-width: 1000px) {
  .nav-btn{
    display: none;
  }
  .navbar{
    height: 6rem;
  }
}
</style>
