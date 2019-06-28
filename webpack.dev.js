const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-sourec-map',
	devServer: {
		contentBase: './dist',
		hot: true
	}
})
