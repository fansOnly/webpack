import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginApi } from '@/service/user'

class Login extends Component {

	state = {
		username: '',
		password: ''
	}

	componentWillMount () {
	}

	inputTyping (e) {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	handleSubmit (e) {
		e.preventDefault();
		const { username, password } = this.state;
		const { dispatch } = this.props;
		loginApi(dispatch, {username, password}).then(res => {
			if (res) {
				// console.log(this.props)
				const { from } = this.props.location.state || { from: { pathname: '/' } }
				this.props.history.push(from.pathname)
			}
		})

	}

	render () {
		const { username, password } = this.state;
		return (
			<Router>
				<h3 className=''>this is a login page.</h3>
				<form onSubmit={this.handleSubmit.bind(this)}>
					<div>
						<div className='label'>用户名</div>
						<input type="text" name='username' id='username' value={username} onChange={this.inputTyping.bind(this)} />
					</div>
					<div>
						<div className='label'>密码</div>
						<input type="text" name='password' id='password' value={password} onChange={(e) => this.inputTyping(e)} />
					</div>
					<div>username: test, password: 123</div>
					<button type='submit'>登录</button>
				</form>
			</Router>
		)
	}
}

export default connect()(Login);
