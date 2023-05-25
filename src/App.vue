<template>
    <header-comp />
    <div class="page-container">
        <router-view />
    </div>
    <footer-comp />
</template>

<script>
import FooterComp from "./components/FooterComp.vue";
import HeaderComp from "./components/HeaderComp.vue";

export default {
    components: { HeaderComp, FooterComp },
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
    min-height: 100vh;
    text-align: left;
    color: #2c3e50;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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

button {
    border: 0;
}

.page-container {
    margin: 0 20px 100px 20px;
}
</style>
