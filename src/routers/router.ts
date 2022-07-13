import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";


// 路由文件 
const routes:RouteRecordRaw[] = [
    {
		path: "/",
		redirect: { name: "login" }
    },
    {
		path: "/login",
		name: "login",
		component: () => import("@/views/basicPage/login/index.vue"),
		meta: {
			requiresAuth: false,
			title: "登录页",
			key: "login"
		}
	},
]



const router = createRouter({
	history: createWebHashHistory(),
	routes,
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
});


export default router
