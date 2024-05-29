<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps<{
    showIntro: boolean;
    introTitle: string;
    introSubtitle: string;
    imageUrl: string;
}>();
</script>

<template>
    <div class="banner-mod">
        <div class="banner-mod__image-box">
            <img :src="'./src/'+imageUrl" alt="">
            <div v-if="showIntro" class="banner-mod__intro">
                <p class="banner-mod__title">
                    {{ introTitle }}
                </p>
                <p class="banner-mod__subtitle">
                    {{ introSubtitle }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.banner-mod {
    margin-top: 45px;
    margin-bottom: 200px;

    &__image-box {
        position: relative;
        height: 356px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    &__intro {
        position: absolute;
        bottom: 0;
        left: calc(50% - 251.5px);

        background-color: var(--color-primary-4);
        height: 178px;
        width: 503px;

        border-radius: 37px 37px 0 0;
        padding: 41px 78px;
        box-sizing: border-box;

        text-align: center;
    }

    &__title {
        @include mixins.DM-Regular-50;
        color: var(--color-primary-2);
    }

    &__subtitle {
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-2);
    }
}
</style>