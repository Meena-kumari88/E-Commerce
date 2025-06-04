
<template>
   <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="logo">
        <span>StyleHub</span>
      </router-link>

      <div class="nav-links" >
        <router-link to="/" class="nav-item" :class="{active: $route.path === '/'}">Home</router-link>
        <router-link to="/about" class="nav-item" :class="{active: $route.path === '/about'}">About Us</router-link>
        <router-link to="/products" class="nav-item" :class="{active: $route.path === '/products'}">Products</router-link>
        <router-link to="/contact" class="nav-item" :class="{active: $route.path === '/contact'}">Contact Us</router-link>
      </div>

      <button class="mobile-btn" @click="toggleMenu">
        <svg v-if="!isOpen"  class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M4 6h16M4 12h16M4 18h16" stroke-width="2"/>
        </svg>
        <svg v-else id="closeIcon" class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M6 18L18 6M6 6l12 12" stroke-width="2" />
        </svg>
      </button>
    </div>

    <div v-if="isOpen" class="mobile-menu" >
      <router-link to="/" class="mobile-link " :class="{active: $route.path === '/'}" @click="setActive('home')">Home</router-link>
      <router-link to="/about" class="mobile-link"  :class="{active: $route.path === '/about'}" @click="setActive('about')">About Us</router-link>
      <router-link to="/products" class="mobile-link" :class="{active: $route.path === '/products'}" @click="setActive('products')">Products</router-link>
      <router-link to="/contact" class="mobile-link" :class="{active: $route.path === '/contact'}" @click="setActive('contact')">Contact Us</router-link>
    </div>
  </nav>

</template>

<script>

export default {
    data(){
        return{
            isOpen:false,
        }
    },
    methods:{
        toggleMenu(){
            this.isOpen = !this.isOpen;
        },
            }
}
</script>

<style scoped>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
.navbar {
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(4px);
  position: sticky;
  top: 0;
  z-index: 999;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem;
  font-weight: bolder;
  color: #1D4ED8;
  text-decoration: none;
}

.icon {
  width: 28px;
  height: 28px;
  color: #1D4ED8; 
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-item {
  position: relative;
  font-weight: bolder;
  color: #374151;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 1rem;

}

.nav-item:hover,
.nav-item.active {
  color:#1D4ED8; 
}

.nav-item.active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #1D4ED8;
  border-radius: 9999px;
}

.mobile-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-menu {
  display: flex;
  flex-direction: column;
  background-color: white;
  border-top: 1px solid #ddd;
  padding: 12px 16px;
}

.mobile-link {
  padding: 10px 0;
  color: #374151;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
}

.mobile-link:hover,
.mobile-link.active {
  background-color: #fdf6f1;
  color: #1D4ED8;
}

.hidden {
  display: none;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-links {
    display: none;
  }

  .mobile-btn {
    display: block;
  }
}


</style>