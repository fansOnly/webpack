import { userActions } from '@/redux/reducers/user'

import request from '../utils/request'

// export async function loginApi() {
// 	return dispatch => {
// 		console.log('dispatch', dispatch);
// 		dispatch(userActions.singnin({id: 1, name: 'test0000'}))
// 		// return request('getconfigbase.php')
// 		// .then(res => {
// 		// 	console.log('loginApi', res);
// 		// 	dispatch(userActions.singnin(res))
// 		// })
// 	};
// }

export const loginApi = async (dispatch, data) => {
	let status = await login(data)
	if (status) {
		console.log('singin success...')
		// request('getconfigbase.php')
		localStorage.setItem('user', JSON.stringify(getUser()))
		localStorage.setItem('token', setToken())
		dispatch(userActions.singnin(getUser()))
	} else {
		console.log('singin 帐号密码错误.');
	}
	return status;
}

const login = ({username, password}) => {
	return username === 'test' && password === '123';
}

const getUser = () => {
	return {
		id: 1,
		name: 'test',
		gender: 1,
		age: 11
	}
}

const setToken = () => {
	return 'asdasdas1234133123'
}
