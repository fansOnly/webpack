import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'

class PageA extends Component {

	render () {
		return (
			<Router>
				<div>
					<div>this is page A...</div>
				</div>
			</Router>
		)
	}
}

export default PageA;
