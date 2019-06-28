const merge = require('webpack-merge')
const webpack = require('webpack')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'production',
	output: {
		chunkFilename: '[name].[contenthash].js',
		pathinfo: false,
	},
	// devtool: 'source-map',
	optimization: {
		splitChunks: {
			cacheGroups: {
				vendor: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendors',
					chunks: 'all'
				}
			}
		},
		runtimeChunk: 'single'
	},
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
	]
})
