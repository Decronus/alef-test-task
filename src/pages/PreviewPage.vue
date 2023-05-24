<template>
    <div class="preview-page-wrap">
        <div class="preview-personal-and-children" v-for="parent in $store.state.parents" :key="parent.id">
            <div class="preview-personal-data">
                <h3>Персональные данные</h3>
                <preview-h3-comp>{{ parent.name }}, {{ parent.age }} {{ getYearsEnding(parent.age) }}</preview-h3-comp>
            </div>

            <div class="preview-children-data">
                <h3>Дети</h3>
                <child-card-comp v-for="child in parent.children" :key="child.id"
                    >{{ child.name }}, {{ child.age }} {{ getYearsEnding(child.age) }}</child-card-comp
                >
            </div>
        </div>
    </div>
</template>

<script>
import ChildCardComp from "@/components/ChildCardComp.vue";
import PreviewH3Comp from "../components/PreviewH3Comp.vue";

export default {
    name: "preview-page",
    components: { PreviewH3Comp, ChildCardComp },

    methods: {
        getYearsEnding(age) {
            if (age >= 11 && age <= 14) {
                return "лет";
            } else {
                const lastDigit = age % 10;
                if (lastDigit === 1) {
                    return "год";
                } else if (lastDigit >= 2 && lastDigit <= 4) {
                    return "года";
                } else {
                    return "лет";
                }
            }
        },
    },
};
</script>

<style>
.preview-page-wrap {
    max-width: 616px;
    margin: 0 auto;
}

.preview-personal-and-children {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 100px;
}

.preview-personal-data {
    margin-bottom: 60px;
}
</style>

PreviewH3Comp
