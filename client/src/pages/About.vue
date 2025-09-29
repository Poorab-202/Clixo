<template>
  <div class="about-page">
    <!-- Hero Section -->
    <section class="about-hero">
      <h1>About <span class="brand">Clixo</span></h1>
      <p class="tagline">
        We’re here to make online shopping simple, fast, and delightful.  
        Discover products you’ll love, delivered with care.
      </p>
    </section>

    <!-- Mission & Vision -->
    <section class="mission">
      <div class="mission-card">
        <h2>🌟 Our Mission</h2>
        <p>
          To provide top-quality products at fair prices, while delivering an exceptional shopping experience.
        </p>
      </div>
      <div class="mission-card">
        <h2>🚀 Our Vision</h2>
        <p>
          To become your trusted one-stop online store — where style, convenience, and value come together.
        </p>
      </div>
    </section>

    <!-- Team Section -->
    <section class="team">
      <h2>Meet Our Team</h2>
      <div class="team-grid">
        <div class="team-card" v-for="(member, i) in team" :key="i">
          <img :src="member.image" :alt="member.name" class="team-image" />
          <h3>{{ member.name }}</h3>
          <p class="role">{{ member.role }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const team = [
  {
    name: "Aarav Sharma",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya Kapoor",
    role: "Head of Marketing",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rohan Mehta",
    role: "Lead Developer",
    image: "https://randomuser.me/api/portraits/men/28.jpg"
  }
]
</script>

<style scoped>
.about-page {
  background: #ffffff;
  color: #3B0270; /* Dark Purple */
}

/* Hero Section */
.about-hero {
  text-align: center;
  padding: 4rem 2rem 2rem;
  background: linear-gradient(135deg, #E9B3FB 0%, #FFF1F1 100%);
  border-radius: 0 0 20px 20px;
}

.about-hero h1 {
  font-size: 2.5rem;
  font-weight: 700;
}

.about-hero .brand {
  color: #6F00FF; /* Bright Purple */
}

.about-hero .tagline {
  margin-top: 1rem;
  font-size: 1.2rem;
  color: #444;
}

/* Mission & Vision */
.mission {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 2rem;
}

.mission-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.mission-card:hover {
  transform: translateY(-4px);
}

.mission-card h2 {
  margin-bottom: 1rem;
  color: #6F00FF; /* Bright Purple */
}

/* Team Section */
.team {
  background: #F9F9F9;
  padding: 3rem 2rem;
  margin-top: 3rem;
  text-align: center;
}

.team h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
}

.team-card {
  background: #ffffff;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;
}

.team-card:hover {
  transform: translateY(-4px);
}

.team-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1rem;
  border: 3px solid #E9B3FB; /* Light Purple */
}

.role {
  color: #666;
  font-size: 0.95rem;
}
</style>
