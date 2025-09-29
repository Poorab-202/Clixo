<template>
  <footer class="footer">
    <div class="footer-container">
  
      <div class="footer-brand">
        <img src="/logo.png" alt="Clixo Logo" class="h-26 w-26 object-contain" />
        <p class="tagline">Your trusted online shop for everything ✨</p>
      </div>

      <!-- Navigation -->
      <div class="footer-links">
        <h3>Quick Links</h3>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/products">Products</router-link></li>
          <li><router-link to="/about">About Us</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </div>

      <!-- Contact Info -->
      <div class="footer-contact">
        <h3>Get in Touch</h3>
        <p>📍 123 Street, Marine Drive, Raipur, Chhattisgarh</p>
        <p>📞 +91 98765 43210</p>
        <p>✉️ support@clixo.com</p>
      </div>
    </div>

    <!-- Bottom -->
    <div class="footer-bottom">
      <p>© {{ new Date().getFullYear() }} Clixo. All Rights Reserved.</p>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
  background: #3B0270; /* Dark Purple */
  color: #FFF1F1; /* Soft Pink text */
  padding: 3rem 2rem 1rem;
  margin-top: 4rem;
}

.footer-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-brand .logo {
  height: 50px;
  margin-bottom: 0.8rem;
}

.footer-brand .tagline {
  font-size: 0.95rem;
  color: #E9B3FB; /* Light Purple */
}

.footer-links h3,
.footer-contact h3 {
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  color: #E9B3FB; /* Light Purple */
}

.footer-links ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-links li {
  margin: 0.4rem 0;
}

.footer-links a {
  color: #FFF1F1;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-links a:hover {
  color: #E9B3FB; /* Light Purple */
}

.footer-contact p {
  margin: 0.3rem 0;
  font-size: 0.95rem;
}

.footer-bottom {
  text-align: center;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255, 241, 241, 0.2);
  margin-top: 2rem;
  font-size: 0.85rem;
  color: #E9B3FB;
}
</style>
