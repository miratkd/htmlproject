import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tags from '../views/Tags.vue'
import Recipes from '../views/Recipes.vue'
import Contact from '../views/Contact.vue'
import SingleRecipe from '../views/SingleRecipe.vue'
import Error from '../views/Error.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/tags',
    name: 'Tags',
    component: Tags
  },
  {
    path: '/recipes',
    name: 'Recipes',
    component: Recipes
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/single-recipe',
    name: 'SingleRecipe',
    component: SingleRecipe
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
