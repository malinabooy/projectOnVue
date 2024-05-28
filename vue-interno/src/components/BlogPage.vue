<script setup lang="ts">
import Header from '@/components/Header.vue'
import Blog from '@/components/Blog.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
    <Header />
    <Blog modifier="blog--modifier-class" :articlesCount="6" />
    <Footer />
</template>
