const merge = require('webpack-merge')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = merge(config, {
	mode: 'production',
	output: {
		filename: "'js/[name].[contenthash:8].js'",
		chunkFilename: 'js/[name].[chunkhash:8].chunk.js',
		pathinfo: false,
	},
	// devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(sa|sc|c)ss$/,
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					'css-loader',
					'postcss-loader',
					'sass-loader',
				]
			},
		]
	},
	optimization: {
		runtimeChunk: 'single',
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		},
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		new MiniCssExtractPlugin({
			filename: 'css/[name].css',
			chunkFilename: 'css/[id].[chunkhash:8].css',
		}),
	]
})
