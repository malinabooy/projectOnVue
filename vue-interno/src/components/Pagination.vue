<template>
    <div class="pagination">
        <button class="pagination__btn pagination__prev-btn">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.44286 1L1.5 7.68571L7.44286 14.3714" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
        <button class="pagination__btn">01</button>
        <button class="pagination__btn">02</button>
        <button class="pagination__btn">03</button>
        <button class="pagination__btn pagination__next-btn">
            <svg width="9" height="16" viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.55714 15L7.5 8.31429L1.55714 1.62857" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{
    currentPage: number;
    totalPages: number;
}>();
</script>

<style lang="scss" scoped>
@use '../assets/mixins.scss';
@use '../assets/fonts.scss';

.pagination {
    margin-top: 51px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &__btn {
        cursor: pointer;

        width: 52px;
        height: 52px;
        display: flex;
        align-items: center;
        justify-content: center;

        @include mixins.Jost-Bold-16;
        color: var(--color-primary-2);

        border-radius: 100%;
        border: 1px solid var(--color-primary-1);
        background-color: var(--color-primary-4);

        transition: background-color 200ms linear, border 200ms linear;

        &:hover {
            border: 1px solid var(--color-primary-3);
            background-color: var(--color-primary-3);
        }
    }
}
</style>