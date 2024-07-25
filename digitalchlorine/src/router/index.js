import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
        return {
            el: to.hash,
            top: 110, // Décalage de 110 pixels
            behavior: 'smooth'
        };
    } else if (savedPosition) {
        return savedPosition;
    } else {
        return { top: 0 };
    }
  }
})

export default router
