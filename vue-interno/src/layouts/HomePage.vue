<template>
  <Header />
  <Banner />
  <Project :cardCount="4"/>
  <Counter />
  <Blog :articlesCount="3" />
  <Footer />
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Counter from '@/components/Counter.vue'
import Project from '@/components/Project.vue'
import Blog from '@/components/Blog.vue'
import Footer from '@/components/Footer.vue'
</script>