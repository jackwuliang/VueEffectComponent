import { defineStore, createPinia } from "pinia";
import { GlobalState, ThemeConfigProps } from "./interface"
import { getUseInfo } from "@/api/modules/login";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";

// 跳转到哪一个页面 HomeURl



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
        //
        locationId: '',
        //
        homeUrl: '',
        //
        role: [],
        // 
        routers: [],
        //
        locationList: null,
        // themeConfig
        themeConfig: {
            // 布局切换 ==>  纵向：vertical | 经典：horizal | 横向：transverse | 分栏：columns
            layout: "vertical",
            // 默认 primary 主题颜色
            primary: 'DEFAULT_PRIMARY',
            // 深色模式
            isDark: false,
            // 面包屑导航
            breadcrumb: false,
            // 面包屑导航图标
            breadcrumbIcon: true,
            // 页脚
            footer: true,
            // 全屏按钮
            maximize: true,
            // 通知按钮
            notification: true,
            // 常用菜单
            commonMenu: true,
            // 数据源信息
            locationSouce: false,
            // 是否带有logo
            logoPosition: false,
            // logo选择
            logoMess: "",
            // 全部菜单
            allMenu: false,
        }
    }),
    getters: {

    },
    actions: {
        // setToken
        setToken(token: string) {
            this.token = token;
        },
        getUserinfo(data: GlobalState) {
            // console.log(data, 'data')
            // 有一部分需要存到session中去
            const { themeConfig, locationList, role, locationId, assemblySize, userInfo,homeUrl} = data
            this.themeConfig = themeConfig
            this.locationList = locationList
            this.role = role
            this.locationId = locationId
            this.assemblySize = assemblySize
            this.userInfo = userInfo
            this.homeUrl = homeUrl
        }
    },
    // persist: piniaPersistConfig("GlobalState")
})

// piniaPersist(持久化)
const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);

export default pinia;