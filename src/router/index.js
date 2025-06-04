import { createRouter, createWebHistory } from 'vue-router'

import Home  from '../components/Home.vue'
import About  from '../components/About.vue'
import Products  from '../components/Products.vue'
import ProductDetail  from '../components/ProductDetail.vue'
import Contact from '../components/Contact.vue'



const  routes = [
  {
    path:'/',
    name:'home',
    component:Home
  },
  {
    path:'/about',
    name:'about',
    component:About
  },
  {
    path:'/products',
    name:'products',
    component:Products
  },
  {
    path:'/products/:id',
    name:'product-details',
    component:ProductDetail,
    props:true
  },
  {
    path:'/contact',
    name:'contact',
    component:Contact
  }
]


const router = createRouter({
  history:createWebHistory(),
  routes:routes,

  scrollBehavior:function(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return{top:0}
    }
  }
})

export default router


