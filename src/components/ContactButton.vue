<template>
  <div class="nav-link contact-link">
    <router-link to="contact" class="btn">Contact</router-link>
  </div>
</template>

<style scoped>
.contact-link a{
  padding: 0.15rem 1rem;
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
@media screen and (min-width: 600px) {
  .nav-link{
    padding: 0;
    border-top: none;
    margin-right: 1rem;
    font-size: 1rem;
  }
  .contact-link{
    margin-left: auto;
  }
}
</style>
