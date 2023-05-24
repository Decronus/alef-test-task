<template>
    <div class="input-wrap" @click="$refs.inputRef.focus()">
        <p class="input-label">{{ placeholder }}</p>
        <input class="input" type="text" ref="inputRef" @input="emitInput" :value="value" />
    </div>
</template>

<script>
export default {
    name: "input-comp",
    props: {
        placeholder: {
            required: true,
            type: String,
        },
    },
    data() {
        return {
            value: "",
        };
    },
};
</script>

<style>
.input-wrap {
    width: 100%;
    height: 56px;
    border: 1px solid #f1f1f1;
    border-radius: 4px;
    padding: 8px 16px;
}

.input {
    width: 100%;
    border: none;
    outline: none;
    font-size: 16px;
}

.input-label {
    font-size: 13px;
    color: rgba(17, 17, 17, 0.48);
    margin-bottom: 2px;
}
</style>
