
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
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Main content should grow */
.main-content {
  flex-grow: 1;
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

