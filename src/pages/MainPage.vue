<template>
    <div class="main-page-wrap">
        <div class="personal-data-wrap">
            <h3>Персональные данные</h3>
            <div class="personal-data-inputs">
                <input-comp placeholder="Имя" @inputEmit="(value) => (name = value)" />
                <input-comp placeholder="Возраст" @inputEmit="(value) => (age = value)" />
            </div>
        </div>
    </div>
</template>

<script>
import InputComp from "@/components/InputComp.vue";

export default {
    name: "main-page",
    components: {
        InputComp,
    },
    data() {
        return {
            name: "",
            age: "",
        };
    },
};
</script>

<style>
.main-page-wrap {
    width: 616px;
    margin: 0 auto;
}

.personal-data-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
</style>
