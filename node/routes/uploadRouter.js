const Router = require('koa-router')
const router = new Router()
const fs = require('fs')
const qiniu = require('qiniu')
const path = require('path')
const config = require('../config')
router.prefix('/api/v1/upload')
router.post('/', async(ctx, next) => {
    ctx.body = {
        code: 200,
        msg: "这是根目录"
    }
})
router.get('/token', async(ctx, next)=> {
    let mac = new qiniu.auth.digest.Mac(config.accessKey, config.secretKey);
    let options = {
        scope: config.bucket,
        expires: 3600 * 24
    };
    let putPolicy =  new qiniu.rs.PutPolicy(options);
    let uploadToken= putPolicy.uploadToken(mac);
    if (uploadToken) {
        ctx.body = {
            token: uploadToken,
            code: 200,
            msg: "success"
        }
    } else {
        ctx.body = {
            code: 401,
            msg: "failure"
        }
    }
})
router.post('/file', async(ctx, next) => {
    let files = ctx.request.files.file
    console.log('files====>>>', ctx.request.files)
    // const reader = fs.createReadStream(files.path)
    const ext = files.name.split('.').pop(); // 扩展名
    let config = new qiniu.conf.Config()
    config.zone = qiniu.zone.Zone_z0
    let putExtra = new qiniu.form_up.PutExtra();
    let uploadToken = ctx.request.body.token
    // let curFilePath = path.join(__dirname, '/public')
    // if (!fs.existsSync(curFilePath)) {
    //     fs.mkdirSync(curFilePath);
    //     fs.mkdirSync(curFilePath + '/static');
    // }
    let filePath = `${Math.random().toString().substr(2)}.${ext}`;
    // const writer = fs.createWriteStream(filePath)
    // reader.pipe(writer)
    let key = filePath
    let localFile = files.path
    let data = await uploadQiNiu(uploadToken, key, localFile, putExtra)
      ctx.body = {
        data: {
            url: `http://static.zouzhengming.com/${data.key}`
        },
        code: 200,
        msg: "上传成功"
    }
})
function uploadQiNiu (uploadToken, key, localFile, putExtra) {
    let formUploader = new qiniu.form_up.FormUploader(config);
    return new Promise((resolve, reject) => {
        formUploader.putFile(uploadToken, key, localFile, putExtra, function(respErr,
            respBody, respInfo) {
            if (respErr) {
              reject(respErr)
              throw respErr;
            }
            if (respInfo.statusCode == 200) {
                resolve(respBody)
            } else {
              console.log(respInfo.statusCode);
              console.log(respBody);
            }
          });
    })
}

module.exports = router