<template>
    <header class="header">
        <logo-comp />
        <div class="header-menu-wrap">
            <p @click="$router.push('/')">Форма</p>
            <p @click="$router.push('/preview')">Превью</p>
        </div>
    </header>
</template>

<script>
import LogoComp from "./LogoComp.vue";

export default {
    name: "header-comp",
    components: { LogoComp },
};
</script>

<style>
.header {
    height: 76px;
    width: 100%;
    align-items: center;
    padding: 0 92px;
    display: flex;
    gap: 473px;
    border-bottom: 1px solid #e7e7e7;
    margin-bottom: 30px;
}

.header-menu-wrap {
    display: flex;
    gap: 24px;
    color: #8d8d8d;
}

.header-menu-wrap p:hover {
    color: #01a7fd;
    cursor: pointer;
}

@media (max-width: 886px) {
    .header {
        gap: 0;
        justify-content: space-between;
        padding: 20px;
    }
}
</style>
