import request from 'src/utils/request'

// Actions
export const types = {
	SIGNIN : 'login',
	UPDATE: 'setuser',
	SINGNOUT: 'signout'
}

const initialState = {
	user: {},
	authed: false
}

export default function reducer (state = initialState, action = {}) {
	switch (action.type) {
		case types.SIGNIN:
			return Object.assign(state, {
				'user': action.data,
				'authed': true
			});
		case types.SINGNOUT:
			return Object.assign(state, {
				'user': {},
				'authed': false
			});
		default: return state;
	}
}

// Action Creators
// 这样定义而不是每个action都export，目的是简化代码，import时不需要把所有action都列出来。
// export function singnin() {
// 	return { type: types.SIGNIN };
// }
export const actions = {
	singnin: function () {
		return { type: types.SIGNIN }
		// return dispatch => request('getconfigbase.php').then(v => dispatch(singnin(v)))
	},
	signout: function () {
		return { type: types.SINGNOUT }
	},
}
