// Actions
export const types = {
	SIGNIN : 'signin',
	UPDATE: 'getuser',
	SINGNOUT: 'signout'
}

const initialState = {
	user: {},
	authed: false
}

export default function reducer (state = initialState, action = {}) {
	switch (action.type) {
		case types.SIGNIN:
			return {
				...state,
				user: action.data,
				authed: true
			}
		case types.SINGNOUT:
			return {
				...state,
				user: {},
				authed: false
			}
		default:
			return state;
	}
}

// Action Creators
// 这样定义而不是每个action都export，目的是简化代码，import时不需要把所有action都列出来。
// export function singnin() {
// 	return { type: types.SIGNIN };
// }
export const userActions = {
	singnin: function (data) {
		return { type: types.SIGNIN, data }
	},
	signout: function () {
		return { type: types.SINGNOUT }
	},
}
