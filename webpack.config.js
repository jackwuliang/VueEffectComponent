const path = require('path');
const url = require('url')
const { VueLoaderPlugin } = require('vue-loader') 
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const publicPath = ''


console.log("process", '打包开始，在里面可以获取环境变量，中可以显示')


module.exports = ( options = {} ) => {
     console.log('进入webpack，我们可以获取对应环境变量，用于控制对应的开发还是生产模式')
     return {
        mode:'production',
        entry: './src/main.ts',
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'bulid.js', // 防止缓存 options.dev ? '[name].js' : '[name].js?[chunkhash:8]'
          // chunkFilename: '[id].js?[chunkhash]',
          // publicPath: options.dev ? '/assets/' : publicPath, // 生产环境下的
        },
        module: {
           rules:[
              {
                test: /\.vue$/,
                loader: 'vue-loader'
              },
              {
                test: /\.(t|j)s$/,
                exclude: /node_modules/,
                use: [
                  {
                    loader: 'babel-loader',
                  },
                ],
              },
              
           ]
        },
        watch: true, 
        stats: 'errors-only', 
        resolve: {
           extensions: ['.ts', '.tsx', '.js'],
           alias: {
            '@': path.resolve(__dirname, 'src'),
            '@public': path.resolve(__dirname, 'public'),
            components: path.resolve(__dirname, 'components'),
           },
        },
        devServer: {
          // 开发服务器配置
          host: '127.0.0.1', 
          port: 8000, 
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
          contentBase: path.resolve(__dirname, ''), 
          open: true,
          inline: true, 
          hot: false,
          compress: true, 
        },
        plugins: [
          // new CleanWebpackPlugin({
          // }),
          new VueLoaderPlugin (),
          new HtmlWebpackPlugin({ 
            title: 'VUETS',
            template: 'public/index.html',
            templateParameters: true,
            minify: {
              removeAttributeQuotes: true, 
              collapseBooleanAttributes: true,
            },
            hash: true,
          }),
        ]
     }
}