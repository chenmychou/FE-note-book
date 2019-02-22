const Router = require('koa-router')
const router = new Router()
const idiom_model = require('../model/idiom_model')
// const idiom_model = require('../model/idiom_model')
// const words_model = require('../model/words_model')
// const xiehouyu_model = require('../model/xiehouyu_model')

router.prefix('/api/v1/checkIdiom')
router.get('/', async(ctx, next) => {
    console.log('get!', ctx.request.query)
    ctx.body = '您所在的位置是查询&添加词语首页'
})
router.post('/', async(ctx, next) => {
    console.log('post!', ctx.request.body)
    ctx.body = '您所在的位置是查询&添加词语首页'
})
router.post('/addIdiom', async(ctx, next) => {
    let derivation = ctx.request.body.derivation // 词语
    let example = ctx.request.body.example // 曾用名字
    let word = ctx.request.body.word // 笔画数
    let pinyin = ctx.request.body.pinyin // 拼音
    let abbreviation = ctx.request.body.abbreviation // 部首
    let explanation = ctx.request.body.explanation // 解释
    if (!derivation || !example || !word || !pinyin || !abbreviation || !explanation) {
        ctx.body = {
            code: 401,
            msg: "参数有误"
        }
        return
    }
    let data = await words_model.create({
        word,
        derivation,
        example,
        pinyin,
        abbreviation,
        explanation
    })
    ctx.body = {
        code: 200,
        msg: `成语\n${word}\n添加成功！`
    }
})
router.get('/find', async(ctx, next) => {
    let word = ctx.request.query.word
    let count = 0
    if (!word) {
        ctx.body = {
            code: 400,
            msg: "idiom参数错误"
        }
        return
    }
    let data = await idiom_model.find({"word":{$regex: word, $options:'i'}})
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