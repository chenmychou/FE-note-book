const Koa = require('koa')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const serve = require('koa-static');
const mongoose = require('mongoose')
const redis = require('redis')
// const body_parser = require('body-parser')
const client = redis.createClient()
const app = new Koa()
const koaBody = require('koa-body');
app.use(koaBody({
    multipart: true,
    json: true,
    form: true,
    text: true,
    formLimit:"3mb",
    jsonLimit:"3mb",
    textLimit:"3mb"
}));
// app.use(koaBody({
//     multipart: true,
//     formidable: {
//         maxFileSize: 200*1024*1024    // 设置上传文件大小最大限制，默认2M
//     },
//     formLimit:"3mb",
//     jsonLimit:"3mb",
//     textLimit:"3mb",
//     enableTypes: ['json', 'form', 'text']
// }));

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
// client.on('connect', (err) => {
//     // client.get('user_name', redis.print)
//     // client.lrange("001", 1, redis.print)
//     // client.set("newlist", JSON.stringify([{"name": "fds", "age": "12"},{"name": "fds", "age": "12"},{"name": "fds", "age": "12"}]), function(err, res) {
//     })
// })

app.use(cors());

// app.use(bodyParser());
// app.use(body_parser.json({limit:'50mb'}));
// app.use(body_parser.urlencoded({limit:'50mb',extended:true}));

// app.use(bodyParser({
//     formLimit:"3mb",
//     jsonLimit:"3mb",
//     textLimit:"3mb",
//     enableTypes: ['json', 'form', 'text']
// }));

// app.use(static(__dirname+"/assets"))
// const user_routers = require('./routes/user_route')
const ciyu_routers = require('./routes/ciyu_route')
const words_routers = require('./routes/words_route')
const idiom_routers = require('./routes/idiom_route')
const xiehouyu_routers = require('./routes/xiehouyu_route')
const upload_routers = require('./routes/upload')


app.use(ciyu_routers.routes()).use(ciyu_routers.allowedMethods())
app.use(words_routers.routes()).use(words_routers.allowedMethods())
app.use(idiom_routers.routes()).use(idiom_routers.allowedMethods())
app.use(xiehouyu_routers.routes()).use(xiehouyu_routers.allowedMethods())
app.use(upload_routers.routes()).use(upload_routers.allowedMethods())

app.listen(config.port)
console.log('服务启动在 http://localhost:'+config.port)