import request from '../utils/request'

import { userActions } from 'src/redux/reducers/user'

export async function loginApi() {
	return dispatch => {
		return request('getconfigbase.php')
		.then(res => {
			console.log('loginApi', res);
			dispatch(userActions.login(res))
		})
	};
}
