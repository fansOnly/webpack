import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { Provider } from 'react-redux'

import store from './redux/store'

import './index.css'

import App from './App'

const renderApp = () =>
	render (
		<Provider store={store}>
			<App />
		</Provider>,
		document.getElementById('root')
	)

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV !== 'production' && module.hot) {
	module.hot.accept('./App', renderApp)
}

renderApp()

// ReactDOM.render(
// 	<BrowserRouter>
// 		<Provider store={store}>
// 			<App />
// 		</Provider>
// 	</BrowserRouter>
// 	, document.getElementById('root')
// );
