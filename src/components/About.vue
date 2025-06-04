<template>
  <div>
    <!-- Hero Section -->
    <section class="about-hero-section">
      <div class="hero-background">
        <img 
          src="https://images.pexels.com/photos/4132651/pexels-photo-4132651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="About Us" 
        />
      </div>
      <div class="about-hero-content">
        <h1>About StyleHub</h1>
        <p>Learn about our story, mission behind StyleHub.</p>
      </div>
    </section>

    <!-- Our Story -->
    <section class="our-story">
      <div class="our-story-container">
        <div class="our-story-image">
          <img 
            src="https://images.pexels.com/photos/1336873/pexels-photo-1336873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
            alt="Our Story"
          />
        </div>
        <div class="our-story-text">
          <h2>Our Story</h2>
          <p>
            StyleHub was born from a passion for fashion and a desire to make quality clothing accessible to everyone. Founded in 2023, our journey began when our founder, Sarah Chen, noticed a gap in the market for affordable yet high-quality fashion.
          </p>
          <p>
            What started as a small online boutique has grown into a comprehensive fashion destination, offering everything from casual wear to formal attire and accessories. Throughout our growth, we've maintained our commitment to quality, sustainability, and customer satisfaction.
          </p>
          <p>
            Today, StyleHub serves thousands of customers worldwide, helping them express their unique style with confidence. We continue to evolve and expand our collections, always staying true to our founding principles.
          </p>
        </div>
      </div>
    </section>
     <!-- Our Mission -->
    <section class="our-mission">
      <div class="container">
        <div class="text-center">
          <h2 class="section-title">Our Mission</h2>
          <p class="section-description">
            At StyleHub, our mission is to empower individuals through fashion, providing high-quality, stylish products that help our customers express their unique identity with confidence.
          </p>

          <div class="mission-cards">
            <div class="card">
              <div class="icon"><i class="fas fa-gem"></i></div>
              <h3 class="card-title">Quality</h3>
              <p class="card-text">We source the finest materials and partner with ethical manufacturers to create products that last.</p>
            </div>

            <div class="card">
              <div class="icon"><i class="fas fa-universal-access"></i></div>
              <h3 class="card-title">Accessibility</h3>
              <p class="card-text">We believe that great fashion should be accessible to everyone, regardless of budget.</p>
            </div>

            <div class="card">
              <div class="icon"><i class="fas fa-leaf"></i></div>
              <h3 class="card-title">Sustainability</h3>
              <p class="card-text">We're committed to reducing our environmental impact through responsible practices.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container text-center">
        <h2 class="section-title">Join the StyleHub Community</h2>
        <p class="section-description">
          Discover the latest trends, exclusive offers, and fashion tips by connecting with us.
        </p>
        <div class="cta-buttons">
          <router-link to="/products" class="btn primary">Shop Now</router-link>
          <router-link to="/contact" class="btn outline">Contact Us</router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<style>
*{
  font-family: sans-serif;
}
/* Hero Section */
.about-hero-section {
  position: relative;
  background-color: #D97706;
  color: white;
  padding: 100px 20px;
  text-align: center;
  overflow: hidden;
}

.hero-background img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
  z-index: 0;
}

.about-hero-content {
  position: relative;
  z-index: 1;
  max-width: 800px;
  text-align: left;
 
}

.about-hero-content h1 {
  font-size: 3rem;
  margin-bottom: 20px;
}

.about-hero-content p {
  font-size: 1.25rem;
}

/* Our Story Section */
.our-story {
  padding: 80px 20px;
  background-color: white;
}

.our-story-container {
  display: flex;
  flex-direction: column-reverse;
  gap: 40px;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .our-story-container {
    flex-direction: row;
    align-items: center;
  }
}

.our-story-image img {
  width: 100%;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.our-story-text h2 {
  font-size: 30px;
  margin-bottom: 20px;
}

.our-story-text p {
  color: #444;
  margin-bottom: 15px;
  line-height: 1.6;
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.text-center {
  text-align: center;
}

.section-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.section-description {
  font-size: 1.1rem;
  color: #ffffff;
  margin-bottom: 2rem;
}

.mission-cards {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
}

.card {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  flex: 1;
  text-align: left;
  margin-bottom: 2rem;
}

.icon {
  font-size: 2rem;
  margin-bottom: 10px;
}

.card-title {
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 10px;
}

.card-text {
  font-size: 1rem;
  color: #666;
}

.cta-section {
  background-color: #2563eb;
  color: white;
  padding: 60px 20px;
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

.btn {
  padding: 12px 24px;
  border: none;
  font-size: 1rem;
  cursor: pointer;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.btn.primary {
  background-color: white;
  color: #2a4365;
}

.btn.primary:hover {
  background-color: #f0f0f0;
}

.btn.outline {
  border: 2px solid white;
  background: none;
  color: white;
}

.btn.outline:hover {
  background-color: white;
  color: #2a4365;
}

</style>
