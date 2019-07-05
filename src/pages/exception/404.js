import React from 'react'

const NoFoundPage = () => (
	<div style={{ position: 'absolute', left: 0, right: 0, top: '50%', transform: 'translateY(-50%)', textAlign: 'center', }} >
		<img src="https://gw.alipayobjects.com/zos/antfincdn/wsE2Pw%243%26L/noFound.svg" alt="404" />
		<br />
		<br />
		<h1>404</h1>
		<p>Sorry, the page you visited does not exist.</p>
	</div>
);

export default NoFoundPage;
