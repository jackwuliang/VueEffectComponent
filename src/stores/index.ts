import { defineStore, createPinia } from "pinia";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

type GlobalState = any


export const GlobalStore = defineStore({
// id: 必须的，在所有 Store 中唯一
id: "GlobalState",
state: (): GlobalState => ({
    // token
    token: "",
    // userInfo
    userInfo: "",
    // element组件大小
    assemblySize: "default",
    // language
    language: "",
    // themeConfig
    themeConfig: {
        // 布局切换 ==>  纵向：vertical | 经典：classic | 横向：transverse | 分栏：columns
        layout: "vertical",
        // 默认 primary 主题颜色
        // primary: DEFAULT_PRIMARY,
        // 深色模式
        isDark: false,
        // 灰色模式
        isGrey: false,
        // 色弱模式
        isWeak: false,
        // 折叠菜单
        isCollapse: false,
        // 面包屑导航
        breadcrumb: true,
        // 面包屑导航图标
        breadcrumbIcon: true,
        // 标签页
        tabs: true,
        // 标签页图标
        tabsIcon: true,
        // 页脚
        footer: true,
        // 当前页面是否全屏
        maximize: false
    }
}),
getters: {},
actions: {},
// persist: piniaPersistConfig("GlobalState")
})

// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;