<template>
  <nav class="navbar">
    <div class="navbar-content">
      <router-link to="/" class="logo">
        <img src="../assets/main_logo.jpg" alt="Logo" class="logo-img">
      </router-link>
      
      <div class="nav-links" :class="{ 'active': isMenuOpen }">
        <router-link 
          v-for="route in navRoutes" 
          :key="route.path" 
          :to="route.path"
          class="nav-link"
          active-class="active"
          @click="isMenuOpen = false"
        >
          {{ route.name }}
        </router-link>
      </div>
      
      <button class="menu-toggle" @click="toggleMenu">
        <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { routes } from '../router'

const navRoutes = ref(routes.filter(r => r.name))
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  z-index: 1000;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.navbar-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.logo-img {
  height: 80px;
}

.nav-links {
  display: flex;
  gap: 2rem;
  transition: transform 0.3s ease;
}

.nav-link {
  text-decoration: none;
  color: #333;
  font-weight: 500;
  transition: color 0.3s ease;
  white-space: nowrap;
}

.nav-link:hover,
.active {
  color: #42b883;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
}

.menu-toggle svg {
  width: 24px;
  height: 24px;
}

@media (max-width: 768px) {
  .nav-links {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    flex-direction: column;
    padding: 1rem 2rem;
    transform: translateY(-100%);
    visibility: hidden;
    gap: 1rem;
  }

  .nav-links.active {
    transform: translateY(0);
    visibility: visible;
  }

  .menu-toggle {
    display: block;
  }

  .navbar-content {
    padding: 1rem;
  }
}

@media (max-width: 480px) {
  .logo-img {
    height: 32px;
  }
}
</style>