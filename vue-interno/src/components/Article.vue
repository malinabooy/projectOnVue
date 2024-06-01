<template>
    <article class="article container" v-if="filteredBlog">
        <div class="article__block">
            <p class="article__title">{{ filteredBlog.title }}</p>
            <img class="article__main-image" :src="'./src/' + filteredBlog.imgSrc" :alt="filteredBlog.title">
            <div class="article__date-tag">
                <p class="article__date">{{ filteredBlog.date }}</p>
                <p class="article__tag">{{ filteredBlog.tag }}</p>
            </div>
            <p class="article__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
                belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injecthumour, or randomised words which don't look even slightly believable.
                <br><br>Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend
                to repeat predefined chunks as necessary.
            </p>
            <div class="article__quotes">
                <img src="@/components/images/Quotes.jpg" alt="">
            </div>
            <p class="article__title">{{ filteredBlog.secondTitle }}</p>
            <p class="article__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
                belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
            <ul>
                <li>
                    <p class="article__text article__list">Contrary to popular belief.There are many variations of
                        passages of Lorem Ipsum available, but the
                        majority have suffered.</p>
                </li>
                <li>
                    <p class="article__text article__list">Contrary to popular belief.There are many variations of
                        passages of Lorem Ipsum available, but the
                        majority have suffered.</p>
                </li>
                <li>
                    <p class="article__text article__list">Contrary to popular belief.There are many variations of
                        passages of Lorem Ipsum available, but the
                        majority have suffered.</p>
                </li>
            </ul>
            <img class="article__second-image" :src="'./src/' + filteredBlog.secondImgSrc"
                :alt="filteredBlog.secondTitle">
            <p class="article__text">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular
                belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.
            </p>
        </div>
        <div class="article__sidebar">
            <p class="article__sidebar-title">
                Tags
            </p>
            <div class="article__tags-block">
                <p class="article__sidebar-tag" v-for="tag in tags" :key="tag" @click="selectTag(tag)"
                    :class="{ 'selected': tag === selectedTag }">
                    {{ tag }}
                </p>
            </div>
        </div>
    </article>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const allBlogs = ref([
    {
        id: 1,
        imgSrc: "components/images/articleImg.jpg",
        title: "Let's Get Solution for Building Construction Work",
        date: "26 December,2022",
        tag: "Interior / Home / Decore",
        secondTitle: "Design sprints are great",
        secondImgSrc: "components/images/articleSecondImg.jpg"
    },
    {
        id: 2,
        imgSrc: "components/images/articleSecondImg.jpg",
        title: "Another Blog Post",
        date: "15 January,2023",
        tag: "Kitchen",
        secondTitle: "Another great design",
        secondImgSrc: "components/images/articleImg.jpg"
    }
]);

const selectedTag = ref('');

const tags = ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Interior / Home / Decore'];

const filteredBlog = computed(() => {
    if (selectedTag.value) {
        return allBlogs.value.find(blog => blog.tag.includes(selectedTag.value)) || null;
    }
    return allBlogs.value[0];
});

const selectTag = (tag: string) => {
    selectedTag.value = tag;
};
</script>

<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.article {
    display: flex;
    gap: 52px;

    &__block {
        display: flex;
        flex-direction: column;
    }

    &__title {
        @include mixins.DM-Regular-50;
        color: var(--color-primary-2);
        margin-bottom: 21px;
    }

    &__main-image {
        width: 799px;
        height: 539px;
        border-radius: 50px;
    }

    &__date-tag {
        margin-block: 46px;
        display: flex;
        justify-content: space-between;

        @include mixins.Jost-Regular-16;
        color: var(--color-primary-2);
    }

    &__tag {
        margin-right: 70px;
    }

    &__text {
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-2);
    }

    &__quotes {
        margin-top: 35px;
        margin-bottom: 27px;
        border-radius: 50px;
        width: 799px;
        height: 267px;

        img {
            height: 100%;
            width: 100%;
        }
    }

    &__second-image {
        width: 799px;
        height: 365px;
        margin-top: 44px;
        margin-bottom: 35px;
    }

    ul {
        display: flex;
        gap: 32px;
        flex-direction: column;
        margin-top: 24px;
        list-style: none;
        padding: 0;
        margin-left: 30px;

        li {
            counter-increment: list-counter;
            position: relative;

            .article__list::before {
                content: counter(list-counter);
                @include mixins.DM-Regular-20;
                color: var(--color-primary-1);
                position: absolute;
                top: 3px;
                left: -25px;
            }
        }
    }

    &__sidebar {
        flex-shrink: 0;
        width: 345px;
        height: 200px;
    }

    &__sidebar-title {
        @include mixins.DM-Regular-25;
        color: var(--color-primary-2);
        margin-bottom: 24px;

    }

    &__tags-block {
        display: flex;
        flex-wrap: wrap;

        gap: 10px;
    }

    &__sidebar-tag {
        cursor: pointer;

        border-radius: 10px;
        padding: 9px 30px;
        box-sizing: border-box;
        background-color: var(--color-primary-3);

        @include mixins.Jost-Regular-18;
        color: var(--color-primary-2);
        line-height: 125%;
        white-space: pre;

        transition: background-color 200ms linear, color 200ms linear;

        &:hover {
            background-color: var(--color-primary-2);
            color: var(--color-primary-4);
        }
    }
}
</style>