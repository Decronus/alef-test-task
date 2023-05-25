<template>
    <div class="add-child-wrap">
        <input-comp placeholder="Имя" @inputEmit="(value) => $emit('nameInputEmit', value)" />
        <input-comp placeholder="Возраст" @inputEmit="(value) => $emit('ageInputEmit', value)" :onlyNumbers="true" />
        <p @click="() => $emit('deleteChild', index)">Удалить</p>
    </div>
</template>

<script>
import InputComp from "./InputComp.vue";

export default {
    components: { InputComp },
    name: "add-child",
    props: {
        index: {
            required: true,
            type: Number,
        },
    },
};
</script>

<style>
.add-child-wrap {
    display: flex;
    align-items: center;
    gap: 18px;
    margin-bottom: 10px;
}

.add-child-wrap > p {
    color: #01a7fd;
    cursor: pointer;
}

.add-child-wrap > p:hover {
    color: #76d1ff;
}
</style>
