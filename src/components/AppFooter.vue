<template>
  <footer class="main-footer">
    <div class="responsive-container footer-content">
      <div class="footer-left">
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
        <div class="footer-disclaimer">
          © 2025 GDCAU. All rights reserved.
        </div>
      </div>
      
      <div class="footer-right">
        <div class="erasmus-block">
          <div class="erasmus-logo-footer">
            <img src="/images/EN_Co-fundedbytheEU_RGB_POS.png" alt="Erasmus+" class="erasmus-footer-img">
          </div>
          <div class="disclaimer-text">
            <p>Funded by the European Union. Views and opinions expressed are however those of the author(s) only and do not necessarily reflect those of the European Union or the European Education and Culture Executive Agency (EACEA). Neither the European Union nor EACEA can be held responsible for them.</p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const socialMedia = ref([
  { name: 'Facebook', icon: '/images/social/facebook.png', link: 'https://www.facebook.com/share/18MHZ86n2o/?mibextid=wwXIfr' },
  { name: 'Telegram', icon: '/images/social/telegram.png', link: 'https://t.me/greendealcau' },
  { name: 'Instagram', icon: '/images/social/instagram.png', link: 'https://www.instagram.com/greendealcau?igsh=MTVmNmo4d3NoYzdqOA==' },
  { name: 'linkedin', icon: '/images/social/linkedin.png', link: 'https://www.linkedin.com/in/green-deal-central-asian-universitetes-815633365?utm_source=share_via&utm_content=profile&utm_medium=member_ios' },
  { name: 'tiktok', icon: '/images/social/tttt.png', link: 'https://www.tiktok.com/@greendeal_cau?_t=ZM-8uF1ZqiwkuE&_r=1' },
])
</script>

<style scoped>
.main-footer {
  background: #228c3d;
  color: white;
  padding: 3rem 0;
  border-top: 4px solid #1a6b2f;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.footer-left {
  flex: 1;
  min-width: 300px;
}

.footer-right {
  flex: 1;
  min-width: 300px;
}

.erasmus-block {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}

.erasmus-logo-footer {
  flex-shrink: 0;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  padding: 12px;
  transition: all 0.3s ease;
}

.erasmus-logo-footer:hover {
  background: rgba(255, 255, 255, 0.15);
}

.erasmus-footer-img {
  width: 320px;
  height: auto;
}

.disclaimer-text {
  font-size: 0.8rem;
  line-height: 1.5;
  opacity: 0.9;
}

.disclaimer-text p {
  margin: 0;
}

.social-links {
  display: flex;
  gap: 1.2rem;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 1.5rem;
}

.social-icon {
  transition: all 0.3s ease;
  padding: 12px;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.05);
}

.social-icon:hover {
  background: rgba(255, 255, 255, 0.15);
  transform: translateY(-3px);
}

.icon-image {
  width: 28px;
  height: 28px;
  filter: brightness(0) invert(1);
}

.footer-disclaimer {
  font-size: 0.9rem;
  opacity: 0.8;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2.5rem;
  }
  
  .erasmus-block {
    flex-direction: column;
    text-align: center;
  }
  
  .erasmus-footer-img {
    width: 100px;
  }
}

@media (max-width: 480px) {
  .disclaimer-text {
    font-size: 0.7rem;
  }
  
  .footer-disclaimer {
    font-size: 0.8rem;
  }
  
  .social-links {
    gap: 1rem;
    justify-content: center;
  }
}
</style>