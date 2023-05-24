<template>
    <div class="add-btn-wrap">
        <plus-icon-comp />
        <slot></slot>
    </div>
</template>

<script>
import PlusIconComp from "../icons/PlusIconComp.vue";
export default {
    components: { PlusIconComp },
    name: "add-btn-comp",
};
</script>

<style>
.add-btn-wrap {
    padding: 13.5px 23.5px;
    border: 2px solid #01a7fd;
    border-radius: 100px;
    cursor: pointer;
    color: #01a7fd;
    display: flex;
    align-items: center;
    gap: 7.5px;
}

.add-btn-wrap:hover {
    border: 2px solid #76d1ff;
}
</style>
