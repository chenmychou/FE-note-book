const Router = require('koa-router')
const router = new Router()
// const words_model = require('../model/words_model')
router.prefix('/api/v1/upload')
router.post('/file', async(ctx, next) => {
    let files = ctx.request.files
    console.log('files', files)
    ctx.body = {
        code: 200,
        msg: "上传成功"
    }
})

module.exports = router