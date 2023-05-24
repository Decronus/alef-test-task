<template>
    <header-comp />
    <router-view />
</template>

<script>
import HeaderComp from "./components/HeaderComp.vue";
export default {
    components: { HeaderComp },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&display=swap");

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
}

#app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    width: 100vw;
    text-align: left;
    color: #2c3e50;
}

h3 {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 20px;
}

p {
    font-size: 14px;
    font-weight: 400;
}
</style>
