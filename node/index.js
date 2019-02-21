const Koa = require('koa')
const cors = require('koa-cors')
const bodyParser = require('koa-bodyparser')
const config = require('./config')
const mongoose = require('mongoose')
const app = new Koa()
mongoose.connect(config.dataBase, {useNewUrlParser: true}, (err, db) => {
    if (err) return console.log(err)
    console.log('数据库连接')
})
app.use(cors());
app.use(bodyParser());

const user_routers = require('./routes/user_route')
app.use(user_routers.routes()).use(user_routers.allowedMethods())

app.listen(config.port)
console.log('服务启动在 http://localhost:' + config.port)