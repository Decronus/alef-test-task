<template>
    <div class="parent-card-wrap">
        <div class="parent-card-personal-data">
            <h3>Персональные данные</h3>
            <preview-h3-comp>{{ parent.name }}, {{ parent.age }} {{ getYearsEnding(parent.age) }}</preview-h3-comp>
        </div>

        <div class="parent-card-children-data">
            <h3>Дети</h3>
            <child-card-comp v-for="child in parent.children" :key="child.id"
                >{{ child.name }}, {{ child.age }} {{ getYearsEnding(child.age) }}</child-card-comp
            >
        </div>
    </div>
</template>

<script>
import ChildCardComp from "@/components/ChildCardComp.vue";
import PreviewH3Comp from "../components/PreviewH3Comp.vue";

export default {
    name: "parent-card-comp",
    components: { PreviewH3Comp, ChildCardComp },

    props: {
        parent: {
            required: true,
            type: Object,
        },
    },

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
.parent-card-wrap {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

.parent-card-personal-data {
    margin-bottom: 60px;
}
</style>
