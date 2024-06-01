<template>
  <div class="project-content container">
    <div class="project-content__info">
      <p class="project-content__title">{{ title }}</p>
      <p class="project-content__text" v-html="processedText"></p>
    </div>
    <div class="project-content__swiper">
      <div class="swiper-wrapper" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
        <div class="swiper-slide" v-for="(image, index) in images" :key="index">
          <div class="image-container">
            <img :src="image" :alt="'Project content Image ' + (index + 1)" />
            <div class="project-content__zoom-icon">
              <img src="@/assets/icons/Zoom.svg" alt="Zoom Icon">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'
import { useStore } from 'vuex'


const props = defineProps({
  currentSlide: {
    type: Number,
    required: true
  },
  images: {
    type: Array as PropType<string[]>,
    required: true
  }
})

const store = useStore()

const title = computed(() => store.getters.getTitle)
const text = computed(() => store.getters.getText)
const processedText = computed(() => text.value.replace(/\n/g, '<br>'))
</script>
<style lang="scss">
   @use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.project-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  &__info {
    margin-bottom: 100px;
    max-width: 658px;
  }

  &__title {
    text-align: center;
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
        border-radius: 70px;
        overflow: hidden;

        img {
          display: block;
          width: 100%;
          height: auto;
        }

        .project-content__zoom-icon {
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

        &:hover .project-content__zoom-icon {
          opacity: 1;
        }
      }
    }
  }
}
</style>