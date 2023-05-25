<template>
    <div class="parent-card-wrap">
        <div class="parent-card-personal-data">
            <h3>Персональные данные</h3>
            <preview-h3>{{ parent.name }}, {{ parent.age }} {{ getYearsEnding(parent.age) }}</preview-h3>
        </div>

        <div class="parent-card-children-data">
            <h3>Дети</h3>
            <child-card v-for="child in parent.children" :key="child.id"
                >{{ child.name }}, {{ child.age }} {{ getYearsEnding(child.age) }}</child-card
            >
        </div>
    </div>
</template>

<script>
import ChildCard from "@/components/ChildCard.vue";
import PreviewH3 from "@/components/PreviewH3.vue";

export default {
    name: "parent-card",
    components: { PreviewH3, ChildCard },

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
