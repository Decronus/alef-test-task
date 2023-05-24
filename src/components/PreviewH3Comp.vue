<template>
    <h3 class="preview-h3">
        <slot></slot>
    </h3>
</template>

<script>
export default {
    name: "preview-h3-comp",
};
</script>

<style>
.preview-h3 {
    font-weight: 700;
    margin-bottom: 0;
}
</style>
