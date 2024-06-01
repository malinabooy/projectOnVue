<template>
    <Header />
    <BannerMod :showIntro="false" imageUrl="assets/images/BannerDetails.jpg" />
    <Article />
    <Footer />
</template>

<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BannerMod from '@/components/BannerMod.vue'
import Article from '@/components/Article.vue'
</script>