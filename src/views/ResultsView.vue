<template>
  <main class="about-page">
    <section class="section results">
      <div class="responsive-container">
        <h2 class="section-title">RESULTS</h2>
        <div class="content-box">
          <div class="esg-profiles-section">
            <h3 class="esg-title">ESG Profiles</h3>
            <p class="esg-description">Explore sustainability profiles of Central Asian universities</p>
            
            <div class="universities-grid">
              <div 
                v-for="university in universities" 
                :key="university.id"
                class="university-card"
                :class="{ 'active': university.active, 'inactive': !university.active }"
                @click="navigateToProfile(university)"
              >
                <div class="logo-container">
                  <img 
                    :src="university.logo" 
                    :alt="university.name"
                    class="university-logo"
                    @error="handleImageError"
                  />
                  <div v-if="!university.active" class="coming-soon">Coming Soon</div>
                </div>
                <h4 class="university-name">{{ university.name }}</h4>
                <p class="university-country">{{ university.country }}</p>
                <div v-if="university.active" class="profile-badge">View Profile</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { universitiesAll } from '../data/universitetsAll'

const router = useRouter()
const universities = ref([])

onMounted(() => {
  universities.value = universitiesAll
})

const navigateToProfile = (university) => {
  if (university.active) {
    router.push(`/results/esg-profiles/${university.id}`)
  }
}

const handleImageError = (event) => {
  event.target.src = '/images/placeholder-logo.png'
}
</script>

<style scoped>
.about-page {
  font-family: 'Segoe UI', Arial, sans-serif;
  line-height: 1.6;
  color: #444;
}

.section {
  padding: 5rem 0;
  position: relative;
}

.section::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80%;
  height: 1px;
  background: linear-gradient(90deg, transparent, #ddd, transparent);
}

.responsive-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  font-size: 2.8rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;
  color: #2a7d2e;
  position: relative;
  padding-bottom: 1rem;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: #2a7d2e;
  border-radius: 2px;
}

.content-box {
  background: rgba(255, 255, 255, 0.9);
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin: 0 auto;
  max-width: 1000px;
}

.esg-profiles-section {
  text-align: center;
}

.esg-title {
  font-size: 2.2rem;
  color: #2a7d2e;
  margin-bottom: 1rem;
  font-weight: 600;
}

.esg-description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  line-height: 1.6;
}

.universities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.university-card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
  border: 2px solid transparent;
  position: relative;
}

.university-card.active:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(42, 125, 46, 0.15);
  border-color: #2a7d2e;
}

.university-card.inactive {
  opacity: 0.6;
  cursor: not-allowed;
}

.logo-container {
  position: relative;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
}

.university-logo {
  max-width: 100%;
  max-height: 100px;
  object-fit: contain;
}

.coming-soon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.8);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
}

.university-name {
  font-size: 1rem;
  font-weight: 600;
  color: #333;
  margin: 0 0 0.5rem 0;
  line-height: 1.4;
}

.university-country {
  font-size: 0.9rem;
  color: #666;
  margin: 0 0 0.5rem 0;
}

.profile-badge {
  display: inline-block;
  background: #2a7d2e;
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
}

@media (max-width: 768px) {
  .responsive-container {
    padding: 0 1.5rem;
  }

  .section-title {
    font-size: 2.2rem;
  }

  .content-box {
    padding: 1.5rem;
  }

  .universities-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 1.5rem;
  }

  .esg-title {
    font-size: 1.8rem;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 1.8rem;
  }

  .universities-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;
  }

  .university-card {
    padding: 1rem;
  }

  .logo-container {
    height: 80px;
  }
}
</style>