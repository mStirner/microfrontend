import { createRouter, createWebHashHistory } from "vue-router";


const router = createRouter({
    history: createWebHashHistory(),
    routes: [{
        path: "/page-1",
        component: () => import("./views/page-1.vue")
    }, {
        path: "/page-2",
        component: () => import("./views/page-2.vue")
    }, {
        path: "/:pathMatch(.*)*",
        name: "NotFound",
        redirect: "/page-1"
    }]
});

export default router;