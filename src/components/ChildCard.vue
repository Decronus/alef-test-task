<template>
    <div class="child-card-wrap">
        <preview-h3-comp>
            <slot></slot>
        </preview-h3-comp>
    </div>
</template>

<script>
import PreviewH3Comp from "./PreviewH3.vue";
export default {
    name: "child-card-wrap",
    components: { PreviewH3Comp },
};
</script>

<style>
.child-card-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    background: #f1f1f1;
    border-radius: 5px;
    margin-bottom: 20px;
}
</style>
