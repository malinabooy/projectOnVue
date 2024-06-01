<template>
  <div>
    <Header />
    <BannerMod :showIntro="false" imageUrl="components/images/ProjectDetails.jpg" />

    <div class="project-details container">
      <div class="project-details__info">
        <p class="project-details__title">{{ title }}</p>
        <p class="project-details__text" v-html="processedText"></p>
      </div>
      <div class="project-details__swiper">
        <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
          <div class="swiper-slide" v-for="(image, index) in images" :key="index">
            <div class="image-container">
              <img :src="image" :alt="'Project Details Image ' + (index + 1)" />
              <div class="project-details__zoom-icon">
                <img src="@/components/icons/Zoom.svg" alt="Zoom Icon">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Pagination :currentPage="currentSlide + 1" :totalPages="images.length" :isModifierActive="true"
      @pageChange="goToSlide" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useStore } from 'vuex'

import Header from '@/components/Header.vue'
import BannerMod from '@/components/BannerMod.vue'
import Pagination from '@/components/Pagination.vue'
import Footer from '@/components/Footer.vue'

const store = useStore()

const title = computed(() => store.getters.getTitle)
const text = computed(() => store.getters.getText)
const processedText = computed(() => text.value.replace(/\n/g, '<br>'))

const images = ref([
  './src/components/images/ProjectDetailsImg1.jpg',
  './src/components/images/ProjectDetailsImg1.jpg',
  './src/components/images/ProjectDetailsImg1.jpg'
])

const currentSlide = ref(0)

function goToSlide(page: number) {
  currentSlide.value = page - 1
}
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.project-details {
  &__info {
    margin-bottom: 100px;
  }

  &__title {
    @include mixins.DM-Regular-50;
    color: var(--color-primary-2);
    margin-bottom: 11px;
  }

  &__text {
    @include mixins.Jost-Regular-22;
    color: var(--color-primary-2);
  }

  &__swiper {
    position: relative;
    width: 100%;
    max-width: 1200px;
    overflow: hidden;
    margin: 0 auto;

    .swiper-wrapper {
      display: flex;
      transition: transform 0.3s ease-in-out;
    }

    .swiper-slide {
      min-width: 100%;
      box-sizing: border-box;

      .image-container {
        position: relative;
        width: 100%;
        height: auto;

        img {
          display: block;
          width: 100%;
          height: auto;
        }

        .project-details__zoom-icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
          pointer-events: none;

          img {
            height: 132px;
            width: 132px;
          }
        }

        &:hover .project-details__zoom-icon {
          opacity: 1;
        }
      }
    }
  }
}
</style>
