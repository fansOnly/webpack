import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.css'

class HomePage extends Component {

	signout () {
		localStorage.removeItem('user');
	}

	signin () {
		this.props.history.push('/login')
	}

	render () {
		return (
			<Router>
				<div>
					<div>this is home page</div>
					<div onClick={this.signin.bind(this)}>登录登录</div>
					<div onClick={this.signout.bind(this)}>退出登录</div>
				</div>
			</Router>
		)
	}
}

export default HomePage;
