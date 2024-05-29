<template>
    <section class="counter">
        <div class="counter__blocks container">
            <div class="counter__block">
                <div class="counter__number">12</div>
                <div class="counter__text">Years Of Experiance</div>
            </div>
            <div class="counter__block">
                <div class="counter__number">85</div>
                <div class="counter__text">Success Project</div>
            </div>
            <div class="counter__block">
                <div class="counter__number">15</div>
                <div class="counter__text">Active Project</div>
            </div>
            <div class="counter__block">
                <div class="counter__number">95</div>
                <div class="counter__text">Happy Customers</div>
            </div>
        </div>
    </section>
</template>

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