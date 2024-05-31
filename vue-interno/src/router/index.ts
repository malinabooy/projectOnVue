import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/layouts/HomePage.vue'
import BlogPage from '@/layouts/BlogPage.vue'
import BlogDetails from '@/layouts/BlogDetails.vue'
import ProductDetails from '@/components/ProductDetails.vue'

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
  },
  { 
    path: '/product',
    name: 'product',
    component: ProductDetails
  },
  {
    path: '/blog-details',
    name: 'BlogDetails',
    component: BlogDetails
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
