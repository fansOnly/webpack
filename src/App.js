import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Login from 'pages/login/index'
import Admin from 'pages/admin/index'
import NoFoundPage from 'pages/exception/404'

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
