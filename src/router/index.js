import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'

export const routes = [
  { path: '/', name: 'Main Page', component: HomeView },
  { path: '/about', name: 'About', component: () => import('../views/AboutView.vue') },
  { path: '/news', name: 'News & Events', component: () => import('../views/NewsView.vue') }, // Новый маршрут для списка
  { path: '/contact', name: '', component: () => import('../views/ContactView.vue') },
  { path: '/green-deal-center', name: 'Green Deal Center', component: () => import('../views/GreenDealCenterView.vue') },
  // { path: '/news', name: 'News & Events', component: () => import('../views/NewsView.vue') }, // Новый маршрут для списка
  { path: '/news/:id', name: '', component: () => import('../views/NewsView.vue'), props: true },
  { path: '/educational-resources', name: '', component: () => import('../views/ComingSoonView.vue') },
  { path: '/publications', name: '', component: () => import('../views/ComingSoonView.vue') },
  { path: '/hubs-contacts', name: '', component: () => import('../views/HubsContactsView.vue') },
]
import { onMounted, ref } from 'vue'

const sectionRefs = ref([])

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, { threshold: 0.1 })

  sectionRefs.value.forEach(el => observer.observe(el))
})

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
