<script setup lang="ts">
import Header from '@/components/Header.vue'
import Blog from '@/components/Blog.vue'
import Footer from '@/components/Footer.vue'
import BannerMod from '@/components/BannerMod.vue'
import LatestPost from '@/components/LatestPost.vue'
</script>

<template>
    <Header />
    <BannerMod 
        :showIntro="false" 
        introTitle="Articles & News" 
        introSubtitle="Home / Blog"
        imageUrl="components/images/BannerDetails.jpg" />

    <Footer />
</template>