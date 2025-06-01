<template>
  <div>
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <img 
          src="https://images.pexels.com/photos/1416530/pexels-photo-1416530.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
          alt="Contact Us" 
          class="hero-image"
        />
      </div>
      <div class="hero-content">
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
                <input type="text" id="name" v-model="formData.name" :class="{ 'error-border': errors.name }" />
                <p v-if="errors.name" class="error-text">{{ errors.name }}</p>
              </div>

              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" v-model="formData.email" :class="{ 'error-border': errors.email }" />
                <p v-if="errors.email" class="error-text">{{ errors.email }}</p>
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input type="text" id="subject" v-model="formData.subject" :class="{ 'error-border': errors.subject }" />
                <p v-if="errors.subject" class="error-text">{{ errors.subject }}</p>
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" v-model="formData.message" rows="5" :class="{ 'error-border': errors.message }"></textarea>
                <p v-if="errors.message" class="error-text">{{ errors.message }}</p>
              </div>

              <button type="submit" class="submit-button">Send Message</button>
            </form>
          </div>

          <!-- Contact Information -->
          <div class="info-box">
            <h2>Contact Information</h2>

            <div class="info-item">
              <strong>Our Address:</strong>
              <p>123 Fashion Street, Style City, SC 12345</p>
            </div>

            <div class="info-item">
              <strong>Email Us:</strong>
              <p>info@stylehub.com</p>
              <p>support@stylehub.com</p>
            </div>

            <div class="info-item">
              <strong>Call Us:</strong>
              <p>+1 (555) 123-4567</p>
              <p>+1 (555) 987-6543</p>
            </div>

            <div class="info-item">
              <strong>Business Hours:</strong>
              <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 4:00 PM</p>
              <p>Sunday: Closed</p>
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
      this.errors = {};
      if (!this.formData.name) this.errors.name = 'Name is required';
      if (!this.formData.email) this.errors.email = 'Email is required';
      if (!this.formData.subject) this.errors.subject = 'Subject is required';
      if (!this.formData.message) this.errors.message = 'Message is required';

      if (Object.keys(this.errors).length === 0) {
        this.isSubmitted = true;
        this.formData = { name: '', email: '', subject: '', message: '' };
      }
    }
  }
};
</script>

<style>
.hero-section {
  position: relative;
  color: white;
  padding: 100px 20px;
  text-align: center;
  background-color: #2b6cb0;
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
.hero-content {
  position: relative;
  z-index: 10;
  max-width: 800px;
  margin: 0 auto;
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
  gap: 40px;
}
.form-box, .info-box {
  flex: 1;
  min-width: 300px;
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
  font-weight: bold;
}
input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
.error-text {
  color: red;
  font-size: 0.875em;
}
.error-border {
  border-color: red;
}
.submit-button {
  padding: 10px 20px;
  background-color: #2b6cb0;
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
</style>
