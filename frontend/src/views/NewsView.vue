<template>
  <div class="news-page">
    <AppNavbar />
    <div class="news-content" v-if="!selectedNews">
      <h1 class="news-title">All News And Events</h1>
      <div class="news-list">
        <article
          v-for="item in news"
          :key="item.id"
          class="news-card"
          @click="viewNews(item)"
        >
          <h3 class="news-title">{{ item.title }}</h3>
          <div class="news-date">{{ item.date }}</div>
          <p class="news-excerpt">{{ item.excerpt }}</p>
        </article>
      </div>
    </div>
    <div class="news-detail" v-if="selectedNews">
      <button class="back-button" @click="goBack">← Back </button>
      
      <h1 class="news-title">{{ selectedNews.title }}</h1>
      <div class="news-meta">
        <span class="news-date">{{ formattedDate }}</span>
        <span class="news-author">{{ selectedNews.author }}</span>
      </div>
      
      <img 
        v-if="selectedNews.image" 
        :src="selectedNews.image" 
        alt="News cover" 
        class="news-cover"
      >
      
      <div class="news-body" v-html="selectedNews.content"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

const router = useRouter();
const route = useRoute();
const news = ref([]);
const selectedNews = ref(null);

// Загрузка списка новостей
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/news');
    news.value = response.data;
  } catch (error) {
    console.error('Error fetching news:', error);
  }
});

// Отслеживание изменений в маршруте
watch(
  () => route.params.id,
  async (id) => {
    if (id) {
      try {
        const response = await axios.get(`http://localhost:8080/api/news/${id}`);
        selectedNews.value = response.data;
      } catch (error) {
        console.error('Error fetching news details:', error);
      }
    } else {
      selectedNews.value = null;
    }
  },
  { immediate: true }
);

// Форматирование даты
const formatDate = (date) => {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

const formattedDate = computed(() => {
  return selectedNews.value?.date ? formatDate(selectedNews.value.date) : '';
});

// Переход к новости
const viewNews = (id) => {
  router.push({ name: 'News', params: { id } });
};

// Возврат к списку новостей
const goBack = () => {
  router.push({ name: 'NewsList' });
};
</script>

<style scoped>
.news-page {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  max-width: 1440px;
  margin: 120px auto 0;
  padding: 0 2rem;
  min-height: 100vh;
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
</style>