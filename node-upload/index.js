const Koa = require('koa')
const app = new Koa()
const koaBody = require('koa-body');
const bodyParser = require('koa-bodyparser');
const uploadRouter = require('./uploadRouter')

app.use(koaBody({
    multipart: true,
    // formLimit: '3000mb',
    formidable: {
        maxFileSize: 10000*1024*1024  // 设置上传文件大小最大限制，默认2M
    }
}));
app.use(bodyParser())

app.use(uploadRouter.routes()).use(uploadRouter.allowedMethods())
app.listen(3000)
console.log('服务启动在 http://localhost:3000')