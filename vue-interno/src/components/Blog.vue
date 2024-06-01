<template>
    <section
        :class="['blog', modifier, 'container', { 'blog__align-center': modifier !== 'blog--modifier-class', 'blog__mb-200': modifier === 'blog--modifier-class' }]">
        <div class="blog__heading"
            :class="{ 'blog__text-center': modifier !== 'blog--modifier-class', 'blog__text-start': modifier === 'blog--modifier-class' }">
            <div class="blog__title">
                Articles & News
            </div>
            <p class="blog__subtitle" v-if="modifier !== 'blog--modifier-class'">
                It is a long established fact that a reader will be distracted by the readable content of a page when
                looking at its layout and the points of using it.
            </p>
        </div>
        <article class="blog__article-chips">
            <a v-for="article in articles" :key="article.id" :href="article.link" class="blog__article">
                <div class="blog__image-container">
                    <img :src="'./src/' + article.imgSrc" :alt="article.title">
                    <p class="blog__article-tag">{{ article.tag }}</p>
                </div>
                <div class="blog__article-title">
                    {{ article.title }}
                </div>
                <div class="blog__bottom-content">
                    <div class="blog__article-date">{{ article.date }}</div>
                    <router-link to="/blog-details">
                        <button class="blog__article-btn">
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 19L9 10L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </router-link>
                </div>
            </a>
        </article>
        <Pagination :currentPage="1" :totalPages="3" :isModifierActive="false" />
    </section>
</template>
<script setup lang="ts">
import Pagination from '@/components/Pagination.vue'

const props = defineProps<{
    modifier?: string;
    articlesCount: number;
}>();

const allArticles = [
    {
        id: 1,
        imgSrc: "components/images/blog1.jpg",
        tag: "Kitchen Design",
        title: "Let's Get Solution For Building Construction Work",
        date: "26 December,2022",
        link: "#"
    },
    {
        id: 2,
        imgSrc: "components/images/blog2.jpg",
        tag: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022",
        link: "#"
    },
    {
        id: 3,
        imgSrc: "components/images/blog3.jpg",
        tag: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        link: "#"
    },
    {
        id: 4,
        imgSrc: "components/images/blog4.jpg",
        tag: "Kitchen Design",
        title: "Let's Get Solution For Building Construction Work",
        date: "26 December,2022",
        link: "#"
    },
    {
        id: 5,
        imgSrc: "components/images/blog5.jpg",
        tag: "Living Design",
        title: "Low Cost Latest Invented Interior Designing Ideas.",
        date: "22 December,2022",
        link: "#"
    },
    {
        id: 6,
        imgSrc: "components/images/blog6.jpg",
        tag: "Interior Design",
        title: "Best For Any Office & Business Interior Solution",
        date: "25 December,2022",
        link: "#"
    }
];

const articles = allArticles.slice(0, props.articlesCount);
</script>
<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.blog {
    display: flex;
    flex-direction: column;

    &__mb-200 {
        margin-bottom: 200px;
    }

    &__align-center {
        align-items: center;
    }

    &__heading {
        max-width: 800px;
    }

    &__text-center {
        text-align: center;
    }

    &__text-start {
        text-align: start;
        margin-bottom: 30px;
    }


    &__title {
        @include mixins.DM-Regular-50;
        color: var(--color-primary-2);
    }

    &__subtitle {
        margin-block: 12px 52px;
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-5);
    }

    &__article-chips {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        column-gap: 27px;
        row-gap: 30px;
    }

    &__article {
        cursor: pointer;

        text-decoration: none;
        padding: 21px;
        border: 1px solid #e7e7e7;
        border-radius: 62px;

        transition: background-color 200ms linear;

        &:hover {
            background-color: var(--color-primary-3);
        }

        &:hover .blog__article-btn {
            background-color: var(--color-primary-4);
            border: var(--color-primary-4);
        }
    }

    &__image-container {
        border-radius: 44px 44px 0px 0px;

        overflow: hidden;
        position: relative;
        width: 340px;
        height: 290px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &__article-tag {
        position: absolute;
        bottom: 20px;
        left: 20px;

        @include mixins.Jost-Regular-16;
        color: var(--color-primary-5);

        border-radius: 8px 8px 8px 0;
        background-color: #ffffff;

        padding: 4px 8px;
    }

    &__article-title {
        margin-block: 21px 30px;
        @include mixins.DM-Regular-25;
        color: var(--color-primary-2);
    }

    &__bottom-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__article-date {
        @include mixins.Jost-Regular-16;
        color: var(--color-primary-5);
    }

    &__article-btn {
        cursor: pointer;

        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 100%;
        border: 1px solid var(--color-primary-3);
        background-color: var(--color-primary-3);

        transition: background-color 200ms linear, border 200ms linear;
    }

    &__article-btn svg {
        color: var(--color-primary-2);
        transition: color 200ms linear;
    }
}
</style>