import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import BlogPage from '@/components/BlogPage.vue'
import BlogDetails from '@/components/BlogDetails.vue'
import HwProductList from '@/components/HwProductList.vue'

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
    path: '/productlist',
    name: 'ProductList',
    component: HwProductList
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
