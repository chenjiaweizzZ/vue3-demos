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
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});
