<template>
    <footer class="footer container">
        <div class="footer__block">
            <Logo />
            <p class="footer__text">
                It is a long established fact that a reader <br>will be distracted lookings.
            </p>
            <div class="footer__socials">
                <a href="#" class="footer__icon">
                    <img src="../icons/twit.svg" alt="">
                </a>
                <a href="#" class="footer__icon">
                    <img src="../icons/inst.svg" alt="">
                </a>
            </div>
        </div>
        <div class="footer__block">
            <div class="footer__title">
                Pages
            </div>
            <router-link to="/home" class="footer__link footer__text">Home</router-link>
            <router-link to="/project" class="footer__link footer__text">Project</router-link>
            <router-link to="/blog" class="footer__link footer__text">Blog</router-link>
        </div>
        <div class="footer__block">
            <div class="footer__title">
                Contact
            </div>
            <p class="footer__contacts footer__text">55 East Birchwood Ave.<br>Brooklyn, New York 11201</p>
            <p class="footer__contacts footer__text">contact@interno.com</p>
            <p class="footer__contacts footer__text">(123) 456 - 7890</p>
        </div>
    </footer>
</template>

<script setup>
import Logo from '@/components/Logo.vue'
</script>

<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.footer {
    display: flex;
    justify-content: space-between;

    margin-bottom: 118px;
    margin-top: 96px;

    &__block {
        display: flex;
        flex-direction: column;
    }

    &__link {
        text-decoration: none;
        cursor: pointer;

        transition: color 200ms linear;
        &:hover {
            color: var(--color-primary-1);
        }
    }

    &__title {
        @include mixins.DM-Regular-25;
        color: var(--color-primary-5);

    }

    &__text {
        margin-top: 25px;

        @include mixins.Jost-Regular-22;
        color: var(--color-primary-5);
    }

    &__socials {
        margin-top: 31px;
        display: flex;
        gap: 64px;
    }
}
</style>