/* themeConfigProp */
// 以后再加
export interface ThemeConfigProps {
	layout: string; // 布局的模式
	primary: string; // 主题模式
	isDark?: boolean;// 深色或者浅色
	breadcrumb?: boolean; // 是否面包屑导航
	breadcrumbIcon?: boolean;// 面包屑图标
	footer?: boolean;
    maximize:boolean // 全屏按钮
    notification:boolean // 通知按钮
    commonMenu:boolean // 是否包含常用菜单
    locationSouce:boolean // 数据源信息
    locationList:souceObject[]| null // 数据源结构体
    logoPosition:boolean // 是否带有logo
    logoMess:string // logo的信息
    allMenu:boolean // 全部菜单 
    avatar:boolean // 头像区域
}

export interface souceObject {
    label:string | number,
    value:string | number
}

/* GlobalState */
export interface GlobalState {
	token: string
	userInfo?: any
    role:string[]
    routers:[]
	assemblySize?: string;
	themeConfig: ThemeConfigProps // 布局结构
    locationId:string // 点击所选数据源
    homeUrl:string  // 初始化路由
}