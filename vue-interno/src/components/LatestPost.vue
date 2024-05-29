<script setup>

</script>

<template>
    <section class="latest-post container">
        <p class="latest-post__title">Latest Post</p>
        <div class="latest-post__box">
            <img src="@/components/images/post.jpg" alt="">
            <article class="latest-post__info">
                <p class="latest-post__title-info">Low Cost Latest Invented Interior Designing Ideas</p>
                <p class="latest-post__text-info">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis
                    dignissim maximus.posuere in.Contrary to popular belief.<br><br>
                    Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>

                <div class="latest-post__bottom-info">
                    <p class="latest-post__date">26 December,2022</p>
                    <button class="latest-post__btn-info">
                        <svg width="9" height="17" viewBox="0 0 9 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.77101 15.1855L7.71387 8.49983L1.77101 1.81412" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                </div>
            </article>
        </div>
    </section>
</template>

<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.latest-post {
    margin-bottom: 150px;
    &__title {
        @include mixins.DM-Regular-50;
        color: var(--color-primary-2);
        margin-bottom: 30px;
    }

    &__box {
        display: flex;
        align-items: center;
        justify-content: center;

        gap: 65px;

        border: 1px solid #e7e7e7;
        border-radius: 62px;
        padding: 22px;
        height: 522px;
        box-sizing: border-box;

        img {
            height: 100%;
            width: 569px;
        }
    }

    &__info {
        display: flex;
        flex-direction: column;
    }

    &__title-info {
        @include mixins.DM-Regular-25;
        color: var(--color-primary-2);
        margin-bottom: 22px;
    }

    &__text-info {
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-2);
    }

    &__bottom-info {
        margin-top: 41px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__date {
        @include mixins.Jost-Regular-16;
        color: var(--color-primary-2);
    }

    &__btn-info {
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

    &__btn-info svg {
        color: var(--color-primary-2);
        transition: color 200ms linear;
    }

}
</style>