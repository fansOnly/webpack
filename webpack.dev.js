/* eslint-disable no-undef */
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const config = require('./webpack.config.js')

module.exports = merge(config, {
	mode: 'development',
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		// 根目录下dist为基本目录
		contentBase: path.join(__dirname, './'),
		historyApiFallback: true,// 在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
		compress: true,// 启用gzip压缩
		inline: true,// 设置为true，当源文件改变时会自动刷新页面
		hot: true,// 模块热更新，取决于HotModuleReplacementPlugin
		host: 'localhost',// 设置默认监听域名，如果省略，默认为“localhost”
		port: 8080,
		open: true,
		// proxy: {
		// 	'/api': {
		// 		target: 'https://applet.pro.ibw.cc',
		// 		pathRewrite: {'^/api' : ''},
		// 		secure: false,
		// 	}
		// }
	},
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2
						}
					},
					'postcss-loader',
				]
			},
		]
	},
	optimization: {
		usedExports: true
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('development')
		}),
		new webpack.HotModuleReplacementPlugin(),
	]
})
