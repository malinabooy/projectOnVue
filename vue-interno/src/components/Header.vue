<script setup>
import Logo from '@/components/Logo.vue'
</script>

<template>
    <header class="header container">
        <Logo />
        <div class="header__menu-bar">
            <router-link to="/home">Home</router-link>
            <a href="#" class="header__link">Project</a>
            <router-link to="/blog">Blog</router-link>
        </div>
    </header>
</template>

<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-top: 44px;

    &__menu-bar {
        @include mixins.Jost-Regular-20;
        color: var(--color-primary-2);
        display: flex;
        gap: 25px;
    }

    &__link {
        text-decoration: none;
        cursor: pointer;

        color: var(--color-primary-2);
        transition: color 200ms linear;

        &:hover {
            color: var(--color-primary-1);
        }
    }
}
</style>
