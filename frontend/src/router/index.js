import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '/src/views/HomeView.vue'
import AdminPanel from '/src/views/AdminView.vue'; // Импортируйте AdminPanel


export const routes = [ // Добавьте 'export' перед 'const routes'
  { path: '/', name: 'Main Page', component: HomeView },
  { path: '/about', name: 'About Project', component: () => import('../views/AboutView.vue') },
  { path: '/contact', name: '', component: () => import('../views/ContactView.vue') },
  { path: '/news/:id',name: 'News And Events',component: () => import('../views/NewsView.vue'),props:true},
  { path: '/admin', name: 'Admin Panel', component: AdminPanel }, // Добавьте новый маршрут

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

router.beforeEach((to, from, next) => {
  const isAdmin = true; // Замените проверку на вашу логику (например, из хранилища или контекста)
  if (to.name === 'Admin Panel' && !isAdmin) {
    next({ name: 'Main Page' }); // Если пользователь не администратор, перенаправьте на главную страницу
  } else {
    next(); // Продолжите навигацию
  }
});

export default router
