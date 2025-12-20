<!-- views/EducationalResourcesView.vue -->
<template>
  <main class="educational-resources-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Educational Resources</h1>
      </div>
    </section>

    <section class="section intro-section">
      <div class="responsive-container">
        <div class="intro-content">
          <h2 class="section-title">Welcome to the GDCAU Learning & Support Portal</h2>
          <p class="intro-text">
            Your gateway to green and sustainability learning across Central Asia.
          </p>
          <p class="description-text">
            The GDCAU Learning & Support Portal is the central access point for students and educators across Central Asia who want to deepen their understanding of sustainability, regeneration, and the green innovation. It provides practical tools, guidance, and open educational materials to support learning, teaching, and student development across all partner universities.
          </p>
          <p class="description-text">
            This portal has two main sections:
          </p>
          <ul class="sections-list">
            <li><strong>Student Support & Development</strong> - Short guides, templates, and skill-building resources to help you succeed in your sustainability and regenerative studies.</li>
            <li><strong>Open Educational Resources</strong> - A growing library of openly accessible teaching materials, case studies, and tools.</li>
          </ul>
          <p class="description-text">
            If you have suggestions or would like to contribute materials, we welcome your input as the portal continues to grow.
          </p>
        </div>
      </div>
    </section>

    <section class="section tiles-section">
      <div class="responsive-container">
        <div class="tiles-grid">
          <router-link 
            to="/educational-resources/student-support" 
            class="resource-tile"
          >
            <div class="tile-content">
              <h3 class="tile-title">Student Support & Development</h3>
              <p class="tile-description">
                Short guides, templates, and skill-building resources to help you succeed in your sustainability and regenerative studies.
              </p>
            </div>
          </router-link>

          <router-link 
            to="/educational-resources/open-education" 
            class="resource-tile"
          >
            <div class="tile-content">
              <h3 class="tile-title">Open Education Resources</h3>
              <p class="tile-description">
                A growing library of openly accessible teaching materials, case studies, and tools for educators and students.
              </p>
            </div>
          </router-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
// No specific logic needed for this component
</script>

<style scoped>
.educational-resources-page {
  font-family: 'Inter', system-ui, sans-serif;
  background: #f8fafc;
}

.hero-section {
  min-height: 40vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: linear-gradient(45deg, rgba(34, 140, 61, 0.9), rgba(66, 184, 131, 0.9)),
              url('/src/assets/main_back.png') center/cover fixed;
  padding: 2rem 1rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease forwards;
}

.section {
  padding: 4rem 0;
  position: relative;
}

.responsive-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.intro-section {
  background: linear-gradient(45deg, #f8fff8, #ffffff);
}

.section-title {
  font-size: 2.5rem;
  color: #228c3d;
  text-align: center;
  margin-bottom: 2rem;
  font-weight: 700;
}

.intro-text {
  font-size: 1.4rem;
  text-align: center;
  color: #444;
  margin-bottom: 2rem;
  font-weight: 600;
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
  text-align: center;
}

.sections-list {
  max-width: 800px;
  margin: 2rem auto;
  padding-left: 2rem;
  text-align: left;
}

.sections-list li {
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: #555;
}

.tiles-section {
  background: #ffffff;
}

.tiles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 3rem;
  max-width: 900px;
  margin: 0 auto;
}

.resource-tile {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  display: block;
}

.resource-tile::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 4px;
  background: #228c3d;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.resource-tile:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(34, 140, 61, 0.15);
  border-color: #228c3d;
}

.resource-tile:hover::before {
  transform: scaleX(1);
}

.tile-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tile-title {
  font-size: 1.5rem;
  color: #228c3d;
  margin-bottom: 1rem;
  font-weight: 700;
}

.tile-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #64748b;
  flex-grow: 1;
}

.coming-soon {
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background: #f1f5f9;
  color: #64748b;
  border-radius: 8px;
  font-size: 0.9rem;
  font-weight: 600;
  text-align: center;
  display: inline-block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .tiles-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .resource-tile {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2rem;
  }
  
  .responsive-container {
    padding: 0 1rem;
  }
  
  .resource-tile {
    padding: 1.5rem;
  }
}
</style>