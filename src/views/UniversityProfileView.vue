<template>
  <main class="profile-page">
    <div class="profile-header" v-if="university">
      <div class="responsive-container">
        <button class="back-button" @click="$router.push('/results')">
          ← Back to ESG Profiles
        </button>
        <div class="university-hero">
          <img 
            :src="university.logo" 
            :alt="university.name" 
            class="university-hero-logo"
            @error="handleImageError"
          >
          <div class="university-info">
            <h1 class="university-name">{{ university.name }}</h1>
            <p class="university-location">{{ university.country }}</p>
            <div class="status-badge active">Active Profile</div>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="loading-message">
      <div class="responsive-container">
        <h2>Loading...</h2>
      </div>
    </div>

    <section v-if="university && university.profile" class="section profile-content">
      <div class="responsive-container">
        <!-- Overview -->
        <div class="profile-section">
          <h2 class="section-title">Overview</h2>
          <div class="overview-content">
            <p class="profile-description">{{ university.profile.description }}</p>
          </div>
        </div>

        <!-- Faculty Expertise -->
        <div class="profile-section">
          <h2 class="section-title">Faculty Expertise</h2>
          <div class="faculty-grid">
            <div v-for="faculty in university.profile.faculty" :key="faculty.name" class="faculty-card">
              <h3 class="faculty-name">{{ faculty.name }}</h3>
              <p class="faculty-position">{{ faculty.position }}</p>
              <div class="research-areas">
                <strong>Research Areas:</strong> {{ faculty.researchAreas }}
              </div>
              <div class="publications">
                <strong>Selected Publications:</strong>
                <ul>
                  <li v-for="(pub, index) in faculty.publications" :key="index">
                    <a v-if="pub.url" :href="pub.url" target="_blank" class="publication-link">
                      {{ pub.title }}
                    </a>
                    <span v-else>{{ pub.title }}</span>
                  </li>
                </ul>
              </div>
              <a :href="`mailto:${faculty.email}`" class="email-link">📧 {{ faculty.email }}</a>
            </div>
          </div>
        </div>

        <!-- Research Areas & Projects -->
        <div class="profile-section">
          <h2 class="section-title">Key Research Areas & Projects</h2>
          <div class="projects-grid">
            <div v-for="project in university.profile.projects" :key="project.name" class="project-card">
              <h3 class="project-name">{{ project.name }}</h3>
              <p class="project-dates">{{ project.dates }}</p>
              <p class="project-description">{{ project.description }}</p>
              <div class="objectives">
                <strong>Objectives:</strong>
                <ul>
                  <li v-for="(objective, index) in project.objectives" :key="index">{{ objective }}</li>
                </ul>
              </div>
              <div v-if="project.researchThemes" class="research-themes">
                <strong>Research Themes:</strong>
                <div class="themes-tags">
                  <span v-for="(theme, index) in project.researchThemes" :key="index" class="theme-tag">
                    {{ theme }}
                  </span>
                </div>
              </div>
              <a v-if="project.url" :href="project.url" target="_blank" class="project-link">
                Learn More →
              </a>
            </div>
          </div>
        </div>

        <!-- Institutional Priorities -->
        <div class="profile-section">
          <h2 class="section-title">Institutional Green & Sustainability Priorities</h2>
          <div class="priorities-list">
            <div v-for="(priority, index) in university.profile.priorities" :key="index" class="priority-item">
              {{ priority }}
            </div>
          </div>
        </div>

        <!-- Partnerships -->
        <div class="profile-section">
          <h2 class="section-title">Partnerships & Networks</h2>
          <div class="partnerships-grid">
            <div v-for="category in university.profile.partnerships" :key="category.type" class="partnership-category">
              <h3 class="partnership-type">{{ category.type }}</h3>
              <div class="partners-list">
                <div v-for="partner in category.partners" :key="partner.name" class="partner-item">
                  <a v-if="partner.url" :href="partner.url" target="_blank" class="partner-link">
                    {{ partner.name }}
                  </a>
                  <span v-else>{{ partner.name }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Strengths -->
        <div class="profile-section">
          <h2 class="section-title">Strengths & Contributions</h2>
          <div class="strengths-content">
            <p>{{ university.profile.strengths }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { getUniversityById } from '../data/universitetsAll'

const route = useRoute()
const router = useRouter()
const university = ref(null)

const loadUniversityData = () => {
  const foundUniversity = getUniversityById(route.params.universityId)
  if (foundUniversity && foundUniversity.active) {
    university.value = foundUniversity
  } else {
    router.push('/results')
  }
}

onMounted(() => {
  loadUniversityData()
})

// Следим за изменениями параметров маршрута
watch(() => route.params.universityId, () => {
  loadUniversityData()
})

const handleImageError = (event) => {
  event.target.src = '/images/placeholder-logo.png'
}
</script>

<style scoped>
.profile-page {
  font-family: 'Segoe UI', Arial, sans-serif;
  line-height: 1.6;
  color: #444;
  min-height: 100vh;
}

.profile-header {
  background: linear-gradient(135deg, #2a7d2e 0%, #4caf50 100%);
  color: white;
  padding: 3rem 0;
}

.loading-message {
  text-align: center;
  padding: 4rem 0;
  background: #f9f9f9;
}

.loading-message h2 {
  color: #666;
}

.back-button {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  cursor: pointer;
  font-size: 1rem;
  margin-bottom: 2rem;
  transition: all 0.3s ease;
}

.back-button:hover {
  background: rgba(255, 255, 255, 0.3);
}

.university-hero {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.university-hero-logo {
  width: 120px;
  height: 120px;
  object-fit: contain;
  background: white;
  padding: 1rem;
  border-radius: 12px;
}

.university-info {
  flex: 1;
}

.university-name {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
}

.university-location {
  font-size: 1.2rem;
  opacity: 0.9;
  margin: 0 0 1rem 0;
}

.status-badge {
  display: inline-block;
  background: rgba(255, 255, 255, 0.2);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.section {
  padding: 4rem 0;
}

.responsive-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2rem;
  font-weight: 600;
  color: #2a7d2e;
  margin-bottom: 2rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #e8f5e9;
}

.profile-section {
  margin-bottom: 4rem;
}

.overview-content {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  line-height: 1.6;
}

.profile-description {
  margin: 0;
  font-size: 1.1rem;
}

.faculty-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
}

.faculty-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #2a7d2e;
}

.faculty-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2a7d2e;
  margin: 0 0 0.5rem 0;
}

.faculty-position {
  font-style: italic;
  color: #666;
  margin: 0 0 1rem 0;
}

.research-areas {
  margin-bottom: 1rem;
  line-height: 1.5;
}

.publications {
  margin-bottom: 1rem;
}

.publications ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.publication-link {
  color: #2a7d2e;
  text-decoration: none;
}

.publication-link:hover {
  text-decoration: underline;
}

.email-link {
  color: #2a7d2e;
  text-decoration: none;
  font-weight: 500;
}

.projects-grid {
  display: grid;
  gap: 2rem;
}

.project-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
}

