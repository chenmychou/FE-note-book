var Fly = require('flyio/dist/npm/ap') // npm引入方式
const request = new Fly()
request.config.timeout = 10 * 1000
request.config.baseURL = 'https://api.zouzhengming.com'
request.interceptors.request.use((request) => {
  // 给所有请求添加自定义header
  request.headers = {
    // 'Content-Type': 'application/x-www-form-urlencoded'
  }
  my.showLoading({
    content: '数据加载中'
  })
  // console.log(request.body)
  return request
})
request.interceptors.response.use(
  (response, promise) => {
    my.hideLoading()
    console.log('responseresponse===>>', typeof response.data)
    // let responseData = JSON.parse(response.data)
    let responseDataFormat = JSON.stringify(response.data)
    let toObjData = JSON.parse(responseDataFormat)
    let resCode = toObjData.code
    console.log('responseresponseresponseresponse', toObjData)
    if (resCode !== 200) {
      my.showToast({
        content: '服务器异常，请稍后重试',
        type: 'fail',
        duration: 2000
      })
      return promise.reject(toObjData)
    }
    // my.hideLoading()
    return promise.resolve(toObjData)
  },
  (err, promise) => {
    // 状态为0 网络错误
    if (Number(err.status) === 0) {
      my.showToast({
        title: '网络错误,请稍后重试',
        icon: 'none'
      })
      return promise.resolve()
    }
    // 状态为1 网络超时
    if (Number(err.status) === 1) {
      my.showToast({
        title: '网络超时，请稍后重试',
        icon: 'none'
      })
      return promise.resolve()
    }
    if (Number(err.status) > 200) {
      my.showToast({
        title: err.status + '！服务器异常,请稍后重试',
        icon: 'none'
      })
      return promise.resolve()
    }
    // wx.hideLoading()
    my.showToast({
      title: err.message,
      icon: 'none'
    })
    return promise.resolve()
  }
)
export default request
