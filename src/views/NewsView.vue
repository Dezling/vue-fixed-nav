<template>
  <div class="news-page">
    <AppNavbar />
    <div class="news-content" v-if="!selectedNews">
      <h1 class="news-title">News & Events</h1>
      <div class="news-list">
        <div 
          v-for="(item, index) in news" 
          :key="index"
          class="news-card"
          @click="viewNews(item)"
        >
          <h3>{{ item.title }}</h3>
          <div class="news-date">{{ new Date(item.date).toLocaleDateString() }}</div>
          <p class="news-excerpt">{{ item.excerpt }}</p>
        </div>
      </div>
    </div>

    <div class="news-detail" v-if="selectedNews">
      <button class="back-button" @click="goBack">← Back </button>
      
      <h1 class="news-title">{{ selectedNews.title }}</h1>
      <div class="news-meta">
        <span class="news-date">{{ formattedDate }}</span>
        <span class="news-author">{{ selectedNews.author }}</span>
      </div>

      <div class="image-scroll-container" v-if="selectedNews.images?.length">
        <div class="image-scroll-wrapper">
          <img 
            v-for="(image, index) in selectedNews.images" 
            :key="index"
            :src="image" 
            @click="openLightbox(image)"
            :alt="'News image ' + (index + 1)"
            class="news-image"
          >
        </div>
      </div>

      <div class="news-body" v-html="selectedNews.content"></div>
    </div>

    <div v-if="selectedImage" class="lightbox" @click.self="closeLightbox">
      <button class="close-button" @click="closeLightbox">×</button>
      <img :src="selectedImage" class="lightbox-image" />
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { news } from '../data/news' 

const router = useRouter()
const route = useRoute()

const selectedNews = computed(() => {
  return news.find(item => item.id === parseInt(route.params.id)) || null
});

const viewNews = (item) => {
  router.push({ params: { id: item.id } })
}

const goBack = () => {
  window.history.back(); 
}

const formattedDate = computed(() => {
  return selectedNews.value ? new Date(selectedNews.value.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }) : ''
});

const selectedImage = ref(null)

const openLightbox = (image) => {
  selectedImage.value = image
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  selectedImage.value = null
  document.body.style.overflow = 'auto'
}
</script>
<style scoped>

.news-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  max-width: 1440px;
  margin: 120px auto 0;
  padding: 0 2rem;
  min-height: 100vh;
}
.image-scroll-container {
  margin: 2rem 0;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1rem;
}

.image-scroll-wrapper {
  display: flex;
  gap: 1rem;
  padding: 0 1rem;
  min-width: min-content;
}

.news-image {
  height: 300px;
  width: auto;
  max-width: 80%;
  border-radius: 12px;
  object-fit: cover;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  flex-shrink: 0;
}

.news-image:hover {
  transform: scale(1.02);
}

@media (max-width: 768px) {
  .news-image {
    height: 250px;
    max-width: 90%;
  }
}
.news-content {
  position: relative;
  padding: 4rem 0;
}

.news-title {
  font-size: 3.5rem;
  font-weight: 800;
  text-align: center;
  margin-bottom: 3rem;
  background: linear-gradient(45deg, #2a7d2e 30%, #42b883 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
  padding-bottom: 1.5rem;
}

.news-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 4px;
  background: #e8f5e9;
  border-radius: 2px;
}

.news-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.news-card {
  background: white;
  border-radius: 16px;
  padding: 2rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(42, 125, 46, 0.1);
  position: relative;
  overflow: hidden;
}

.news-card::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: #2a7d2e;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.news-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(42, 125, 46, 0.15);
}

.news-card:hover::before {
  transform: scaleX(1);
}

.news-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  color: #1a1a1a;
  margin-bottom: 1rem;
  transition: color 0.3s ease;
}

.news-card:hover h3 {
  color: #2a7d2e;
}

.news-date {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.news-date::before {
  content: '📅';
  font-size: 0.9em;
}

.news-excerpt {
  font-size: 1rem;
  color: #555;
  line-height: 1.7;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: #f5fff5;
  border: 2px solid #e8f5e9;
  color: #2a7d2e;
  padding: 0.75rem 1.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: all 0.3s ease;
  margin-bottom: 3rem;
}

.back-button:hover {
  background: #2a7d2e;
  color: white;
  transform: translateX(-5px);
}

.news-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 4rem 0;
}

.news-meta {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin: 2rem 0;
  padding: 1.5rem 0;
  border-bottom: 1px solid #eee;
}

.news-author {
  background: #e8f5e9;
  color: #2a7d2e;
  padding: 0.25rem 0.75rem;
  border-radius: 4px;
  font-weight: 500;
}

.news-cover {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem 0;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.news-cover:hover {
  transform: scale(0.98);
}

.news-body {
  font-size: 1.1rem;
  line-height: 1.9;
  color: #444;
}

.news-body ::v-deep p {
  margin-bottom: 1.5rem;
}

.news-body ::v-deep h2 {
  font-size: 2rem;
  margin: 2rem 0 1.5rem;
  color: #1a1a1a;
}

.news-body ::v-deep a {
  color: #2a7d2e;
  text-decoration: underline;
}

@media (max-width: 768px) {
  .news-title {
    font-size: 2.5rem;
  }
  
  .news-list {
    grid-template-columns: 1fr;
  }
  
  .news-cover {
    height: 250px;
  }
  
  .news-meta {
    flex-direction: column;
    align-items: flex-start;
  }
}

@media (max-width: 480px) {
  .news-page {
    padding: 0 1rem;
    margin-top: 80px;
  }
  
  .news-title {
    font-size: 2rem;
  }
  
  .news-card {
    padding: 1.5rem;
  }
}
.image-scroll-container::-webkit-scrollbar {
  height: 8px;
  background-color: #f5f5f5;
}

.image-scroll-container::-webkit-scrollbar-thumb {
  background: #2a7d2e;
  border-radius: 10px;
}

.image-scroll-container::-webkit-scrollbar-track {
  background: #e8f5e9;
}

.image-scroll-container {
  margin: 2rem 0;
  width: 100%;
  overflow-x: auto;
  padding-bottom: 1rem;
  scrollbar-color: #2a7d2e #e8f5e9;
  scrollbar-width: thin;
}

.image-scroll-wrapper {
  display: flex;
  gap: 1.5rem;
  padding: 0 1rem;
  min-width: min-content;
}

.news-image {
  height: 350px;
  width: auto;
  max-width: 80%;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: zoom-in;
  flex-shrink: 0;
}

.news-image:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
}

.lightbox {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
}

.lightbox-image {
  max-width: 90%;
  max-height: 90vh;
  border-radius: 12px;
  box-shadow: 0 0 40px rgba(0, 0, 0, 0.3);
  animation: zoomIn 0.3s ease;
}

.close-button {
  position: fixed;
  top: 2rem;
  right: 2rem;
  background: none;
  border: none;
  color: white;
  font-size: 3rem;
  cursor: pointer;
  transition: transform 0.3s ease;
}

.close-button:hover {
  transform: rotate(90deg);
}

@keyframes zoomIn {
  from { transform: scale(0.8); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
}

@media (max-width: 768px) {
  .news-image {
    height: 280px;
    max-width: 85%;
  }
  
  .lightbox-image {
    max-width: 95%;
  }
  
  .close-button {
    top: 1rem;
    right: 1rem;
    font-size: 2rem;
  }
}
</style>