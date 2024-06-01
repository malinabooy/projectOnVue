<template>
    <router-link to="/home" class="header__logo logo">
        <img src="/src/assets/icons/Logo.svg" alt="">
    </router-link>
</template>

<style lang="scss">
.logo img {
    height: 50px;
    cursor: pointer;

    transition: transform 200ms linear;

    &:hover {
        transform: scale(1.1);
    }
}
</style>