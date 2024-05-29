<script setup>

</script>

<template>
    <section class="project container">
        <div class="project__heading">
            <div class="project__title">
                Follow Our Projects
            </div>
            <p class="project__subtitle">
                It is a long established fact that a reader will be distracted by the of readable content of page
                lookings at its layouts points.
            </p>
        </div>
        <div class="project__decor-cards">
            <div class="project__decor-card">
                <img src="./images/decor1.jpg" alt="">
                <div class="project__decor-subcard">
                    <div class="project__decor-info">
                        <div class="project__decor-name">Modern Kitchan</div>
                        <div class="project__decor-place">Decor / Artchitecture</div>
                    </div>

                    <a href="#">
                        <button class="project__decor-btn">
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 19L9 10L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            <div class="project__decor-card">
                <img src="./images/decor2.jpg" alt="">
                <div class="project__decor-subcard">
                    <div class="project__decor-info">
                        <div class="project__decor-name">Modern Kitchan</div>
                        <div class="project__decor-place">Decor / Artchitecture</div>
                    </div>

                    <a href="#">
                        <button class="project__decor-btn">
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 19L9 10L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            <div class="project__decor-card">
                <img src="./images/decor3.jpg" alt="">
                <div class="project__decor-subcard">
                    <div class="project__decor-info">
                        <div class="project__decor-name">Modern Kitchan</div>
                        <div class="project__decor-place">Decor / Artchitecture</div>
                    </div>

                    <a href="#">
                        <button class="project__decor-btn">
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 19L9 10L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
            <div class="project__decor-card">
                <img src="./images/decor4.jpg" alt="">
                <div class="project__decor-subcard">
                    <div class="project__decor-info">
                        <div class="project__decor-name">Modern Kitchan</div>
                        <div class="project__decor-place">Decor / Artchitecture</div>
                    </div>

                    <a href="#">
                        <button class="project__decor-btn">
                            <svg width="10" height="20" viewBox="0 0 10 20" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 19L9 10L1 1" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>

    </section>

</template>
<style lang="scss">
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.project {
    display: flex;
    flex-direction: column;
    align-items: center;

    &__heading {
        max-width: 737px;
        text-align: center;
    }

    &__title {
        @include mixins.DM-Regular-50;
        color: var(--color-primary-2);
    }

    &__subtitle {
        margin-block: 8px 93px;
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-5);
    }

    &__decor-cards {
        display: flex;
        align-items: center;
        justify-content: space-between;
        row-gap: 56px;
        flex-wrap: wrap;
    }

    &__decor-card {
        img {
            width: 524px;
            height: 548px;
        }
    }

    &__decor-subcard {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    &__decor-name {
        margin-block: 28px 4px;
        @include mixins.DM-Regular-25;
        color: var(--color-primary-2);
    }

    &__decor-place {
        @include mixins.Jost-Regular-22;
        color: var(--color-primary-5);
    }

    &__decor-btn {
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

    &__decor-btn svg {
        color: var(--color-primary-2);
        transition: color 200ms linear;
    }

}
</style>