<template>
    <button class="primary-button" :style="disabledStyle">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "primary-button",
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
.primary-button {
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

.primary-button:hover {
    background: #2bb8ff;
}
</style>
