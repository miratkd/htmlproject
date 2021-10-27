<template>
  <div >
    <nav class="nav">
      <div class="nav-center">

        <div class="nav-header">
          <router-link to="" class="nav-logo">
            <img src="../assets/logo.svg" alt="logo">
          </router-link>
          <button type="button" class="btn nav-btn">
            <i class="fas fa-align-justify"></i>
          </button>
        </div>

        <div class="nav-links">
          <router-link to="" class="nav-link">Home</router-link>
          <router-link to="About" class="nav-link">About</router-link>
          <router-link to="Tags" class="nav-link">Tags</router-link>
          <router-link to="Recipes" class="nav-link">Recipes</router-link>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {}
}
</script>
