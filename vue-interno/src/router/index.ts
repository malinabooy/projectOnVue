import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/layouts/HomePage.vue'
import BlogPage from '@/layouts/BlogPage.vue'
import BlogDetails from '@/layouts/BlogDetails.vue'
import ProjectPage from '@/layouts/ProjectPage.vue'
import ProjectDetails from '@/layouts/ProjectDetails.vue'
import NotFoundPage from '@/layouts/NotFoundPage.vue'

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
    path: '/project',
    name: 'ProjectPage',
    component: ProjectPage
  },
  {
    path: '/blog-details',
    name: 'BlogDetails',
    component: BlogDetails
  },
  {
    path: '/project-details',
    name: 'ProjectDetails',
    component: ProjectDetails
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFoundPage
  },
  {
    path: '/:catchAll(.*)',
    redirect: '/404'
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
