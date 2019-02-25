;(function ($) {
    'use strict'
    const clientId = '05981832-d134-40aa-b1d8-3b63c4ebeecf' // 应用ID
    const clientSecret = '0DA66AB6F9FB47F8E9EE0898073E51B3' //应用密钥
    const grantType = 'client_credentials' // 应用类型
    const baseUrl = 'http://dj.reconova.com/'
    const config = {
        phoneNo:'dgswhg',
        password:'123456',
        vi:'00400300200',
        key:'7e6b3028574ae4ad2d1681f26fef2bb4',
        areacode:'',
        date: moment().format('YYYY-MM-DD'),
        lastDate: moment().subtract(1, 'days').format("YYYY-MM-DD")
    }
    let flag = true; 
    let firstTime = 0; 
    let secondTime = 0;
    let count = 0; // 第几次请求
    let token = localStorage.getItem('token')
    let refreshToken = localStorage.getItem('refreshToken')
    let curTime = new Date().getTime()
    function isGetToken (areacode) {
        if (flag) {
            firstTime = curTime
            flag = false
        } else {
            secondTime = curTime
            flag = true
        }
        let leftTimes = secondTime - firstTime
        if (token && refreshToken && leftTimes > 30 * 60 * 1000) {
            console.log('有token但是已过期')
            refreshTokenByClient(refreshToken, areacode)
            return
        }
        if (token && refreshToken && leftTimes < 30 * 60 * 1000) {
            getData(areacode, token)
        }
        if (!refreshToken) {
            getTokenByClient()
        }
    }
    function getTokenByClient(areacode){
        const tokenUrl = `${baseUrl}oauthAction!token.action?clientId=${clientId}&clientSecret=${clientSecret}&grantType=${grantType}`
        axios.post(tokenUrl).then(res => {
            if (res && res.data) {
                const token = res.data.data.token
                const refreshToken = res.data.data.refreshToken
                const apiUrl = res.data.data.redirectUri
                localStorage.setItem('token', token)
                localStorage.setItem('refreshToken', refreshToken)
                console.log('拿到新token', token)
                getData(areacode, token)
            }
        })
    }

    function DataForToday(areacode){
        if (!areacode) {
            console.log('请输入门店代码')
        }
        isGetToken(areacode)
    }
    function getData (areacode, token) {
        // 拿到token继续拿数据
        let dataUrl = 'api/v4/customersReportAppAction!customersDailyReport.action?'
        config.areacode = areacode
        let signStr = `areacode=${config.areacode}&date=${config.date}&lastDate=${config.lastDate}&password=${config.password}&phoneNo=${config.phoneNo}&vi=${config.vi}`
        config.key = md5(signStr)
        axios({
            url: dataUrl + signStr + '&key=' + config.key,
            headers: {Authorization: token},
            method: 'get'
        })
    }
    function refreshTokenByClient (refreshToken, areacode) {
        if (refreshToken) {
            const refreshTokenUrl = `${baseUrl}oauthAction!refreshToken.action?clientId=${clientId}&refreshToken=${refreshToken}&grantType=client_credentials`
            axios.post(refreshTokenUrl).then(res => {
                if (res && res.data) {
                    let token = res.data.data.token
                    let refreshToken = res.data.data.refreshToken
                    let apiUrl = res.data.data.redirectUri
                    localStorage.setItem('token', token)
                    localStorage.setItem('refreshToken', refreshToken)
                    getData(areacode, token)
                }
            })
        }
    }

    if (typeof define === 'function' && define.amd) {
      define(function () {
        return DataForToday
      })
    } else if (typeof module === 'object' && module.exports) {
      module.exports = DataForToday
    } else {
      $.DataForToday = DataForToday
    }
  })(this)