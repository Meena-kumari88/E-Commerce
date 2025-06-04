
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
 <div class="app-container">
  <Navbar/>
  <main class="main-content">
    <router-view v-slot="{Component}">
          <component :is="Component" />    
    </router-view>
  </main>
  <Footer/>
 </div>
</template>

<style>
.app-container {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  width: 100%;        
  overflow-x: hidden; 
}


</style>

