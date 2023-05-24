<template>
    <div class="add-child-wrap">
        <input-comp placeholder="Имя" />
        <input-comp placeholder="Возраст" :onlyNumbers="true" />
        <p>Удалить</p>
    </div>
</template>

<script>
import InputComp from "./InputComp.vue";
export default {
    components: { InputComp },
    name: "add-child-comp",
};
</script>

<style>
.add-child-wrap {
    display: flex;
    align-items: center;
    gap: 18px;
}

.add-child-wrap > p {
    color: #01a7fd;
    cursor: pointer;
}

.add-child-wrap > p:hover {
    color: #76d1ff;
}
</style>
