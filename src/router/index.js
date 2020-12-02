import {
    createRouter,
    createWebHistory
} from "vue-router";
import Auth from "@okta/okta-vue";

import HomeComponent from "@/components/Home";
import LoginComponent from "@/components/Login";
import ProfileComponent from "@/components/Profile";
import MessagesComponent from "@/components/Messages";
import Vue from 'vue'

import "semantic-ui-css/semantic.min.css";

const routes = [{
        path: "/",
        component: HomeComponent,
    },
    {
        path: "/login",
        component: LoginComponent,
    },
    {
        path: "/login/callback",
        component: Auth.handleCallback(),
    },
    {
        path: "/profile",
        component: ProfileComponent,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/messages",
        component: MessagesComponent,
        meta: {
            requiresAuth: true,
        },
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: "/",
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

const onAuthRequired = async(from, to, next) => {
    if (from.matched.some(record => record.meta.requiresAuth) && !(await Vue.prototype.$auth.isAuthenticated())) {
        // Navigate to custom login page
        next({
            path: '/login'
        })
    } else {
        next()
    }
}

router.beforeEach(onAuthRequired);

export default router