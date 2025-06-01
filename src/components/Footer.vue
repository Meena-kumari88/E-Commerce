<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>StyleHub</h3>
        <p>Elevating your style with premium quality fashion products since 2023.</p>
        <div class="social-icons">
          <a href="#" aria-label="Facebook">
            <!-- Facebook Icon -->
            <a href="#" class="social-icon" aria-label="Facebook">
                 <i class="fab fa-facebook-f"></i>
            </a>
          </a>
          <a href="#" class="social-icon" aria-label="Instagram">
             <i class="fab fa-instagram"></i>
          </a>
         <a href="#" class="social-icon" aria-label="Twitter">
             <i class="fab fa-twitter"></i>
        </a>
        </div>
      </div>

      <div class="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/contact">Contact Us</router-link></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Categories</h4>
        <ul>
          <li><a href="#">Men's Fashion</a></li>
          <li><a href="#">Women's Fashion</a></li>
          <li><a href="#">Accessories</a></li>
          <li><a href="#">Footwear</a></li>
        </ul>
      </div>

      <div class="footer-section">
        <h4>Contact</h4>
        <ul>
          <li>
            <span class="icon-text">📍</span>
            123 Fashion Street, Style City, SC 12345
          </li>
          <li>
            <span class="icon-text">📧</span>
            info@stylehub.com
          </li>
          <li>
            <span class="icon-text">📞</span>
            +1 (555) 123-4567
          </li>
        </ul>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 StyleHub. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup lang="ts">
// No logic needed
</script>

<style>
.footer {
  background-color: #111;
  color: #fff;
  padding: 60px 20px 40px;
  font-family: Arial, sans-serif;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: auto;
}

.footer-section h3, .footer-section h4 {
  margin-bottom: 15px;
  font-size: 18px;
}

.footer-section p,
.footer-section ul,
.footer-section li {
  font-size: 14px;
  color: #ccc;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section li {
  margin-bottom: 10px;
}

.footer-section a {
  color: #ccc;
  text-decoration: none;
}

.footer-section a:hover {
  color: #fff;
}

.social-icon {
  color: #888;
  font-size: 24px;
  margin-right: 15px;
  text-decoration: none;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #000;
}

.icon-text {
  margin-right: 8px;
}

.footer-bottom {
  text-align: center;
  color: #aaa;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #222;
  font-size: 13px;
}

</style>
