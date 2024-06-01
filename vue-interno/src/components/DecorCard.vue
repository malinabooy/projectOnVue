<template>
    <div :class="['decor-card', customClass]" v-for="(card, index) in cards" :key="index">
      <img :src="card.imageSrc" alt="">
      <div class="decor-card__subcard">
        <div class="decor-card__info">
          <div class="decor-card__name">{{ card.name }}</div>
          <div class="decor-card__place">{{ card.place }}</div>
        </div>
        <router-link to="/project-details">
          <button class="decor-card__btn">
            <svg width="10" height="20" viewBox="0 0 10 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 19L9 10L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round"/>
            </svg>
          </button>
        </router-link>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps({
    cards: {
      type: Array,
      required: true,
      validator: (value) => value.every(item => 'imageSrc' in item && 'name' in item && 'place' in item)
    },
    customClass: {
      type: String,
      default: ''
    }
  });
  </script>

<style scoped lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.decor-card {
    &__subcard {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;
        max-width: 585px;
    }

    &__name {
        margin-bottom: 4px;
        @include mixins.DM-Regular-25;
        color: var(--color-primary-2);
    }

    &__place {
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-5);
    }

    &__btn {
        cursor: pointer;

        width: 70px;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 100%;
        border: var(--color-primary-3);
        background-color: var(--color-primary-3);

        transition: background-color 200ms linear, border 200ms linear;

        &:hover {
            background-color: var(--color-primary-1);
            border: var(--color-primary-1);
        }

        &:hover svg {
            color: var(--color-primary-4);
        }
    }

    &__btn svg {
        color: var(--color-primary-2);
        transition: color 200ms linear;
    }

    img {
        width: 524px;
        height: 548px;
    }

}
</style>