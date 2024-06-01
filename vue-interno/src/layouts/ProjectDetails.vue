<template>
  <div>
    <Header />
    <BannerMod :showIntro="false" imageUrl="assets/images/ProjectDetails.jpg" />
    <ProjectContent :currentSlide="currentSlide" :images="images" />
    <Pagination :currentPage="currentSlide + 1" :totalPages="images.length" :isModifierActive="true"
      @pageChange="goToSlide" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import Header from '@/components/Header.vue'
import BannerMod from '@/components/BannerMod.vue'
import ProjectContent from '@/components/ProjectContent.vue'
import Pagination from '@/components/Pagination.vue'
import Footer from '@/components/Footer.vue'

const images = ref([
  './src/assets/images/ProjectDetailsImg1.jpg',
  './src/assets/images/ProjectDetailsImg1.jpg',
  './src/assets/images/ProjectDetailsImg1.jpg'
])

const currentSlide = ref(0)

function goToSlide(page: number) {
  currentSlide.value = page - 1
}
</script>