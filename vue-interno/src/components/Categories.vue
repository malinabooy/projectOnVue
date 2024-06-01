<template>
    <div class="categories">
      <div class="categories__items-box">
        <p class="categories__item" @click="() => filterCategory('Bathroom')">Bathroom</p>
        <p class="categories__item" @click="() => filterCategory('Bedroom')">Bedroom</p>
        <p class="categories__item" @click="() => filterCategory('Kitchen')">Kitchen</p>
        <p class="categories__item" @click="() => filterCategory('Living Area')">Living Area</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineEmits } from 'vue';
  
  const emit = defineEmits(['filter-category']);
  
  const filterCategory = (category: string) => {
    emit('filter-category', category);
  };
  </script>
<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.categories {
    margin-bottom: 60px;
    display: flex;
    align-items: center;
    justify-content: center;

    &__items-box {
        display: flex;
        border: 1px solid var(--color-primary-1);
        border-radius: 19px;
    }

    &__item {
      cursor: pointer;

        @include mixins.Jost-Regular-18;
        color: var(--color-primary-2);
        padding: 26px 68px;

        border-radius: 18px;
        transition: color 200ms linear, background-color 200ms linear;

        &:hover {
            color: var(--color-primary-4);
            background-color: var(--color-primary-1);
        }
    }
}
</style>