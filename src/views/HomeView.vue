<template>
  <main class="home-page">
    <!-- Section 1: Hero Image -->
<section class="hero-section">
  <div class="hero-content">
    <h2 class="hero-subtitle">GDCAU</h2>
    <h1 class="hero-title">
      <span class="title-line">GREEN DEAL</span>
      <span class="title-line">CENTRAL ASIAN UNIVERSITIES</span>
    </h1>
  </div>
</section>


    <!-- Section 2: Project Description -->
    <section class="section project-description">
      <div class="responsive-container">
        <h2 class="section-title">BRIEF DESCRIPTON OF THE PROJECT</h2>
        <p class="description-text">
The GDCAU – Green Deal for Central Asian Universities project brings together 13 universities from Germany, Slovakia, Austria, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan to position higher education institutions as key drivers of technological, cultural, and social transformations within the European Green Deal framework. The project aims to foster sustainable development in Central Asia by integrating environmental, social, and governance (ESG) principles into university strategies, education, and business collaboration.
        </p>
      </div>
    </section>

    <!-- Section 3: Participants -->
    <section class="section participants">
      <div class="responsive-container">
        <h2 class="section-title">PARTICIPANTS</h2>
        <p class="participants-intro">
          GDCAU proposes a partnership to make universities key drivers for technological, cultural, and societal
		  
        </p>
        <div class="universities-grid">
          <a v-for="(uni, index) in universities" :key="index" :href="uni.url" class="university-logo">
            <img :src="uni.logo" :alt="uni.name" class="responsive-image">
          </a>
        </div>
      </div>
    </section>

    <!-- Section 4: Strategic Objectives -->
    <section class="section objectives">
      <div class="responsive-container">
        <h2 class="section-title">STRATEGIC OBJECTIVES OF THE PROJECT</h2>
        <ul class="objectives-list">
          <li v-for="(obj, index) in objectives" :key="index" class="objective-item">
            {{ obj }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Section 5: Latest News -->
    <section class="section news">
      <div class="responsive-container">
        <h2 class="section-title">LATEST NEWS</h2>
        <div class="news-grid">
          <article 
            v-for="(item, index) in news" 
            :key="index" 
            class="news-card"
            @click="openNews(item)"
          >
            <div class="news-date">{{ item.date }}</div>
            <h3 class="news-title">{{ item.title }}</h3>
            <p class="news-excerpt">{{ item.excerpt }}</p>
          </article>
        </div>
      </div>
    </section>

    <!-- Section 6: Footer -->
<footer class="main-footer">
    <div class="responsive-container footer-content">
      <div class="footer-disclaimer">
        © 2025 GDCAU. All rights reserved. | 
        <a href="#" class="footer-link" @click.prevent="showPrivacyModal">Disclamer</a>
      </div>
      <div class="social-links">
        <a 
          v-for="(social, index) in socialMedia" 
          :key="index" 
          :href="social.link"
          class="social-icon"
          target="_blank"
          rel="noopener"
        >
          <img 
            :src="social.icon" 
            :alt="social.name" 
            class="icon-image"
            :style="{ width: social.size || '32px' }"
          >
        </a>
      </div>
    </div>
  </footer>
    <div v-if="showModal" class="privacy-modal">
    <div class="modal-content">
      <div class="modal-header">
        <h2>Disclamer</h2>
        <button class="close-button" @click="showModal = false">&times;</button>
      </div>
      <div class="modal-body">
        <p>This website and its contents are provided for informational and educational purposes only. We strive to ensure the accuracy and timeliness of the information presented, but we do not guarantee its completeness or applicability to your specific circumstances. Use of this website is at your own risk.

We are not liable for any errors, omissions, or decisions made based on the information provided here. Links to third-party websites are provided for convenience and do not imply endorsement or responsibility for the content of those sites.

For personalized advice or recommendations, please consult a qualified professional.</p>
        <!-- Добавьте полный текст политики здесь -->
      </div>
    </div>
  </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { news } from '../data/news' // Убедитесь, что правильный путь к файлу с новостями


const router = useRouter()

const openNews = (item) => {
  router.push({ name: 'News', params: { id: item.id } })
}
const universities = ref([
  { name: 'University 1', logo: '/src/assets/universitets/u1.png', url: 'https://tttu.edu.kz/ru/universitet/' },
  { name: 'University 2', logo: '/src/assets/universitets/u2.png', url: 'https://khogu.tj/ru/%d0%b3%d0%bb%d0%b0%d0%b2%d0%bd%d0%b0%d1%8f/' },
  { name: 'University 3', logo: '/src/assets/universitets/u3.png', url: 'https://kiut.uz/ru/' },
  { name: 'University 4', logo: '/src/assets/universitets/u4.png', url: 'https://www.donau-uni.ac.at/de.html' },
  { name: 'University 5', logo: '/src/assets/universitets/u5.png', url: 'https://etu.edu.kz/' },
  { name: 'University 6', logo: '/src/assets/universitets/u6.png', url: '#' },
  { name: 'University 7', logo: '/src/assets/universitets/u7.png', url: 'https://bhu.kg/' },
  { name: 'University 8', logo: '/src/assets/universitets/u8.png', url: 'https://constructor.university/' },
  { name: 'University 9', logo: '/src/assets/universitets/u9.png', url: '#' },
  { name: 'University 10', logo: '/src/assets/universitets/u10.png', url: '#' },
  { name: 'University 11', logo: '/src/assets/universitets/u11.png', url: '#' },
  { name: 'University 12', logo: '/src/assets/universitets/u12.png', url: '#' },
  { name: 'University 13', logo: '/src/assets/universitets/u13.png', url: '#' },
  // Добавьте остальные университеты
])

const objectives = ref([
  'Strengthening institutional capacity of universities to develop and implement ESG-focused strategies.',
  'Training specialists in environmental sustainability by updating educational programs and launching a joint masters program on the Green Deal.',
  'Enhancing university-business cooperation to support companies in implementing ESG principles.',
  'Establishing an inter-university Green Deal Centre (GDCentre) to promote evidence-based education, research, innovation, and public engagement.',
])


const socialMedia = ref([
  { name: 'Facebook', icon: '/src/assets/social/facebook.png', link: '#' },
  { name: 'Telegram', icon: '/src/assets/social/telegram.png', link: 'https://t.me/greendealcau' },
  { name: 'Instagram', icon: '/src/assets/social/instagram.png', link: 'https://www.instagram.com/greendealcau?igsh=MTVmNmo4d3NoYzdqOA==' },
  { name: 'linkedin', icon: '/src/assets/social/linkedin.png', link: 'https://t.me/greendealcau' },
  { name: 'tiktok', icon: '/src/assets/social/tttt.png', link: 'https://www.tiktok.com/@greendeal_cau?_t=ZM-8uF1ZqiwkuE&_r=1' },

  // Добавьте другие соцсети
])

const showModal = ref(false)

const showPrivacyModal = () => {
  showModal.value = true
}
</script>
<style scoped>
.home-page {
  font-family: 'Inter', system-ui, sans-serif;
  background: #f8fafc;
}
.section {
  padding: 3rem 0; /* Было 5rem */
  position: relative;
}

/* Hero Section */
.hero-section {
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  background: linear-gradient(45deg, rgba(34, 140, 61, 0.9), rgba(66, 184, 131, 0.9)),
              url('/src/assets/main_back.png') center/cover fixed;
  padding: 1rem 1rem;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}
.hero-subtitle,
.hero-title {
  text-align: center;
}
.hero-subtitle {
  font-size: 1.8rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  animation: slideUp 1s ease;
}

.hero-title {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  margin-bottom: 2rem;
}

.title-line {
  display: block;
  font-size: 4.5rem;
  line-height: 1;
  text-transform: uppercase;
  letter-spacing: 0.15em;
  font-weight: 900;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
  animation: fadeIn 1s ease forwards;
  opacity: 0;
}

.title-line:nth-child(1) { animation-delay: 0.3s; }
.title-line:nth-child(2) { animation-delay: 0.6s; }

/* Project Description */
.project-description {
	margin-top: -1rem;
  background: linear-gradient(45deg, #f8fff8, #ffffff);
  padding: 3rem 0;
}

.description-text {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.8;
  text-align: center;
  color: #444;
  position: relative;
  padding: 2rem;
  background: white;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(34, 140, 61, 0.1);
}

/* Participants Section */
.participants {
  padding: 6rem 0;
  background: #ffffff;
}

.universities-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 3rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}


.university-logo {
  padding: 1.5rem;
  background: white;
  border-radius: 16px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid #e2e8f0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 140px;
}

.university-logo:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(34, 140, 61, 0.15);
  border-color: #228c3d;
}

