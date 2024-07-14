const express = require('express')
const app = express()

const mw = function(req, res, next) {
    console.log('局部生效中间件')
    // 把流转关系转交给下一个中间件或路由函数
    next()
}

const mw1 = function(req, res, next) {
    console.log('局部生效中间件1')
    // 把流转关系转交给下一个中间件或路由函数
    next()
}

// app.use(mw)

app.use(function(req, res, next) {
    console.log('中间件1')
    const time = Date.now()
    req.startTime = time
    next()
})

app.use(function(req, res, next) {
    console.log('中间件2')
    next()
})

// app.get('/', mw, mw1, (req, res) => { 
app.get('/', [mw,mw1], (req, res) => {
    console.log('Home page.')
    throw new Error('服务器内部发生了错误！')
    res.send('Home page.' + req.startTime)
})

// 错误级别中间件，捕获整个项目的异常错误，从而防止程序的崩溃
app.use(function(err, req, res, next) {
    console.log('发生了错误！' + err.message)
    res.send('Error' + err.message)
})

app.get('/user', (req, res) => {
    console.log('User page')
    res.send('User page.' + req.startTime)
})

app.use(express.json()) //解析json请求体数据中间件
app.post('/user', (req, res) => {
    // 在服务器可以使用req.body接收客户端json请求体数据
    // 默认情况下，如果不配置解析表单数据的中间件，则req.body默认等于undefined
    console.log(req.body)
    res.send('ok')
})

const parser = require('body-parser')
app.use(parser.urlencoded({extended:false}))

// 请求参数为x-www-form-urlencoded
// app.use(express.urlencoded({extended: false})) // 解析x-www-form-urlencoded类型参数的中间件，基于body-parser封装出来的
app.post('/book', (req, res) => {
    console.log(req.body)
    res.send('ok')
})


app.listen('80', ()=>{
    console.log('express server running at http://127.0.0.1')
})

// 应用级别中间件，绑定到app实例上，app.use()，必须注册在所有路由之前
// 路由级别中间件，绑定到router实例上，router.use()
// 错误级别中间件，4个形参 (err, req, res next)，必须注册在所有路由之后
// 内置中间件：托管静态资源express.static、
//            解析JSON格式的请求体数据express.json, 只能在4.16.0+版本中用
//            解析URL-encoded请求体数据express.urlencoded, 只能在4.16.0+版本中用
// 自定义中间件