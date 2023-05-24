<template>
    <div class="main-page-wrap">
        <div class="personal-data-wrap">
            <h3>Персональные данные</h3>
            <div class="personal-data-inputs">
                <input-comp placeholder="Имя" @inputEmit="(value) => (parentName = value)" ref="nameInputRef" />
                <input-comp
                    placeholder="Возраст"
                    @inputEmit="(value) => (parentAge = value)"
                    :onlyNumbers="true"
                    ref="ageInputRef"
                />
            </div>
        </div>

        <div class="children-wrap">
            <div class="children-header-and-btn">
                <h3 class="children-header" :style="childrenBlockVisibility">Дети (макс. 5)</h3>
                <add-btn-comp :style="addChildBtnVisibility" @click="addChild">Добавить ребенка</add-btn-comp>
            </div>

            <add-child-comp
                v-for="(child, index) in children"
                :key="child.id"
                :index="index"
                @nameInputEmit="(value) => (children[index].name = value)"
                @ageInputEmit="(value) => (children[index].age = value)"
                @deleteChild="(index) => deleteChild(index)"
            />
            <primary-btn-comp v-if="children.length > 0" :disabled="checkFillInputs" @click="saveParent"
                >Сохранить</primary-btn-comp
            >
        </div>
    </div>
</template>

<script>
import InputComp from "@/components/InputComp.vue";
import AddBtnComp from "@/components/buttons/AddBtnComp.vue";
import AddChildComp from "@/components/AddChildComp.vue";
import PrimaryBtnComp from "@/components/buttons/PrimaryBtnComp.vue";
import { v4 as uuidv4 } from "uuid";

export default {
    name: "main-page",
    components: {
        InputComp,
        AddBtnComp,
        AddChildComp,
        PrimaryBtnComp,
    },

    data() {
        return {
            parentName: "",
            parentAge: "",
            children: [],
        };
    },

    methods: {
        addChild() {
            const child = { id: uuidv4(), name: "", age: "" };
            this.children.push(child);
        },

        deleteChild(index) {
            this.children = this.children.filter((el) => this.children.indexOf(el) !== index);
        },

        saveParent() {
            const notEmptyChildren = this.children.filter((el) => !Object.values(el).includes(""));
            const parent = { id: uuidv4(), name: this.parentName, age: this.parentAge, children: notEmptyChildren };
            this.$store.commit("addParent", parent);
            this.clearForm();
        },

        clearForm() {
            this.parentName = "";
            this.parentAge = "";
            this.$refs.nameInputRef.clearInput();
            this.$refs.ageInputRef.clearInput();
            this.children = [];
        },
    },

    computed: {
        childrenBlockVisibility() {
            return { opacity: +(this.children.length !== 0) };
        },

        addChildBtnVisibility() {
            const visible = +(this.children.length < 5);
            return { opacity: visible, pointerEvents: visible ? null : "none" };
        },

        checkFillInputs() {
            const parentFill = !!this.parentName && !!this.parentAge;
            const childFill = !!this.children.find((el) => !Object.values(el).includes(""));
            return parentFill && childFill;
        },
    },
};
</script>

<style>
.main-page-wrap {
    max-width: 616px;
    margin: 0 auto;
}

.personal-data-inputs {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-bottom: 33px;
}

.children-wrap {
    display: flex;
    flex-direction: column;
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
