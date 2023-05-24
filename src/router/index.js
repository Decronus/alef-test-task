import { createRouter, createWebHistory } from "vue-router";
import MainPage from "../pages/MainPage";
import PreviewPage from "../pages/PreviewPage";

const routes = [
    {
        path: "/",
        name: "main",
        component: MainPage,
    },
    {
        path: "/preview",
        name: "preview",
        component: PreviewPage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
