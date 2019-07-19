import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import './index.scss'

class PageB extends Component {

	render () {
		return (
			<Router>
				<div>
					<div>this is page B...</div>
				</div>
			</Router>
		)
	}
}

export default PageB;
