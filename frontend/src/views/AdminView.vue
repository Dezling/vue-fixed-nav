<template>
  <div class="admin-container">
    <!-- Логин форма -->
    <div v-if="!isAuthenticated" class="login-container">
      <div class="login-card">
        <h2>Admin Login</h2>
        <form @submit.prevent="handleLogin">
          <div class="form-group">
            <label>Username</label>
            <input v-model="credentials.username" type="text" required />
          </div>
          <div class="form-group">
            <label>Password</label>
            <input v-model="credentials.password" type="password" required />
          </div>
          <button type="submit" class="login-btn">Login</button>
        </form>
      </div>
    </div>

    <!-- Админ панель -->
    <div v-else class="admin-panel">
      <header class="admin-header">
        <h1>News Management</h1>
        <button @click="handleLogout" class="logout-btn">Logout</button>
      </header>

      <!-- Форма создания/редактирования -->
      <div class="news-form">
        <h2>{{ isEditing ? 'Edit News' : 'Create New Post' }}</h2>
        <form @submit.prevent="submitForm">
          <div class="form-grid">
            <div class="form-group">
              <label>Title</label>
              <input v-model="newsItem.title" required />
            </div>
            
            <div class="form-group">
              <label>Date</label>
              <input v-model="newsItem.date" type="date" required />
            </div>

            <div class="form-group">
              <label>Author</label>
              <input v-model="newsItem.author" required />
            </div>

            <div class="form-group full-width">
              <label>Content</label>
              <textarea v-model="newsItem.content" rows="6" required></textarea>
            </div>

            <div class="form-group full-width">
              <label>Image Upload</label>
              <input type="file" @change="handleImageUpload" accept="image/*" />
              <div v-if="previewImage" class="image-preview">
                <img :src="previewImage" alt="Preview" />
              </div>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="submit-btn">
              {{ isEditing ? 'Update' : 'Publish' }}
            </button>
            <button type="button" @click="resetForm" class="cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>

      <!-- Список новостей -->
      <div class="news-list">
        <h2>Existing Posts</h2>
        <div class="news-items">
          <div v-for="item in newsList" :key="item.id" class="news-item">
            <div class="item-content">
              <h3>{{ item.title }}</h3>
              <p class="meta-info">
                {{ formatDate(item.date) }} • {{ item.author }}
              </p>
            </div>
            <div class="item-actions">
              <button @click="editNews(item)" class="edit-btn">
                <i class="fas fa-edit"></i>
              </button>
              <button @click="deleteNews(item.id)" class="delete-btn">
                <i class="fas fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const isAuthenticated = ref(false);
const newsList = ref([]);
const newsItem = ref({
  title: '',
  date: '',
  author: '',
  content: '',
  image: null
});
const previewImage = ref(null);
const isEditing = ref(false);
const editingId = ref(null);

// Получение списка новостей
const fetchNews = async () => {
  try {
    const response = await axios.get('http://localhost:8080/api/news');
    newsList.value = response.data;
  } catch (error) {
    console.error('Ошибка при загрузке новостей:', error);
  }
};

// Создание/обновление новости
const submitForm = async () => {
  const formData = new FormData();
  formData.append('title', newsItem.value.title);
  formData.append('date', newsItem.value.date);
  formData.append('author', newsItem.value.author);
  formData.append('content', newsItem.value.content);
  if (newsItem.value.image) {
    formData.append('image', newsItem.value.image);
  }

  try {
    if (isEditing.value) {
      await axios.put(`http://localhost:8080/api/news/${editingId.value}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    } else {
      await axios.post('http://localhost:8080/api/news', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
    }
    resetForm();
    fetchNews();
  } catch (error) {
    console.error('Ошибка при сохранении новости:', error);
  }
};

// Удаление новости
const deleteNews = async (id) => {
  if (!confirm('Вы уверены, что хотите удалить эту новость?')) return;

  try {
    await axios.delete(`http://localhost:8080/api/news/${id}`);
    fetchNews();
  } catch (error) {
    console.error('Ошибка при удалении новости:', error);
  }
};

// Редактирование новости
const editNews = (item) => {
  newsItem.value = { ...item };
  previewImage.value = item.image; // Если изображение загружено ранее
  isEditing.value = true;
  editingId.value = item.id;
};

// Сброс формы
const resetForm = () => {
  newsItem.value = { title: '', date: '', author: '', content: '', image: null };
  previewImage.value = null;
  isEditing.value = false;
  editingId.value = null;
};

// Автозагрузка новостей при входе
onMounted(() => {
  fetchNews();
});
</script>

<style scoped>
.admin-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 1rem;
}

.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}

.login-card {
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  width: 100%;
  max-width: 400px;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group.full-width {
  grid-column: 1 / -1;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #2a7d2e;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border: 2px solid #e8f5e9;
  border-radius: 8px;
  font-size: 1rem;
}

.image-preview {
  margin-top: 1rem;
}

.image-preview img {
  max-width: 200px;
  border-radius: 8px;
}

.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
}

.news-items {
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.05);
}

.news-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
}

.item-actions {
  display: flex;
  gap: 0.5rem;
}

button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-btn {
  background: #2a7d2e;
  color: white;
}

.cancel-btn {
  background: #f5f5f5;
  color: #666;
}

.edit-btn {
  background: #42b883;
  color: white;
}

.delete-btn {
  background: #ff4444;
  color: white;
}

button:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}
</style>