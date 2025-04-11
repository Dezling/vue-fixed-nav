import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'

export const routes = [ 
  { path: '/', name: 'Main Page', component: HomeView },
  { path: '/about', name: 'About Project', component: () => import('../views/AboutView.vue') },
  { path: '/contact', name: '', component: () => import('../views/ContactView.vue') },
  { path: '/news/:id',name: 'News And Events',component: () => import('../views/NewsView.vue'),props:true},

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
