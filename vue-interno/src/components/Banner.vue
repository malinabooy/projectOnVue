<script setup>

</script>

<template>
    <section class="banner container">
        <div class="banner__image-container">
            <img src="./images/Banner.jpg" width="1200" height="758" alt="" />
            <div class="banner__intro">
                <div class="banner__subcontent">
                    <h1 class="banner__title">
                        Let Your Home
                        Be Unique
                    </h1>
                    <p class="banner__text">
                        There are many variations of the passages of
                        lorem Ipsum fromavailable, majority.
                    </p>
                    <button class="banner__start-btn">
                        Get Started
                        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                                stroke="currentColor" stroke-width="2" stroke-linecap="square"
                                stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.banner {
    margin-top: 57px;
    margin-bottom: 96px;

    &__image-container {
        position: relative;

        img {
            border-radius: 70px;
            overflow: hidden;
            height: 100%;
            object-fit: contain;
        }
    }

    &__intro {
        position: absolute;

        display: flex;
        align-items: flex-start;
        justify-content: flex-start;
        flex-direction: column;

        width: 433px;

        top: 208px;
        left: 52px;
    }

    &__title {
        @include mixins.DM-Regular-65;
        color: var(--color-primary-2);
    }

    &__text {
        margin-block: 18px 21px;
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-5);
    }

    &__start-btn {
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 10px;

        @include mixins.Jost-Regular-18;
        color: var(--color-primary-4);

        border-radius: 18px;
        border: var(--color-primary-2);
        padding: 26px 49px 26px 48px;
        background-color: var(--color-primary-2);

        transition: background-color 200ms linear, border 200ms linear;

        &:hover {
            border: var(--color-primary-1);
            background-color: var(--color-primary-1);
        }

        &:hover svg {
            color: var(--color-primary-2);
        }
    }

    &__start-btn svg {
        color: var(--color-primary-1);
        transition: color 200ms linear;
    }

}
</style>