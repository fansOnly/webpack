// const express = require('express')
const webpack = require('webpack')
// const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackDevServer = require('webpack-dev-server')

// const app = express()
const config = require('./webpack.config.js')
const options = {
	contentBase: './dist',
	hot: true,
	host: 'localhost'
}
webpackDevServer.addDevServerEntrypoints(config, options)
const compiler = webpack(config)
const server = new webpackDevServer(compiler, options);

// app.use(webpackDevMiddleware(compiler, {
// 	pulicPath: config.output.publicPath
// }))

server.listen(5000, 'localhost', () => {
	console.log('server is listening at port 5000...')
})
