import {default as PageLogin} from "@/views/pages/auth/login/Main";
import {default as PageRegister} from "@/views/pages/auth/register/Main";
import {default as PageResetPassword} from "@/views/pages/auth/reset-password/Main";
import {default as PageForgotPassword} from "@/views/pages/auth/forgot-password/Main";
import {default as PageNotFound} from "@/views/pages/shared/404/Main";

import {default as PageDashboard} from "@/views/pages/private/dashboard/Main";
import {default as PageProfile} from "@/views/pages/private/profile/Main";

import {default as PageUsers} from "@/views/pages/private/users/Index";
import {default as PageComponents} from "@/views/pages/private/components/Main";
import { default as PageHome } from "@/views/pages/public/home";
import Asortiman from "@/views/pages/public/Asortiman.vue";
import Contact from "@/views/pages/public/contact.vue";
import About from "@/views/pages/public/about.vue";


import abilities from "@/stub/abilities";

const routes = [
    {
        name: "home",
        path: "/",
        meta: { requiresAuth: false },
        component: PageHome,
    },
    {
        path: "/admin",
        name: "admin",
        meta: { requiresAuth: false, isPublicAuthPage: true },
        component: PageLogin,
    },
    {
        path: "/asortiman",
        name: "asortiman",
        component: Asortiman,
    },
    {
        path: "/contact",
        name: "contact",
        component: () => import("@/views/pages/public/contact.vue"),
    },
    {
        path: "/about",
        name: "about",
        component: () => import("@/views/pages/public/about.vue"),
    },
    {
        name: "panel",
        path: "/panel",
        children: [
            {
                name: "dashboard",
                path: "dashboard",
                meta: {requiresAuth: true},
                component: PageDashboard,
            },
            {
                name: "profile",
                path: "profile",
                meta: {requiresAuth: true, isOwner: true},
                component: PageProfile,
            },
            {
                name: "components",
                path: "components",
                meta: {requiresAuth: true},
                component: PageComponents,
            },
            {
                path: "users",
                children: [
                    {
                        name: "users.list",
                        path: "list",
                        meta: {requiresAuth: true, requiresAbility: abilities.LIST_USER},
                        component: PageUsers,
                    },
                ]
            },
            {
                path: "products",
                children: [
                    {
                        name: "products.list",
                        path: "",
                        component: () => import("@/views/pages/private/products/Index.vue"),
                        meta: { requiresAuth: true },
                    },
                    {
                        name: "products.create",
                        path: "create",
                        component: () => import("@/views/pages/private/products/Create.vue"),
                        meta: { requiresAuth: true },
                    },
                    {
                        name: "products.edit",
                        path: ":id/edit",
                        component: () => import("@/views/pages/private/products/Edit.vue"),
                        meta: { requiresAuth: true },
                    },
                ]
            },
        ]
    },
    {
        path: "/login",
        name: "login",
        meta: {requiresAuth: false, isPublicAuthPage: true},
        component: PageLogin,
    },
    {
        path: "/register",
        name: "register",
        meta: {requiresAuth: false, isPublicAuthPage: true},
        component: PageRegister,
    },
    {
        path: "/reset-password",
        name: "resetPassword",
        meta: {requiresAuth: false, isPublicAuthPage: true},
        component: PageResetPassword,
    },
    {
        path: "/forgot-password",
        name: "forgotPassword",
        meta: {requiresAuth: false, isPublicAuthPage: true},
        component: PageForgotPassword,
    },
    {
        path: "/:catchAll(.*)",
        name: "notFound",
        meta: {requiresAuth: false},
        component: PageNotFound,
    },
]

export default routes;
