import * as config from '../config/index.js'
function request(option){
		let url = arguments[0] || ''
		let data = arguments[1] || {}
		let method = arguments[2] || 'GET'
		console.log(config.Api.rootUrl)
		// headers['content-type'] = 'application/x-www-form-urlencoded'
		// if(url.indexOf(conifg.authUrl) === 0){
		// 	headers['toke n'] = getApp().globalData.userInfo.token
		// }
		return new Promise(resolve=>{
			uni.request({
				url:url,
				data:data,
				method:method,
				success:(res)=>{
					if(res.data.code === 200){
					resolve(res.data)
					}
				}
			})
		}) 
}
export { request }