const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge(config, {
	mode: 'development',
	// devtool: 'cheap-module-source-map',
	devtool: 'source-map',
	devServer: {
		// 根目录下dist为基本目录
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,// 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
        compress: true,// 启用gzip压缩
        inline: true,// 设置为true，当源文件改变时会自动刷新页面
        hot: true,// 模块热更新，取决于HotModuleReplacementPlugin
        host: '127.0.0.1',// 设置默认监听域名，如果省略，默认为“localhost”
        port: 8080,
        // 自动打开浏览器
        open: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
})