.responsive-image {
  max-width: 100%;
  height: auto;
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}

.university-logo:hover .responsive-image {
  filter: grayscale(0%);
}

/* Objectives Section */
.objectives {
  padding: 6rem 0;
  background: #f0fdf4;
}

.objectives-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.objective-item {
  background: white;
  padding: 2rem;
  border-radius: 16px;
  position: relative;
  counter-increment: objective;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.objective-item::before {
  content: counter(objective);
  position: absolute;
  top: -1rem;
  left: -1rem;
  width: 2.5rem;
  height: 2.5rem;
  background: #228c3d;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.2rem;
}

.objective-item:hover {
  transform: translateY(-5px);
}

/* News Section */
.news {
  padding: 6rem 0;
  background: white;
}

.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.news-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  border: 1px solid #e2e8f0;
}

.news-card::after {
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

.news-card:hover {
  box-shadow: 0 8px 24px rgba(34, 140, 61, 0.1);
}

.news-card:hover::after {
  transform: scaleX(1);
}

.news-date {
  font-size: 0.9rem;
  color: #64748b;
  margin-bottom: 0.8rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.news-date::before {
  content: '📅';
  font-size: 0.9em;
}

.news-title {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: #1e293b;
  transition: color 0.3s ease;
}

.news-card:hover .news-title {
  color: #228c3d;
}

.news-excerpt {
  font-size: 1rem;
  color: #64748b;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Footer */
.main-footer {
  background: #228c3d;
  color: white;
  padding: 4rem 0;
  margin-top: 6rem;
  position: relative;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  max-width: 1200px;
  margin: 0 auto;
}

.social-links {
  display: flex;
  gap: 1.5rem;
}

.social-icon {
  transition: all 0.3s ease;
  padding: 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
}

.social-icon:hover {
  background: #1a1a1a;
  transform: translateY(-3px);
}

.icon-image {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1);
}

/* Анимации */
@keyframes slideUp {
  from {
    transform: translateY(20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
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
.section-title{
  color: #2a7d2e;
}
/* Стили для модального окна */
.privacy-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  backdrop-filter: blur(3px);
}

.modal-content {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 600px;
  width: 90%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
  border-bottom: 2px solid #eee;
  padding-bottom: 1rem;
}

.modal-header h2 {
  color: #2a7d2e;
  margin: 0;
  font-size: 1.8rem;
}

.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  padding: 0 0.5rem;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #2a7d2e;
}

.modal-body {
  color: #444;
  line-height: 1.6;
  font-size: 1rem;
}

.modal-body p {
  margin-bottom: 1rem;
}

@keyframes modalFade {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}

.privacy-modal {
  animation: modalFade 0.3s ease;
}
/* Центрирование контента */
.section-title,
.description-text,
.participants-intro,
.objectives-list,
.news-grid,
.universities-grid,
.footer-content {
  text-align: center;
}

@media (max-width: 768px) {
  .hero-subtitle {
    font-size: 1.2rem;
  }
  
  .title-line {
    font-size: 2.5rem;
  }
  
  .universities-grid {
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1.5rem;
  }
  
  .objective-item {
    padding: 1.5rem;
  }
}
.section-title {
    font-size: 3rem; /* Увеличено с 1.5rem до 3rem */
}

@media (max-width: 480px) {
  .title-line {
    font-size: 2rem;
  }
  
  .description-text {
    font-size: 1rem;
    padding: 1.5rem;
  }
  
  .news-card {
    padding: 1.5rem;
  }
}
</style>