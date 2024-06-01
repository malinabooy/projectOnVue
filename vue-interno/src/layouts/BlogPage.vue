<template>
    <Header />
    <BannerMod 
        :showIntro="true" 
        introTitle="Articles & News" 
        introSubtitle="Home / Blog"
        imageUrl="components/images/BannerBlog.jpg" />
    <LatestPost />
    <Blog modifier="blog--modifier-class" :articlesCount="6" />
    <Footer />
</template>
<script setup lang="ts">
import Header from '@/components/Header.vue'
import BannerMod from '@/components/BannerMod.vue'
import LatestPost from '@/components/LatestPost.vue'
import Blog from '@/components/Blog.vue'
import Footer from '@/components/Footer.vue'
</script>