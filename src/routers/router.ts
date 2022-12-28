import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

/**
 * @description 动态路由参数配置简介
 * @param path ==> 菜单路径
 * @param name ==> 菜单别名
 * @param redirect ==> 重定向地址
 * @param component ==> 视图文件路径
 * @param meta ==> 菜单信息
 * @param meta.icon ==> 菜单图标
 * @param meta.title ==> 菜单标题
 * @param meta.activeMenu ==> 当前路由为详情页时，需要高亮的菜单
 * @param meta.isLink ==> 是否外链
 * @param meta.isHide ==> 是否隐藏
 * @param meta.isFull ==> 是否全屏(示例：数据大屏页面)
 * @param meta.isAffix ==> 是否固定在 tabs nav
 * @param meta.isKeepAlive ==> 是否缓存
 * */


// * 导入所有  要从后端导入 目前数据结构在项目中够用；
// const metaRouters = import.meta.globEager("./modules/*.ts");


// * 处理路由表 路径需要区分大小写 不然不触发热更新

// export const routerArray: RouteRecordRaw[] = [];
// Object.keys(metaRouters).forEach(item => {
// 	Object.keys(metaRouters[item]).forEach((key: any) => {
// 		routerArray.push(...metaRouters[item][key]);
// 	});
// });


// 路由配置在这里 这个部分需要从后端处理过来 暂时走的是本地的route+ 无权限 + 路由守卫
const routes: RouteRecordRaw[] = [
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
	{
		path: "/page",
		name: "dashboard",
		component: () => import("@/layout/index.vue"),
		meta: {
			title: "首页",
		},
		children:[
			{
				path: 'dashboard',
				component: () => import('@/views/componentPage/dashboard/index.vue'),
				name: 'Dashboard',
			},
			{
				path: 'test',
				component: () => import('@/views/componentPage/test/index.vue'),
				name: 'test',
			}
		]
	},
	// ...routerArray,
	{
		// 找不到路由重定向到404页面
		path: "/:pathMatch(.*)",
		redirect: { name: "404" }
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes,
	strict: false,
	// 切换页面，滚动到最顶部
	scrollBehavior: () => ({ left: 0, top: 0 })
});

export default router;