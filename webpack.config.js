const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'js/[name].bundle.js',
		chunkFilename: 'js/[name].chunk.js',
		path: path.resolve(__dirname, './dist'),
	},
	module: {
		rules: [
			{
				test: /\.(jsx?)$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true
					}
				}
			},
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					'style-loader',
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			},
			{
                test:/\.(jpg|jpeg|png|gif|svg)$/,
                //小于1024的图片都用base64的方式加载
                use: [{
						loader: 'url-loader',
						options: {
							limit: 1024,
							outputPath: 'images/',
						}
					},
					{
						loader: 'image-webpack-loader',
						options: {
							bypassOnDebug: true
						}
					}
				]
            },
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: '管理输出',
			template: './public/index.html',
            hash: true, // 会在打包好的bundle.js后面加上hash串
		}),
	],
}
