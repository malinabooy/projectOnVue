<template>
    <div class="not-found-page">
        <div class="not-found-page__content">
            <p class="not-found-page__title">404</p>
            <p class="not-found-page__text">We are sorry, but the page you requested was not found</p>
            <router-link to="/home" class="not-found-page__link">
                <button class="not-found-page__home-btn">
                    Back To Home
                    <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8.43542L14.7232 8.29857M9.61818 1.91138L16.1412 8.43436L9.48677 15.0887"
                            stroke="currentColor" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                    </svg>
                </button>
            </router-link>
        </div>
        <div class="not-found-page__image">
            <img src="@/assets/images/notFound.jpg" alt="not found">
        </div>
    </div>
</template>
<script>

</script>
<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.not-found-page {
    margin-top: 45px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 81px;

    @media (width < 1620px) {
        gap: 50px;
    }

    &__content {
        width: 569px;

        @media (width < 1620px) {
            width: 450px;
        }
    }

    &__title {
        @include mixins.DM-Regular-250;
        color: var(--color-primary-1);
    }

    &__text {
        @include mixins.DM-Regular-35;
        color: var(--color-primary-2);
        margin-bottom: 23px;
    }

    &__home-btn {
        cursor: pointer;

        display: flex;
        align-items: center;
        gap: 10px;

        @include mixins.Jost-Regular-18;
        color: var(--color-primary-4);

        border-radius: 18px;
        border: var(--color-primary-2);
        padding: 26px 54px;
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

    &__home-btn svg {
        color: var(--color-primary-1);
        transition: color 200ms linear;
    }

    &__image {
        width: 913px;
        max-height: 1042px;
        border-bottom-left-radius: 353px;
        overflow: hidden;

        @media (width < 1620px) {
            width: 820px;
        }

        img {
            width: 100%;
            height: 100%;
        }
    }

}
</style>