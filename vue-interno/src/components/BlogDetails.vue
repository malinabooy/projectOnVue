<script setup lang="ts">
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import BannerMod from '@/components/BannerMod.vue'
import Article from '@/components/Article.vue'
</script>

<template>
    <Header />
    <BannerMod :showIntro="false" introTitle="Articles & News" introSubtitle="Home / Blog"
        imageUrl="components/images/BannerDetails.jpg" />
    <Article />
    <Footer />
</template>