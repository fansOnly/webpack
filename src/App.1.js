import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter } from "react-router-dom"

import './app.css'


export default class App extends Component {
    render () {
        return (
            <Router>
                <AuthButton />
                <div>
                    <div><Link to='/public'>public</Link></div>
                    <div><Link to='/protected'>protected</Link></div>

                    <Route path='/public' component={Public} />
                    <Route path='/login' component={Login} />
                    <PrivateRoute path='/protected' component={Protected} />
                </div>
            </Router>
        );
    }
};

const Public = () => {
    return (
        <div>this is public..</div>
    )
};

const Protected = () => {
    return (
        <div>this is Protected..</div>
    )
};

const Auth = {
    isAuthenticated: false,
    signin(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100);
    },
    singnout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const AuthButton = withRouter(
    ({ history }) => 
    Auth.isAuthenticated ? (
        <p>
            welcome {"guest"}
            <button  onClick={() => Auth.singnout(() => history.push('/'))}>sign out</button>
        </p>
    ) : (
        <p>you need to login in...</p>
    )
);

const PrivateRoute = ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={props => {
            Auth.isAuthenticated ? (
                <Component {...props} />
            ) : (
                <Redirect to={{pathname: '/login', state: {from : props.location}}} />
            )
        }} />
    );
}

class Login extends Component {
    state = {
        redirectToReferrer: false
    }

    login = () => {
        Auth.signin(() => {
            this.setState({redirectToReferrer: true})
        });
    };

    render () {
        let { from } = this.props.location.state || {from: {pathname: '/'}};
        let { redirectToReferrer } = this.state;
        redirectToReferrer && <Redirect to={from} />
        return (
            <div>
                <p>you mast login in {from.pathname}</p>
                <button onClick={this.login}>sign in</button>
            </div>
        );
    }
}