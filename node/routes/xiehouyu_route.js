const Router = require('koa-router')
const router = new Router()
const xiehouyu_model = require('../model/xiehouyu_model')
// const idiom_model = require('../model/idiom_model')
// const words_model = require('../model/words_model')
// const xiehouyu_model = require('../model/xiehouyu_model')

router.prefix('/api/v1/checkxiehouyu')
// router.get('/', async(ctx, next) => {
//     console.log('get!', ctx.request.query)
//     ctx.body = '您所在的位置是查询&添加词语首页'
// })
// router.post('/', async(ctx, next) => {
//     console.log('post!', ctx.request.body)
//     ctx.body = '您所在的位置是查询&添加词语首页'
// })
router.post('/addxiehouyu', async(ctx, next) => {
    let riddle = ctx.request.body.riddle // 词语
    let answer = ctx.request.body.answer // 解释
    if (!ci || !explanation) {
        ctx.body = {
            code: 401,
            msg: "参数有误"
        }
        return
    }
    let data = await xiehouyu_model.create({
        riddle,
        answer
    })
    ctx.body = {
        code: 200,
        msg: `词语${riddle}添加成功！`
    }
})
router.get('/find', async(ctx, next) => {
    let riddle = ctx.request.query.riddle
    let count = 0
    if (!riddle) {
        ctx.body = {
            code: 400,
            msg: "xiehouyu参数错误"
        }
        return
    }
    let data = await xiehouyu_model.find({"riddle": {$regex: riddle, $options: "i"}})
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