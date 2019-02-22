const Koa = require('koa')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const mongoose = require('mongoose')
const redis = require('redis')
const client = redis.createClient()
const app = new Koa()
mongoose.connect(config.dataBase, {useNewUrlParser: true, useCreateIndex: true}, (err, db) => {
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
app.use(bodyParser());

const user_routers = require('./routes/user_route')
app.use(user_routers.routes()).use(user_routers.allowedMethods())

app.listen(config.port)
console.log('服务启动在 http://localhost:' + config.port)