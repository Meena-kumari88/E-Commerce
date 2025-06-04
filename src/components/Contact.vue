<template>
  <div>
    <!-- Hero Section -->
    <section class="contact-hero-section">
      <div class="hero-background">
        <img 
          src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Contact Us" 
          class="hero-image"
        />
      </div>
      <div class="contact-hero-content">
        <h1>Contact Us</h1>
        <p>We'd love to hear from you! Reach out with any questions, feedback, or inquiries.</p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-section">
      <div class="contact-container">
        <div class="form-info-wrapper">
          <!-- Contact Form -->
          <div class="form-box">
            <h2>Get In Touch</h2>

            <div v-if="isSubmitted" class="success-message">
              <p>Thank you for your message! We will get back to you as soon as possible.</p>
            </div>

            <form @submit.prevent="handleSubmit">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" v-model="formData.name" required />
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="formData.email" required />
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="formData.subject" required/>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" rows="5"  required></textarea>
              </div>

              <button type="submit" class="submit-button">Send Message</button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="info-box">
            <h2>Contact Information</h2>

            <div class="info-item">
              <strong><i class="fas fa-map-marker-alt"></i>Our Address:</strong>
              <p>123 Fashion Street, Style City, SC 12345</p>
            </div>

            <div class="info-item">
              <strong> <i class="fas fa-envelope"></i>Email Us:</strong>
              <p>info@stylehub.com</p>
              <p>support@stylehub.com</p>
            </div>

            <div class="info-item">
              <strong><i class="fas fa-phone-alt"></i>Call Us:</strong>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="map-container">
        <h2>Find Us</h2>
        <div class="map-placeholder">
           <p>Map Placeholder - In a real app, a Google Map would be displayed here</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: { name: '', email: '', subject: '', message: '' },
      errors: {},
      isSubmitted: false
    };
  },
  methods: {
    handleSubmit() {

      if (Object.keys(this.errors).length === 0) {
        this.isSubmitted = true;
        this.formData = { name: '', email: '', subject: '', message: '' };
      }
    }
  }
};
</script>

<style>
*{
  font-family: sans-serif;
}
.contact-hero-section {
  position: relative;
  color: white;
  padding: 100px 20px;
  text-align: left;
  background-color: #D97706
;
}
.hero-background {
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  overflow: hidden;
}
.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.2;
}
.contact-hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 4rem;
}
.contact-hero-content h1{
  font-size: 3rem;
}
.contact-hero-content p{
  font-size: 1.3rem;
}

.contact-section {
  padding: 60px 20px;
  background: white;
}
.contact-container {
  max-width: 1200px;
  margin: auto;
}
.form-info-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
}
.form-box, .info-box {
  flex: 1;
  min-width: 300px;
}
.info-box{
  background-color: #F9FAFB;
  padding: 0 2rem;
  border-radius: 12px;
}
.info-item i {
  background-color: #DBEAFE; 
  color: #2563eb;
  border-radius: 50%;        
  padding: 8px;              
  margin-right: 8px;         
  font-size: 1.3rem;
  width: 32px;
  height: 32px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
.info-item p{
  margin-left: 3.4rem;
}

.form-box h2, .info-box h2 {
  margin-bottom: 20px;
}
.success-message {
  background: #d4edda;
  padding: 15px;
  border: 1px solid #c3e6cb;
  color: #155724;
  margin-bottom: 20px;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.submit-button {
  padding: 10px 20px;
  background-color: #2563eb;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.submit-button:hover {
  background-color: #2c5282;
}
.info-item {
  margin-bottom: 20px;
}

.map-section {
  padding: 40px 20px;
  background: #f5f5f5;
}
.map-container {
  max-width: 1000px;
  margin: auto;
  text-align: center;
}
.map-placeholder {
  background: #ddd;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
@media(max-width:768px){
  .contact-hero-content {
    margin: 0 auto;
}
.contact-hero-content h1{
  font-size: 2rem;
}
.contact-hero-content p{
  font-size: 1rem;
}
}
</style>
