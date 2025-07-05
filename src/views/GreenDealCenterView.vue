<template>
  <div class="section">
    <h1 class="section-title">Green Deal Center for Evidence-based Education, Research, Innovation and Public Outreach</h1>
    
    <div class="description-text">
      <p>The Green Deal Center (GDC) for Evidence-based Education, Research, Innovation, and Public Outreach is a leading hub for sustainability and regenerative education, research, and innovative collaboration across Eurasia. With hubs at 10 central Asian universities across Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan—as well as Constructor University in Germany—the GDC is a prominent gateway for ESG and green collaboration between universities, private businesses, governmental ministries, and NGOs in the EU and central Asia. </p>
      <p>For more information, news, events, resources, and ways to get involved, visit the website of your local GDC Hub below. Or get in touch with the GDC EU Hub Director, Dr. Zachary Reyna, zreyna@constructor.university.</p>
    </div>

    <div class="gdc-links">
      <!-- <router-link to="/educational-resources" class="gdc-card">
        <h3>Educational Resources</h3>
        <p>Learning materials and courses</p>
      </router-link> -->

      <!-- <router-link to="/publications" class="gdc-card">
        <h3>Publications</h3>
        <p>Research papers and articles</p>
      </router-link> -->

      <router-link to="/hubs-contacts" class="gdc-card">
        <h3>Hubs & Contacts</h3>
        <p>Our locations and contacts</p>
      </router-link>
	  <!-- <router-link to="/news" class="gdc-card">
  <h3>News & Events</h3>
  <p>Latest updates and announcements</p>
</router-link> -->
    </div>
  </div>
</template>

<style scoped>
.section {
  padding: 6rem 0;
}

.section-title {
  font-size: 2.8rem;
  line-height: 1.2;
  text-align: center;
  margin-bottom: 3rem;
  color: #2a7d2e;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  animation: fadeIn 1s ease;
  opacity: 0;
  animation-fill-mode: forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.description-text {
  max-width: 800px;
  margin: 0 auto 4rem;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
  position: relative;
  padding: 2rem;
  background: linear-gradient(45deg, #f8fff8, #ffffff);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(34, 140, 61, 0.1);
}

.description-text p {
  margin-bottom: 1.5rem;
  position: relative;
  padding-left: 1.5rem;
}

.description-text p::before {
  content: '🌿';
  position: absolute;
  left: -1.2rem;
  top: 0.2rem;
  font-size: 1.2em;
}

.gdc-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 3rem auto;
  padding: 0 1rem;
}

.gdc-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  text-align: center;
  text-decoration: none;
  color: #1e293b;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 6px rgba(34, 140, 61, 0.05);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
}

.gdc-card::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #228c3d;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.gdc-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(34, 140, 61, 0.15);
  border-color: #228c3d;
}

.gdc-card:hover::before {
  transform: scaleX(1);
}

.gdc-card h3 {
  color: #228c3d;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  font-weight: 700;
  transition: color 0.3s ease;
}

.gdc-card:hover h3 {
  color: #1a5d38;
}

.gdc-card p {
  color: #64748b;
  font-size: 0.95rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2.2rem;
    padding: 0 1rem;
  }
  
  .description-text {
    padding: 1.5rem;
    margin-bottom: 2rem;
  }
  
  .gdc-links {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }
  
  .description-text {
    font-size: 1rem;
    padding: 1rem;
  }
  
  .gdc-card {
    padding: 1.5rem;
  }
}
</style>