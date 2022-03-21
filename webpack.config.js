const path = require('path');
const url = require('url')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publicPath = ''


console.log("process", '打包开始，在里面可以获取环境变量，中可以显示')


module.exports = (options = {}) => {
     console.log('进入webpack，我们可以获取对应环境变量，用于控制对应的开发还是生产模式')
     return {
        mode:'production',
        entry: './src/index.ts',
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bulid.js', // 防止缓存 options.dev ? '[name].js' : '[name].js?[chunkhash:8]'
          // chunkFilename: '[id].js?[chunkhash]',
          // publicPath: options.dev ? '/assets/' : publicPath, // 生产环境下的
        },
        watch: true, 
        devServer: {
          // 开发服务器配置
          host: '127.0.0.1', // 指定使用一个 host。默认是 localhost。如果你希望服务器外部可访问
          port: 8000, // 指定要监听请求的端口号：
          proxy: {
            '/api/': {
              target: 'http://localhost:9090', // 接口的域名
              changeOrigin: true, // 如果接口跨域，需要进行这个参数配置为true`
              secure: false, // 接受运行在 HTTPS 上，且使用了无效证书的后端服务器。
              pathRewrite: {
                '^/api': '', // '^/api'：‘’  这种接口配置出来 http://localhost:3000/login
                // 如果你不想始终传递 /api ，则需要重写路径
              },
            },
          },
          contentBase: path.resolve(__dirname, ''), //网站的根目录为 根目录/dist，如果没有指定，使用process.cwd()函数取当前工作目录，工作目录>npm run dev
          open: true,
          inline: true, // 注入一段js到文件的最后；然后监视页面改动用于自动刷新。如果为false那麽也就吧js放到ifame中
          hot: false,
          compress: true, // 压缩文件
          // historyApiFallback: {
          //   index: url.parse(options.dev ? '/assets/' : publicPath).pathname,
          // },
        },
        plugins: [
          // new HtmlWebpackPlugin({ // 打包编译的模板HTML
          //   title: 'Hello_world',
          //   template: 'dist/index.html',
          //   templateParameters: true,
          //   minify: {
          //     removeAttributeQuotes: true, // 压缩代码
          //     collapseBooleanAttributes: true, // 压缩成一行
          //   },
          //   hash: true,
          // }),
        ]
     }
}