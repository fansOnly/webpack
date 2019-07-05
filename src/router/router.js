import Admin from 'pages/admin/index'
import Login from 'pages/login/index'
import NotFound from 'pages/exception/404'

const routes = [
	{
		path: '/',
		exact: true,
		component: Admin,
		requiresAuth: true,
	},
	{
		path: '/login',
		component: Login,
	},
	{
		path: '*',
		component: NotFound,
	}
];

export default routes;
