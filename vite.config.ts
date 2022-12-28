import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { wrapperEnv } from "./src/utils/getEnv";


export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	console.log(mode, 'mode')
	const env = loadEnv(mode, process.cwd(), '')
	const viteEnv = wrapperEnv(env);
	// console.log(viteEnv,'env')

	return {
		plugins: [
			vue()
		],

		// global css
		css: {
			preprocessorOptions: {
				scss: {
					// additionalData: `@import "@/styles/var.scss";`
				}
			}
		},
		server: {
			// 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
			host: "127.0.0.1",
			port: viteEnv.VITE_PORT,
			open: viteEnv.VITE_OPEN,
			cors: true,
			hmr: true,
			// 跨域代理配置
			proxy: {
				"^/api": {
					target: "http://localhost:9080",
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, "")
				}
			}
		},

		resolve: {
			// 别名
			alias: {
				'@': resolve(__dirname, 'src'),
				'sty': resolve(__dirname, 'styles'),
				'pkg': resolve(__dirname, 'packages')
			},
			extensions: [".js", ".ts", ".tsx", ".jsx"],
		},
	}
})


