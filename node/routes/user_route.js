const Router = require('koa-router')
const router = new Router()
const user_model = require('../model/user_model')
import clientPromise from '../redis/client'
router.prefix('/api/v1/userInfo')
router.get('/', async(ctx, next) => {
    let datalist = await clientPromise('newlist')
    ctx.body = '您所在的位置是查询系统首页' + datalist
})
router.post('/', async(ctx, next) => {
    console.log('post!', ctx.request.body)
    ctx.body = '您所在的位置是查询系统首页'
    
})
router.post('/addUser', async(ctx, next) => {
    let Name = ctx.request.body.Name
    let CtfId = ctx.request.body.CtfId

    if (!Name || !CtfId) {
        ctx.body = {
            code: 401,
            msg: "参数有误"
        }
        return
    }
    let data = await user_model.create({
        Name,
        CtfId
    })
    ctx.body = {
        code: 200,
        msg: "用户添加成功！"
    }
})
router.get('/findUser', async(ctx, next) => {
    let Name = ctx.request.query.Name
    let CtfId = ctx.request.query.CtfId
    let count = 0
    console.log('Name', Name, CtfId)
    if (!Name && !CtfId) {
        ctx.body = {
            code: 400,
            msg: "必须传一个参数"
        }
        return
    }
    let data = await user_model.find(
        {
            $or: [
               {"Name": Name ? Name : ''}, {"CtfId": CtfId ? CtfId : ''}
            ]
         }
    )
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