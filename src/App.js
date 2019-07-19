import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'


import renderRoutes from './router/renderRoutes'
import routes from './router/router'

import './app.css'

export default class App extends Component {

	render () {
		return (
			<Router>
				{
					renderRoutes(routes)
				}
			</Router>
		)
	}
}
