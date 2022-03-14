/**
* date: 2022-03-14, Mon, 20:36
* author: Wang
* feature： Webpack 配置
*/
const path = require('path')

module.exports = {
    mode: "development",
    // 项目入口， webpack 会从这个地方开始
    entry: {
        app:'./src/index.js'    // app 就会是下面的 [name] 的值
    },

    // output webpack 打包完成后的文件会在这里
    output:{
        path: path.resolve(__dirname,'./dist'),
        filename: "[name].bundle.js",   // 注意这个 name 会是我们打包的那个文件的名称（比如 index
    }
}
