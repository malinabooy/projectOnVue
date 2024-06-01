<template>
    <section class="counter">
        <div class="counter__blocks container">
            <div class="counter__block" v-for="(item, index) in counterData" :key="index">
                <div class="counter__number">{{ item.number }}</div>
                <div class="counter__text">{{ item.text }}</div>
            </div>
        </div>
    </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const counterData = ref([
  { number: 12, text: 'Years Of Experience' },
  { number: 85, text: 'Success Projects' },
  { number: 15, text: 'Active Projects' },
  { number: 95, text: 'Happy Customers' }
])
</script>

<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.counter {
    margin-block: 96px;
    background-color: var(--color-primary-3);

    &__blocks {
        padding: 151px 60px;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }

    &__block {
        border-right: 1px solid #CDA274;
        text-align: center;

        &:nth-child(4) {
            border-right: none;
        }
    }

    &__number {
        @include mixins.DM-Regular-85;
        color: var(--color-primary-1);
    }

    &__text {
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-5);
    }
}
</style>