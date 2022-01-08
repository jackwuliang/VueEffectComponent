const path = require('path');

console.log("process", '打包开始，在里面可以获取环境变量，中可以显示')

module.exports = () => {
     console.log('进入webpack，我们可以获取对应环境变量，用于控制对应的开发还是生产模式')
     return {
        mode:'production',
        entry: './index.js',
        output: {
          path: path.resolve(__dirname, 'dist'),
          filename: 'webpackmain.js', 
        },
     }
}