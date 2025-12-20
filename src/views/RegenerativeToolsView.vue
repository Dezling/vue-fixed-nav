<!-- views/RegenerativeToolsView.vue -->
<template>
  <main class="regenerative-tools-page">
    <section class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">Regenerative Learning Tools</h1>
      </div>
    </section>

    <section class="section intro-section">
      <div class="responsive-container">
        <div class="intro-content">
          <h2 class="section-title">Regenerative Learning Skills</h2>
          <p class="intro-text">
            To understand sustainability and regeneration, students need more than knowledge—they need tools, mindsets, and collaborative skills.
          </p>
          <p class="description-text">
            This section offers practical guides to help you think in systems, design real-world solutions, and build collective projects that restore ecosystems and strengthen communities. These short guides are built for students in Central Asia, with local examples and simple methods for observation, reflection, and action.
          </p>
          <p class="description-text">
            Whether you're just starting to explore environmental issues or already involved in campus initiatives, these learning tools support you in becoming an active co-creator of regenerative change.
          </p>
        </div>
      </div>
    </section>

    <section class="section guides-section">
      <div class="responsive-container">
        <div class="guides-header">
          <h2 class="section-title">Core Learning Guides</h2>
          <p class="guides-intro">
            So far, this series includes three core guides:
          </p>
        </div>

        <div class="guides-grid">
          <div 
            v-for="guide in guides" 
            :key="guide.id"
            class="guide-card"
          >
            <div class="guide-icon">📘</div>
            <h3 class="guide-title">{{ guide.title }}</h3>
            <p class="guide-description">{{ guide.description }}</p>
            <a 
              :href="guide.filePath" 
              class="download-button"
              target="_blank"
            >
              <span>Download Guide</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 16L12 4M12 16L8 12M12 16L16 12" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M4 20H20" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="section upcoming-section">
      <div class="responsive-container">
        <div class="upcoming-content">
          <h2 class="section-title">Expand Your Skills</h2>
          <p class="description-text">
            Upcoming guides will expand your skills in starting micro-projects, engaging with traditional ecological knowledge, practicing collaboration, and reimagining sustainable futures.
          </p>
          <p class="description-text highlight">
            Use them flexibly—in class, clubs, or personal projects—as stepping stones toward a more regenerative university and region.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const guides = ref([
  {
    id: 1,
    title: 'What Is Regeneration?',
    description: 'Grounding you in the meaning and purpose of regenerative thinking',
    filePath: '/pdf/WhatisRegeneration.pdf'
  },
  {
    id: 2,
    title: 'Systems Thinking for Sustainability: A Beginner\'s Toolkit',
    description: 'Helping you understand patterns, feedback, and interdependence',
    filePath: '/pdf/WhatisSystemsThinking.pdf'
  },
  {
    id: 3,
    title: 'The Regenerative Cycle: From Observation to Action',
    description: 'A 5-step process for turning ideas into meaningful campus or community action',
    filePath: '/pdf/RegenerativeCycle.pdf'
  }
])
</script>

<style scoped>
.regenerative-tools-page {
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
  margin-bottom: 2rem;
  font-weight: 700;
}

.intro-text {
  font-size: 1.4rem;
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

.guides-section {
  background: #ffffff;
}

.guides-header {
  text-align: center;
  margin-bottom: 3rem;
}

.guides-intro {
  font-size: 1.2rem;
  color: #64748b;
  font-weight: 500;
}

.guides-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2.5rem;
  max-width: 1100px;
  margin: 0 auto;
}

.guide-card {
  background: white;
  border-radius: 16px;
  padding: 2.5rem;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.guide-card::before {
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

.guide-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(34, 140, 61, 0.15);
  border-color: #228c3d;
}

.guide-card:hover::before {
  transform: scaleX(1);
}

.guide-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.guide-title {
  font-size: 1.4rem;
  color: #228c3d;
  margin-bottom: 1rem;
  font-weight: 700;
  line-height: 1.4;
}

.guide-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #64748b;
  margin-bottom: 2rem;
  flex-grow: 1;
}

.download-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: #228c3d;
  color: white;
  text-decoration: none;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 2px solid #228c3d;
}

.download-button:hover {
  background: transparent;
  color: #228c3d;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(34, 140, 61, 0.2);
}

.upcoming-section {
  background: linear-gradient(135deg, #f0fdf4, #dcfce7);
}

.upcoming-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.highlight {
  background: rgba(34, 140, 61, 0.1);
  padding: 1.5rem;
  border-radius: 12px;
  border-left: 4px solid #228c3d;
  font-weight: 600;
  color: #1e6e3d;
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
  
  .guides-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .guide-card {
    padding: 2rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 1.8rem;
  }
  
  .responsive-container {
    padding: 0 1rem;
  }
  
  .guide-card {
    padding: 1.5rem;
  }
  
  .download-button {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
}
</style>