
<script setup>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
</script>

<template>
 <div class="app-container">
  <Navbar/>
  <main class="main-content">
    <router-view v-slot="{Component}">
       <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
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

.main-content {
  flex-grow: 1;
  width: 100%;         
}

</style>

