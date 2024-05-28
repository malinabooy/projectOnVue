import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import BlogPage from '@/components/BlogPage.vue'

const routes = [
  {
    path: '/home',
    name: 'HomePage',
    component: HomePage,
    alias: '/'
  },
  {
    path: '/blog',
    name: 'BlogPage',
    component: BlogPage
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
