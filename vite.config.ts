import { defineConfig, loadEnv, ConfigEnv, UserConfig } from "vite";
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { wrapperEnv } from "./src/utils/getEnv";


export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
  console.log(mode,'mode')
  const env = loadEnv(mode, process.cwd(), '')
  const viteEnv = wrapperEnv(env);
  // console.log(viteEnv,'env')

  return {
    plugins: [vue()],
    // global css
		css: {
			preprocessorOptions: {
				scss: {
					// additionalData: `@import "@/styles/var.scss";`




          
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
    }
  }
})


