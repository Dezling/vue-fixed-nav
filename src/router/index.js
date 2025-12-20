import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'

export const routes = [
  { path: '/', name: 'Main Page', component: HomeView },
  { path: '/about', name: 'About', component: () => import('../views/AboutView.vue') },
  { path: '/news', name: 'News & Events', component: () => import('../views/NewsView.vue') },
  { path: '/educational-resources', name: 'Educational Resources', component: () => import('../views/EducationalResourcesView.vue') },
  { path: '/green-deal-center', name: 'Green Deal Center', component: () => import('../views/GreenDealCenterView.vue') },
  { path: '/results', name: 'Results', component: () => import('../views/ResultsView.vue') },
  { path: '/contact', name: '', component: () => import('../views/ContactView.vue') },
  { path: '/news/:id', name: '', component: () => import('../views/NewsView.vue'), props: true },
  { path: '/publications', name: '', component: () => import('../views/ComingSoonView.vue') },
  { path: '/hubs-contacts', name: '', component: () => import('../views/HubsContactsView.vue') },
  { path: '/results/esg-profiles/:universityId', name: '', component: () => import('../views/UniversityProfileView.vue'), props: true },
  
  // Educational Resources nested routes
  { path: '/educational-resources/student-support', name: '', component: () => import('../views/StudentSupportView.vue') },
  { path: '/educational-resources/open-education', name: '', component: () => import('../views/OpenEducationView.vue') },
  { path: '/educational-resources/how-and-why', name: '', component: () => import('../views/HowAndWhyView.vue') },
  { path: '/educational-resources/academic-skills', name: '', component: () => import('../views/AcademicSkillsView.vue') },
  { path: '/educational-resources/regenerative-tools', name: '', component: () => import('../views/RegenerativeToolsView.vue') },
  { path: '/educational-resources/green-skills', name: '', component: () => import('../views/ComingSoonView.vue') }
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
