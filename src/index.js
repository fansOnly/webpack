import _ from 'loadsh'

import print from './print'

// import './style.css'

// if (process.env.NODE_ENV !== 'production') {
// 	console.log('this is not production environment!!')
// }

function component() {
	var element = document.createElement('div');
	var button = document.createElement('button');
	var br = document.createElement('br');

	button.innerHTML = 'Click me and look at the console!';
	element.appendChild(br);
	element.appendChild(button);

	button.onclick = print.bind(null, 'hello world!');

	// button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
	// 	var print = module.default;

	// 	print();
	// });

	return element;
}

document.body.appendChild(component());
