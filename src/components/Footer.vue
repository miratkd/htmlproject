<template>
  <footer class="page-footer">
    <p>
      &copy; <span>{{year()}}</span>
      <span class="footer-logo"> SimplyRecipes</span>
      Built by <a href="https://www.johnsmilga.com/">Coding Addict</a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>

<style scoped>
.page-footer{
  display: flex;
  height: 4rem;
  background: var(--black);
  color: var(--white);
  justify-content: center;
  align-items: center;
}
.page-footer p{
  margin-bottom: 0;
}
.footer-logo, .page-footer a{
  color: var(--primary-500);
}
</style>
