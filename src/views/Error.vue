<template>
  <main class="page error-page">
    <section>
      <h1>404</h1>
      <h3>Page not found</h3>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Error',
  created () {
    document.title = 'SimplyRecipes || Error'
  }
}
</script>

<style scoped>
.error-page{
  text-align: center;
}
.error-page h1{
  font-size: 9rem;
}
</style>
