<template>
    <button class="add-btn">
        <plus-icon />
        <slot></slot>
    </button>
</template>

<script>
import PlusIcon from "@/components/icons/PlusIcon.vue";
export default {
    components: { PlusIcon },
    name: "add-button",
};
</script>

<style>
.add-btn {
    padding: 13.5px 23.5px;
    border: 2px solid #01a7fd;
    border-radius: 100px;
    cursor: pointer;
    color: #01a7fd;
    display: flex;
    align-items: center;
    gap: 7.5px;
    align-self: flex-end;
    background: none;
}

.add-btn:hover {
    border: 2px solid #76d1ff;
}
</style>
