<template>
    <section class="project container">
        <div class="project__heading">
            <div class="project__title">
                Follow Our Projects
            </div>
            <p class="project__subtitle">
                It is a long established fact that a reader will be distracted by the of readable content of page
                lookings at its layouts points.
            </p>
        </div>
        <div class="project__decor-cards">
            <DecorCard :cards="cardsData1.slice(0, cardCount)" />
        </div>
    </section>
</template>

<script setup>
import DecorCard from '@/components/DecorCard.vue';

const cardsData1 = [
  { imageSrc: './src/assets/images/decor1.jpg', name: 'Modern Kitchen', place: 'Decor / Architecture' },
  { imageSrc: './src/assets/images/decor2.jpg', name: 'Modern Kitchen', place: 'Decor / Architecture' },
  { imageSrc: './src/assets/images/decor3.jpg', name: 'Modern Kitchen', place: 'Decor / Architecture' },
  { imageSrc: './src/assets/images/decor4.jpg', name: 'Modern Kitchen', place: 'Decor / Architecture' },
];

const props = defineProps({
  cardCount: {
    type: Number,
  }
});
</script>

<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.project {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__heading {
        max-width: 737px;
        text-align: center;
    }

    &__title {
        @include mixins.DM-Regular-50;
        color: var(--color-primary-2);
    }

    &__subtitle {
        margin-block: 8px 93px;
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-5);
    }

    &__decor-cards {
        display: flex;
        align-items: center;
        justify-content: space-between;
        row-gap: 56px;
        flex-wrap: wrap;
    }
}
</style>