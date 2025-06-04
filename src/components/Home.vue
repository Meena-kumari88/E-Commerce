
<template>
    <div>
          <!-- Hero Section -->
    <section class="hero-section">
    <div class="hero-background">
      <img
        src="https://images.pexels.com/photos/5868722/pexels-photo-5868722.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="Fashion Banner"
        class="background-image"
      />
    </div>
    <div class="hero-content">
      <div class="text-content">
        <h1>Elevate Your Style with <br>StyleHub</h1>
        <p>Discover the latest fashion trends and premium quality products.</p>
        <div class="hero-buttons">
          <router-link to="/products" class="btn-primary">Shop Now</router-link>
          <router-link to="/about" class="btn-secondary">Learn More</router-link>
        </div>
      </div>
    </div>
  </section>

     <!-- Features Section -->
    <section class="features-section">
    <div class="features-container">
      <div class="feature-card slide-in">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3>Quality Products</h3>
        <p>We source only the finest materials for our products, ensuring durability and comfort.</p>
      </div>

      <div class="feature-card slide-in delay-1">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        <h3>Fast Delivery</h3>
        <p>We offer quick and reliable shipping to get your fashion favorites to you as soon as possible.</p>
      </div>

      <div class="feature-card slide-in delay-2">
        <div class="icon-wrapper">
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3>Secure Shopping</h3>
        <p>Shop with confidence knowing your transactions and personal data are protected.</p>
      </div>
    </div>
  </section>

  <!-- Featured Products -->    
   <section class="featured-section">
    <div class="container">
      <div class="text-center heading">
        <h2>Featured Products</h2>
        <p>Discover our most popular styles handpicked for you</p>
      </div>

      <div class="products-grid">
        <div
          v-for="product in featuredProducts"
          :key="product.id"
          class="product-card fade-in"
        >
          <router-link :to="`/products/${product.id}`" class="card-link">
            <div class="card">
              <img :src="product.image" :alt="product.name" />
              <div class="card-body">
                <h3>{{ product.name }}</h3>
                <p class="price">
                  {{ formatPrice(product.price) }}
                </p>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <div class="text-center btn-container">
        <router-link to="/products" class="view-all-btn">
          View All Products
        </router-link>
      </div>
    </div>
  </section>
    <!-- About Us Section -->
      <section class="about-section">
    <div class="container">
      <div class="content-wrapper">
        <div class="about-text-content">
          <h2>About StyleHub</h2>
          <p>
            Founded in 2023, StyleHub has quickly become a premier destination for fashion enthusiasts looking for quality apparel and accessories.
            Our mission is to provide stylish, high-quality products at accessible prices.
          </p>
          <p>
            We carefully curate our collections to offer the latest trends while ensuring durability and comfort.
            Our team of fashion experts is dedicated to helping you express your unique style.
          </p>
          <router-link to="/about" class="learn-more-btn">Learn More About Us</router-link>
        </div>
        <div class="image-content">
          <img
            src="https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="About StyleHub"
          />
        </div>
      </div>
    </div>
  </section>
    <!-- Contact Section -->
     <section class="get-in-touch">
    <div class="contact-container">
      <div class="text-center">
        <h2 class="title">Get In Touch</h2>
        <p class="description">
          Have questions or need assistance? We're here to help! Reach out to our team for prompt and friendly support.
        </p>
      </div>

      <div class="contact-wrapper">
        <router-link to="/contact" class="contact-button">
          Contact Us
        </router-link>

        <div class="call-info">
          <p class="info-text">Or call us directly</p>
          <p class="phone-number">+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import products from '../data/products'

// Use local products data (optional, if not passed as a prop)
const featuredProducts = ref(products.slice(0, 4))


function formatPrice(price) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR"
  }).format(price)
}
</script>


<style scoped>
*{
   font-family: sans-serif;
}
body{
overflow-x: hidden;
}
.hero-section {
  position: relative;
  background-color: #1a202c;
  color: white;
  overflow: hidden;
 height: 100vh;
}

.hero-background {
  position: absolute;
  inset: 0;
  z-index: 1;
  overflow: hidden;
}

.background-image {
  width: 100%;
  object-fit: cover;
  opacity: 0.4;

}

.hero-content {
  position: relative;
  z-index: 2;
  padding: 6rem 1rem;
  text-align: left;
  max-width: 1200px;
  margin: 0 auto;
}

.text-content h1 {
  font-size: 5.75rem;
  margin-bottom: 1rem;
  font-weight: bold;
  line-height: 1.2;
}

.text-content p {
  font-size: 1.5rem !important;
  margin-bottom: 2rem;
  color: #E5E7EB;
}

