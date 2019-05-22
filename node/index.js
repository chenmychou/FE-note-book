const Koa = require('koa')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const serve = require('koa-static');
const mongoose = require('mongoose')
const redis = require('redis')
const client = redis.createClient()
const app = new Koa()
const koaBody = require('koa-body');
const uploadRouter = require('./routes/uploadRouter')

app.use(koaBody({
    multipart: true,
    formidable: {
        maxFileSize: 10000*1024*1024  // 设置上传文件大小最大限制，默认2M
    }
}));
app.use(bodyParser())


mongoose.set('useNewUrlParser', true); 
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true); // v5.4.13
// mongoose.connect(config.dataBase, {useNewUrlParser: true}, (err, db) => {
mongoose.connect(config.dataBase, (err, db) => {
    if (err) return console.log(err)
    console.log('数据库连接')
})

client.on('ready', (err) => {
    console.log('ok! redis')
})
app.use(cors());
const ciyu_routers = require('./routes/ciyu_route')
const words_routers = require('./routes/words_route')
const idiom_routers = require('./routes/idiom_route')
const xiehouyu_routers = require('./routes/xiehouyu_route')

app.use(ciyu_routers.routes()).use(ciyu_routers.allowedMethods())
app.use(words_routers.routes()).use(words_routers.allowedMethods())
app.use(idiom_routers.routes()).use(idiom_routers.allowedMethods())
app.use(xiehouyu_routers.routes()).use(xiehouyu_routers.allowedMethods())
app.use(uploadRouter.routes()).use(uploadRouter.allowedMethods())

app.listen(config.port)
console.log('服务启动在 http://localhost:' + config.port)