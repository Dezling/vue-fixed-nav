<template>
  <footer class="main-footer">
    <div class="responsive-container footer-content">
      <div class="footer-left">
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
      
      <div class="erasmus-logo-footer">
        <img src="/images/eu.jpg" alt="Erasmus+" class="erasmus-footer-img">
      </div>
    </div>

    <div v-if="showModal" class="privacy-modal">
      <div class="modal-content">
        <div class="modal-header">
          <h2>Disclamer</h2>
          <button class="close-button" @click="showModal = false">&times;</button>
        </div>
        <div class="modal-body">
          <p>Co-funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const socialMedia = ref([
  { name: 'Facebook', icon: '/images/social/facebook.png', link: '#' },
  { name: 'Telegram', icon: '/images/social/telegram.png', link: 'https://t.me/greendealcau' },
  { name: 'Instagram', icon: '/images/social/instagram.png', link: 'https://www.instagram.com/greendealcau?igsh=MTVmNmo4d3NoYzdqOA==' },
  { name: 'linkedin', icon: '/images/social/linkedin.png', link: 'https://t.me/greendealcau' },
  { name: 'tiktok', icon: '/images/social/tttt.png', link: 'https://www.tiktok.com/@greendeal_cau?_t=ZM-8uF1ZqiwkuE&_r=1' },
])

const showModal = ref(false)

const showPrivacyModal = () => {
  showModal.value = true
}
</script>

<style scoped>
.main-footer {
  background: #228c3d;
  color: white;
  padding: 4rem 0;
  margin-top: auto;
}
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
  color: #333; 
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

.modal-body {
  color: #444; 
  line-height: 1.6;
  font-size: 1rem;
}

.modal-body p {
  margin-bottom: 1rem;
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

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-left {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1;
  min-width: 300px;
}

.erasmus-logo-footer {
  opacity: 0.9;
  transition: all 0.3s ease;
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
}

.erasmus-footer-img {
  width: 380px;
  height: auto;
  transition: transform 0.3s ease;
}

.erasmus-logo-footer:hover {
  opacity: 1;
  background: rgba(255, 255, 255, 0.15);
}

.erasmus-logo-footer:hover .erasmus-footer-img {
  transform: scale(1.05);
}

.footer-disclaimer {
  font-size: 0.9rem;
  line-height: 1.5;
}

.social-links {
  display: flex;
  gap: 1rem;
  align-items: center;
  flex-wrap: wrap;
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

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
  }
  
  .footer-left {
    align-items: center;
    order: 2;
  }
  
  .erasmus-logo-footer {
    order: 1;
  }
  
  .erasmus-footer-img {
    width: 140px;
  }
}

@media (max-width: 480px) {
  .footer-disclaimer {
    font-size: 0.8rem;
  }
  
  .social-links {
    gap: 0.8rem;
  }
}

</style>