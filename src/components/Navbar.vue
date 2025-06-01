
<template>
   <nav class="navbar">
    <div class="nav-container">
      <a href="/" class="logo">
        <svg class="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M3 3h18v18H3V3z" stroke-width="2" />
        </svg>
        <span>StyleHub</span>
      </a>

      <div class="nav-links" >
        <a href="/" class="nav-item" :class="{active:activePage === 'home'}">Home</a>
        <a href="/about" class="nav-item" :class="{active:activePage === 'about'}">About Us</a>
        <a href="/products" class="nav-item" :class="{active:activePage === 'products'}">Products</a>
        <a href="/contact" class="nav-item" :class="{active:activePage === 'contact'}">Contact Us</a>
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
      <a href="/" class="mobile-link active" :class="{active:activePage === 'home'}" @click="setActive('home')">Home</a>
      <a href="/about" class="mobile-link"  :class="{active:activePage === 'about'}" @click="setActive('about')">About Us</a>
      <a href="/products" class="mobile-link" :class="{active:activePage === 'products'}" @click="setActive('products')">Products</a>
      <a href="/contact" class="mobile-link" :class="{active:activePage === 'contact'}" @click="setActive('contact')">Contact Us</a>
    </div>
  </nav>

</template>

<script>

export default {
    data(){
        return{
            isOpen:false,
            activePage:'home'
        }
    },
    methods:{
        toggleMenu(){
            this.isOpen = !this.isOpen;
        },
        setActive(page){
            this.activePage = page;
            this.isOpen = false
        }
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
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
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
  font-size: 20px;
  font-weight: bold;
  color: #3b2f2f;
  text-decoration: none;
}

.icon {
  width: 28px;
  height: 28px;
  color: #8b5e3c; 
}

.nav-links {
  display: flex;
  gap: 32px;
}

.nav-item {
  position: relative;
  color: #8b5e3c;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-item:hover,
.nav-item.active {
  color: #6b4226; 
}

.nav-item.active::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  right: 0;
  height: 2px;
  background-color: #8b5e3c;
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
  color: #8b5e3c;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.3s;
}

.mobile-link:hover,
.mobile-link.active {
  background-color: #fdf6f1;
  color: #6b4226;
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