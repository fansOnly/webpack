import axios from 'axios'

const codeMessage = {
	200: '服务器成功返回请求的数据。',
	201: '新建或修改数据成功。',
	202: '一个请求已经进入后台排队（异步任务）。',
	204: '删除数据成功。',
	400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
	401: '用户没有权限（令牌、用户名、密码错误）。',
	403: '用户得到授权，但是访问是被禁止的。',
	404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
	406: '请求的格式不可得。',
	410: '请求的资源被永久删除，且不会再得到的。',
	422: '当创建一个对象时，发生一个验证错误。',
	500: '服务器发生错误，请检查服务器。',
	502: '网关错误。',
	503: '服务不可用，服务器暂时过载或维护。',
	504: '网关超时。',
};

axios.defaults.baseURL = 'https://applet.pro.ibw.cc/api/';
// axios.defaults.headers.common['Token'] = localStorage.getItem('token');
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.timeout = 2500;

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
	// 在发送请求之前做些什么
	// console.log('config', config);
	localStorage.getItem('token') && (config.headers.Token = localStorage.getItem('token'));
	return config;
}, function (error) {
	// 对请求错误做些什么
	return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
	// 对响应数据做点什么
	return response;
}, function (error) {
	// 对响应错误做点什么
	return Promise.reject(error);
});

const CancelToken = axios.CancelToken;
let cancel;

const request = (url, method='get', params={}, ...options) => {
	return axios({
		url,
		method: method,
		data: params,
		...options,
		responseType: 'json',
		cancelToken: new CancelToken(function (c) {
			cancel = c;
		})
	})
	.then(res => {
		// console.log('res', res.data);
		return res.data;
	})
	.catch(error => {
		console.log('error', error);
		// if (error && error.status) {
		// 	const errorText = codeMessage[error.status] || error.statusText;
		// 	const { status, config } = error;
		// 	console.error({
		// 		message: `请求错误 ${status}: ${config.url}`,
		// 		description: errorText,
		// 	});
		// }
	})
}

export default request;
