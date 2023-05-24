import { createStore } from "vuex";

export default createStore({
    state: {
        parents: [],
    },
    getters: {},
    mutations: {
        addParent(state, payload) {
            state.parents.push(payload);
        },
    },
    actions: {},
    modules: {},
});
