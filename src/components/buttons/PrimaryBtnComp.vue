<template>
    <div class="primary-btn-wrap">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "primary-btn-comp",
};
</script>

<style>
.primary-btn-wrap {
    display: flex;
    align-items: center;
    padding: 16px 20px;
    background: #01a7fd;
    border-radius: 100px;
    color: #ffffff;
    align-self: flex-start;
}
</style>
