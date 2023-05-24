<template>
    <div class="preview-page-wrap">
        <h3 v-if="$store.state.parents.length === 0">Нет данных для отображения</h3>
        <parent-card-comp v-else v-for="parent in $store.state.parents" :parent="parent" :key="parent.id" />
    </div>
</template>

<script>
import ParentCardComp from "@/components/ParentCardComp.vue";

export default {
    name: "preview-page",
    components: { ParentCardComp },
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
