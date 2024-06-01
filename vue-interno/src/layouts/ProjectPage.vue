<template>
  <Header />
  <BannerMod :showIntro="true" introTitle="Our Project" introSubtitle="Home / Project"
             imageUrl="components/images/ProjectImg.jpg"/>
  <Categories @filter-category="handleFilter"/>
  <div class="project-page__cards-block container">
    <DecorCard :cards="filteredCards" customClass="project-page__decor-card"/>
  </div>
  <Pagination :currentPage="currentPage" :totalPages="totalPages"/>
  <Footer/>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import BannerMod from '@/components/BannerMod.vue';
import Categories from '@/components/Categories.vue';
import DecorCard from '@/components/DecorCard.vue';
import Pagination from '@/components/Pagination.vue';
import Footer from '@/components/Footer.vue';

const cardsData2 = [
  { imageSrc: './src/components/images/project1.jpg', name: 'Living Area', place: 'Decor / Architecture' },
  { imageSrc: './src/components/images/project3.jpg', name: 'Classic Minimal Bedroom', place: 'Decor / Architecture' },
  { imageSrc: './src/components/images/project5.jpg', name: 'Minimal Bedroom Table', place: 'Decor / Architecture' },
  { imageSrc: './src/components/images/project7.jpg', name: 'Modern Bathroom', place: 'Decor / Architecture' },
  { imageSrc: './src/components/images/project2.jpg', name: 'Minimal Bedroom', place: 'Decor / Architecture' },
  { imageSrc: './src/components/images/project4.jpg', name: 'Modern Bathroom', place: 'Decor / Architecture' },
  { imageSrc: './src/components/images/project6.jpg', name: 'Minimal Kitchen', place: 'Decor / Architecture' },
  { imageSrc: './src/components/images/project8.jpg', name: 'Modern Bathroom', place: 'Decor / Architecture' },
];

const cardCount = 8;
const currentPage = ref(1);
const totalPages = ref(3);
const filteredCards = ref([...cardsData2.slice(0, cardCount)]);

const handleFilter = (category: string) => {
  filteredCards.value = cardsData2.filter(card => card.name.toLowerCase().includes(category.toLowerCase()));
};
</script>

<style lang="scss">
.project-page__cards-block {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  max-height: 3235px;

  .project-page__decor-card {
    img {
      object-fit: cover;
      width: 585px;
      height: 522px;
    }
  }

  .project-page__decor-card:nth-child(1) {
    img {
      height: 853px;
    }
  }

  .project-page__decor-card:nth-child(3) {
    img {
      height: 853px;
    }
  }

  .project-page__decor-card:nth-child(6) {
    img {
      height: 853px;
    }
  }

}
</style>