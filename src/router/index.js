import { createRouter, createWebHistory } from 'vue-router'

// Dummy components — create these or replace them with your own
const Home = { template: '<div>Home</div>' }
const About = { template: '<div>About Us</div>' }
const Products = { template: '<div>Products</div>' }
const Contact = { template: '<div>Contact Us</div>' }

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/products', component: Products },
  { path: '/contact', component: Contact },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
