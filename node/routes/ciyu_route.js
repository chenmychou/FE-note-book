const Router = require('koa-router')
const router = new Router()
const ciyu_model = require('../model/ciyu_model')
// const idiom_model = require('../model/idiom_model')
// const words_model = require('../model/words_model')
// const xiehouyu_model = require('../model/xiehouyu_model')

router.prefix('/api/v1/checkCiYu')
router.get('/', async(ctx, next) => {
    console.log('get!', ctx.request.query)
    ctx.body = '您所在的位置是查询&添加词语首页'
})
router.post('/', async(ctx, next) => {
    console.log('post!', ctx.request.body)
    ctx.body = '您所在的位置是查询&添加词语首页'
})
router.post('/addCiYu', async(ctx, next) => {
    let ci = ctx.request.body.ciYu // 词语
    let explanation = ctx.request.body.explanation // 解释
    console.log('addCiYuaddCiYu', ci, explanation, ctx.request.body)
    if (!ci || !explanation) {
        ctx.body = {
            code: 401,
            msg: "参数有误"
        }
        return
    }
    let data = await ciyu_model.create({
        ci,
        explanation
    })
    ctx.body = {
        code: 200,
        msg: `词语${ci}添加成功！`
    }
})
router.get('/find', async(ctx, next) => {
    let ci = ctx.request.query.ciYu
    let count = 0
    if (!ci) {
        ctx.body = {
            code: 400,
            msg: "ciYu参数错误"
        }
        return
    }
    let data = await ciyu_model.find({"ci": {$regex: ci, $options: "i"}})
    if (data.length) {
        count = data.length
    }
    ctx.body = {
        code: 200,
        count,
        data,
        msg: "查询成功！"
    }
})

module.exports = router