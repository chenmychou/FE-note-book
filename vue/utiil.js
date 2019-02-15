const config = {
    phoneNo:'dgswhg',
    password:'123456',
    vi:'00400300200',
    key:'7e6b3028574ae4ad2d1681f26fef2bb4',
    areacode:'000-1GK-000',
    date: moment().format('YYYY-MM-DD'),
    lastDate: moment().subtract(1, 'days').format("YYYY-MM-DD")
}
const clientId = '05981832-d134-40aa-b1d8-3b63c4ebeecf' // 应用ID
const clientSecret = '0DA66AB6F9FB47F8E9EE0898073E51B3' //应用密钥
const grantType = 'client_credentials' // 应用类型
const baseUrl = 'http://dj.reconova.com/'
const tokenUrl = `${baseUrl}oauthAction!token.action?clientId=${clientId}&clientSecret=${clientSecret}&grantType=${grantType}`

getTokenByClient(tokenUrl)
function getTokenByClient(tokenUrl){
    let token = ''
    let refreshToken = ''
    let apiUrl = ''
    axios.post(tokenUrl).then(res => {
        if (res && res.data) {
            token = res.data.data.token
            refreshToken = res.data.data.refreshToken
            apiUrl = res.data.data.redirectUri

            // 拿到token继续拿数据
            let dataUrl = 'http://dj.reconova.com/api/v4/customersReportAppAction!customersDailyReport.action?'
            let signStr = `areacode=${config.areacode}&date=${config.date}&lastDate=${config.lastDate}&password=${config.password}&phoneNo=${config.phoneNo}&vi=${config.vi}`
            config.key = md5(signStr)
            // axios({
            //         url: dataUrl + signStr + '&key=' + config.key,
            //         headers: {'Authorization': token},
            //         data: config,
            //         method: 'get'
            //     })
            axios.get(dataUrl + signStr + '&key=' + config.key, {
                headers: {
                  'Authorization': token
                }
            })
        }
    })

    
      
}