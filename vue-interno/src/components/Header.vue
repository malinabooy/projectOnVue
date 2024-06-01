<template>
    <header class="header container">
        <Logo />
        <div class="header__menu-bar">
            <router-link to="/home" class="header__link">Home</router-link>
            <router-link to="/project" class="header__link">Project</router-link>
            <router-link to="/blog" class="header__link">Blog</router-link>
        </div>
    </header>
</template>
<script setup>
import Logo from '@/components/Logo.vue'
</script>
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
