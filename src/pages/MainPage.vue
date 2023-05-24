<template>
    <div class="main-page-wrap">
        <div class="personal-data-wrap">
            <h3>Персональные данные</h3>
            <div class="personal-data-inputs">
                <input-comp placeholder="Имя" @inputEmit="(value) => (name = value)" />
                <input-comp placeholder="Возраст" @inputEmit="(value) => (age = value)" :onlyNumbers="true" />
            </div>
        </div>

        <div class="children-wrap">
            <div class="children-header-and-btn">
                <h3 class="children-header">Дети (макс. 5)</h3>
                <add-btn-comp>Добавить ребенка</add-btn-comp>
            </div>
            <add-child-comp />
        </div>
    </div>
</template>

<script>
import InputComp from "@/components/InputComp.vue";
import AddBtnComp from "@/components/buttons/AddBtnComp.vue";
import AddChildComp from "@/components/AddChildComp.vue";

export default {
    name: "main-page",
    components: {
        InputComp,
        AddBtnComp,
        AddChildComp,
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
    margin-bottom: 33px;
}

.children-header-and-btn {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 11px;
}

.children-header {
    margin-bottom: 0;
}
</style>