.hero-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn-primary {
  background-color: #2563EB;
  color: white;
  padding: 0.75rem 1.5rem;
  border: none;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  font-family: sans-serif;
  transition: background-color 0.3s ease;
}

.btn-primary:hover {
  background-color: #007bff;
}

.btn-secondary {
  background-color: white;
  color: #1a202c;
  padding: 0.75rem 1.5rem;
  border: none;
  text-decoration: none;
  font-size: 1rem;
  border-radius: 5px;
  font-family: sans-serif;
  transition: background-color 0.3s ease;
}

.btn-secondary:hover {
  background-color: #f0f0f0;
}

@media (max-width: 1050px) {
  .text-content h1 {
    font-size: 3rem;
  }

  .text-content p {
    font-size: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .hero-content {
    padding: 10rem 1rem;
  }

  .text-content h1 {
    font-size: 4rem;
  }
}

.features-section {
  padding: 4rem 1rem;
  background-color: #ffffff;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

@media (min-width: 768px) {
  .features-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

.feature-card {
  background-color: #f9fafb;
  padding: 2rem;
  border-radius: 10px;
  text-align: center;
  transition: transform 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSlideIn 0.8s forwards;
}

.feature-card:hover {
  transform: translateY(-5px);
}

.icon-wrapper {
  width: 64px;
  height: 64px;
  background-color: #dbeafe;
  color: #2563eb;
  border-radius: 50%;
  margin: 0 auto 1rem auto;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 32px;
  height: 32px;
}

.feature-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.feature-card p {
  font-size: 1rem;
  /* color: #4b5563; */
}

/* Animation */
@keyframes fadeSlideIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.delay-1 {
  animation-delay: 0.2s;
}

.delay-2 {
  animation-delay: 0.4s;
}

.featured-section {
  background-color: #f9fafb;
  padding: 4rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.heading {
  text-align: center;
  margin-bottom: 3rem;
}

.heading h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.heading p {
  max-width: 600px;
  margin: 0 auto;
  color: #4B5563;
  font-size: 1.3rem;
}

.products-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
}

@media (min-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

.product-card {
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

.card-link {
  text-decoration: none;
  color: inherit;
  height: 100%;
  display: block;
}

.card {
  background-color: #ffffff;
  border-radius: 10px;
  overflow: hidden;
  /* height: 100%; */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.card:hover {
  transform: translateY(-5px);
}

.card img {
  width: 100%;
  height: 12rem;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-body h3 {
  font-size: 1rem;
  font-weight: 500;
  color: #111827;
}

.card-body .price {
  margin-top: 0.5rem;
  font-weight: bold;
  color: #1d4ed8;
}

.btn-container {
  margin-top: 2rem;
}

.view-all-btn {
  display: inline-block;
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  margin-top: 2.5rem;
}

.view-all-btn:hover {
  background-color: #1d4ed8;
}

/* Animation */
@keyframes fadeIn {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-section {
  background-color: #ffffff;
  padding: 4rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
}

@media (min-width: 768px) {
  .content-wrapper {
    flex-direction: row;
    gap: 4rem;
  }
}

.about-text-content {
  flex: 1;
}

.about-text-content h2 {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.about-text-content p {
  margin-bottom: 1.5rem;
  line-height: 1.6;
  font-size: 1rem;
   color: #4B5563;
   font-family: sans-serif;
}

.learn-more-btn {
  display: inline-block;
  background-color: #2563eb;
  color: white;
  padding: 0.75rem 1.5rem;
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.learn-more-btn:hover {
  background-color: #1d4ed8;
}

.image-content {
  flex: 1;
}

.image-content img {
  width: 100%;
  height: auto;
  border-radius: 10px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
  object-fit: cover;
}

.get-in-touch {
  background-color: #f9fafb;
  padding: 4rem 1rem;
}

.contact-container {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
}

.title {
  font-size: 2.4rem;
  font-weight: bolder;
  margin-bottom: 1rem;
  color: #1F2937;
  font-family: sans-serif;
}


.description {
  max-width: 600px;
  margin: 0 auto 2rem auto;
  color: #4b5563;
  font-size: 1.2rem;
  line-height: 1.6;
}

.contact-wrapper {
  max-width: 400px;
  margin: 0 auto;
}

.contact-button {
  display: block;
  background-color: #2563eb;
  color: #ffffff;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  text-align: center;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 500;
  transition: background-color 0.3s ease;
}

.contact-button:hover {
  background-color: #1d4ed8;
}

.call-info {
  margin-top: 2rem;
}

.info-text {
  color: #4b5563;
  font-size: 0.95rem;
}

.phone-number {
  margin-top: 0.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  color: #111827;
}
</style>