.project-name {
  font-size: 1.3rem;
  font-weight: 600;
  color: #2a7d2e;
  margin: 0 0 0.5rem 0;
}

.project-dates {
  color: #666;
  font-style: italic;
  margin: 0 0 1rem 0;
}

.project-description {
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.objectives ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.research-themes {
  margin: 1.5rem 0;
}

.themes-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.theme-tag {
  background: #e8f5e9;
  color: #2a7d2e;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.85rem;
  font-weight: 500;
}

.project-link {
  color: #2a7d2e;
  text-decoration: none;
  font-weight: 600;
  margin-top: 1rem;
  display: inline-block;
}

.priorities-list {
  display: grid;
  gap: 1rem;
}

.priority-item {
  background: #f9f9f9;
  padding: 1.5rem;
  border-radius: 8px;
  border-left: 4px solid #2a7d2e;
  line-height: 1.6;
}

.partnerships-grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.partnership-category {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.partnership-type {
  font-size: 1.2rem;
  font-weight: 600;
  color: #2a7d2e;
  margin: 0 0 1rem 0;
}

.partners-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.partner-link {
  color: #2a7d2e;
  text-decoration: none;
}

.partner-link:hover {
  text-decoration: underline;
}

.strengths-content {
  background: #f9f9f9;
  padding: 2rem;
  border-radius: 12px;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .responsive-container {
    padding: 0 1.5rem;
  }

  .university-hero {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }

  .university-name {
    font-size: 2rem;
  }

  .faculty-grid {
    grid-template-columns: 1fr;
  }

  .faculty-card {
    padding: 1.5rem;
  }

  .project-card {
    padding: 1.5rem;
  }

  .partnerships-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .section {
    padding: 2rem 0;
  }

  .section-title {
    font-size: 1.6rem;
  }

  .profile-header {
    padding: 2rem 0;
  }
}
</style>