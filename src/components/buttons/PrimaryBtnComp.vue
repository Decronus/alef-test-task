<template>
    <div class="primary-btn-wrap" :style="disabledStyle">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: "primary-btn-comp",
    props: {
        disabled: {
            required: true,
            type: Boolean,
        },
    },

    computed: {
        disabledStyle() {
            return this.disabled ? { background: "#DDDDDD", pointerEvents: "none" } : null;
        },
    },
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
    cursor: pointer;
    margin-top: 20px;
}

.primary-btn-wrap:hover {
    background: #2bb8ff;
}
</style>
