import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { loginApi } from 'src/service/user'

@connect(state => ({
	user: state.user,
	authed: state.authed
}))

class Login extends Component {

	state = {
		username: '',
		password: ''
	}

	componentDidMount () {
		loginApi().then(res => {
			console.log('test', res);
		})
	}

	inputTyping (e) {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	handleSubmit (e) {
		const { username, password } = this.state;
		if (username == 'test' && password == '123') {
			console.log('success');
			loginApi().then(res => {
				console.log('login', res);
				const { from } = this.props.location.state || { from: { pathname: '/' } }
				localStorage.setItem('user', { username })
				this.props.history.push(from.pathname)
			})
		} else {
			console.log('帐号密码错误.');
		}
		e.preventDefault();
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
					<button type='submit'>登录</button>
				</form>
			</Router>
		)
	}
}

export default Login;
