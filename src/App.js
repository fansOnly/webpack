import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, Redirect, withRouter, NavLink } from "react-router-dom"

import './app.css'

export default class App extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
      }

    render () {
        return (
            <Router>
                <NavLink to='/nav1' activeClassName='current'>React</NavLink>
                <div style={{height: '3000px'}}></div>
                <div onClick={() => window.scrollTo(0, 0)}>this is bottom....</div>
                
            </Router>
        );
    }
};