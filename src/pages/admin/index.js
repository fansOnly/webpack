import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import Index from '../../App'

import './index.scss'

class HomePage extends Component {

	signout () {
		localStorage.removeItem('user');
	}

	render () {
		return (
			<Router>
				<div>
					<div>this is home page</div>
					<div onClick={this.signout.bind(this)}>退出登录</div>
					<div><Link to='/'>返回首页</Link></div>

					<Route path='/' conponent={Index}></Route>
				</div>
			</Router>
		)
	}
}

export default HomePage;
