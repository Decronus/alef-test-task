<template>
    <div class="preview-page-wrap">
        <h3 v-if="$store.state.parents.length === 0">Нет данных для отображения</h3>
        <parent-card v-else v-for="parent in $store.state.parents" :parent="parent" :key="parent.id" />
    </div>
</template>

<script>
import ParentCard from "@/components/ParentCard.vue";

export default {
    name: "preview-page",
    components: { ParentCard },
};
</script>

<style>
.preview-page-wrap {
    max-width: 616px;
    margin: 0 auto;
}

.preview-page-wrap > div:not(:last-child) {
    margin-bottom: 100px;
}
</style>
