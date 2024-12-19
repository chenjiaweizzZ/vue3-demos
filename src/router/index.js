import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: "/",
        component: () => import("@/views/index.vue"),
    },
    {
        path: "/index",
        component: () => import("@/views/index.vue"),
    },
    {
        path: "/chat",
        component: () => import("@/views/chat.vue"),
    },
    {
        path: "/horse",
        component: () => import("@/views/horse.vue"),
    },
    {
        path: "/beforeConfirm",
        component: () => import("@/views/beforeConfirm.vue"),
    },
    {
        path: "/three",
        component: () => import("@/views/three.vue"),
    },
    {
        path: "/helloThree",
        component: () => import("@/views/hello-three.vue"),
    }
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
