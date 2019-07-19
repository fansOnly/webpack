import Admin from '@/pages/admin/index'
import Login from '@/pages/login/index'
import NotFound from '@/pages/exception/404'
import PageA from '@/pages/pageA/index'
import PageB from '@/pages/PageB/index'

const routes = [
	{
		path: '/',
		exact: true,
		component: Admin,
		requiresAuth: true,
		routes: [
			{
				path: '/pageA',
				name: 'pageA',
				component: PageA
			},
			{
				path: '/pageA',
				name: 'pageB',
				component: PageB
			},
		]
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
