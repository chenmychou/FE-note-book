const Router = require('koa-router')
const router = new Router()
const words_model = require('../model/words_model')
router.prefix('/api/v1/checkWords')
router.post('/addWords', async(ctx, next) => {
    let word = ctx.request.body.word // 词语
    let oldword = ctx.request.body.oldword // 曾用名字
    let strokes = ctx.request.body.strokes // 笔画数
    let pinyin = ctx.request.body.pinyin // 拼音
    let radicals = ctx.request.body.radicals // 部首
    let explanation = ctx.request.body.explanation // 解释
    let more = ctx.request.body.more // 更多
    if (!word || !oldword || !strokes || !pinyin || !radicals || !more) {
        ctx.body = {
            code: 401,
            msg: "参数有误"
        }
        return
    }
    let data = await words_model.create({
        word,
        oldword,
        strokes,
        pinyin,
        radicals,
        explanation,
        more
    })
    ctx.body = {
        code: 200,
        msg: `汉字\n${word}\n添加成功！`
    }
})
router.get('/find', async(ctx, next) => {
    let word = ctx.request.query.word
    let count = 0
    if (!word) {
        ctx.body = {
            code: 400,
            msg: "word参数错误"
        }
        return
    }
    let data = await words_model.find({"word": word ? word : ""})
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