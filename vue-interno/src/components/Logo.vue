<template>
    <a href="#" class="header__logo logo">
        <img src="./icons/Logo.svg" alt="">
    </a>
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