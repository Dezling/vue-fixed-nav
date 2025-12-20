<!-- views/StudentSupportView.vue -->
<template>
  <main class="student-support-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Student Support & Development</h1>
      </div>
    </section>

    <section class="section intro-section">
      <div class="responsive-container">
        <div class="intro-content">
          <h2 class="section-title">Student Support & Development</h2>
          <p class="intro-text">
            Practical tools, guides, and resources to help you learn, grow, and contribute to regenerative futures.
          </p>
          <p class="description-text">
            The Student Support & Development section is your space to build the skills, confidence, and knowledge needed to engage with sustainability, ESG, and regenerative practices across Central Asia and beyond.
          </p>
          <p class="description-text">
            Here you will find short guides, templates, and skills resources that make your learning easier and more effective—whether you are writing an academic essay, interpreting environmental data, planning a sustainability project, or preparing for a green career.
          </p>
          <h3 class="what-youll-find">What You'll Find Here</h3>
        </div>
      </div>
    </section>

    <section class="section tiles-section">
      <div class="responsive-container">
        <div class="support-tiles-grid">
          <router-link 
            to="/educational-resources/how-and-why" 
            class="support-tile"
          >
            <div class="tile-content">
              <h3 class="tile-title">How and Why to Study Sustainability at your University</h3>
              <p class="tile-description">
                Guidance on how to study sustainability at your university, including individual learning pathways, course listings, and contact information.
              </p>
            </div>
          </router-link>

          <router-link 
            to="/educational-resources/academic-skills" 
            class="support-tile"
          >
            <div class="tile-content">
              <h3 class="tile-title">Academic Skills for Sustainability & Regeneration</h3>
              <p class="tile-description">
                Short, practical guides to help you complete core sustainability assignments and tasks.
              </p>
            </div>
          </router-link>

          <router-link 
            to="/educational-resources/regenerative-tools" 
            class="support-tile"
          >
            <div class="tile-content">
              <h3 class="tile-title">Regenerative Learning Tools</h3>
              <p class="tile-description">
                Resources for hands-on regenerative projects and the core ideas behind regeneration.
              </p>
            </div>
          </router-link>

          <router-link 
            to="/educational-resources/green-skills" 
            class="support-tile"
          >
            <div class="tile-content">
              <h3 class="tile-title">Green Skills & Career Pathways</h3>
              <p class="tile-description">
                Support for developing future-ready green skills and exploring sustainability and ESG career options.
              </p>
              <div class="coming-soon">Coming soon</div>
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
.student-support-page {
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
  font-size: 3rem;
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
  margin-bottom: 1.5rem;
  font-weight: 700;
}

.intro-text {
  font-size: 1.3rem;
  text-align: center;
  color: #444;
  margin-bottom: 2rem;
  font-weight: 600;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

.description-text {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #555;
  margin-bottom: 1.5rem;
  text-align: center;
  max-width: 900px;
  margin-left: auto;
  margin-right: auto;
}

.what-youll-find {
  font-size: 1.8rem;
  color: #228c3d;
  text-align: center;
  margin-top: 3rem;
  font-weight: 600;
}

.tiles-section {
  background: #ffffff;
}

.support-tiles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.support-tile {
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
  min-height: 200px;
}

.support-tile::before {
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

.support-tile:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(34, 140, 61, 0.15);
  border-color: #228c3d;
}

.support-tile:hover::before {
  transform: scaleX(1);
}

.tile-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tile-title {
  font-size: 1.3rem;
  color: #228c3d;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.4;
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
    font-size: 2.2rem;
  }
  
  .support-tiles-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .support-tile {
    padding: 2rem;
    min-height: auto;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .what-youll-find {
    font-size: 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .responsive-container {
    padding: 0 1rem;
  }
  
  .support-tile {
    padding: 1.5rem;
  }
}
</style>