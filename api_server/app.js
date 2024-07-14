const express = require('express')
// 创建web服务器实例
const app = express()

// 配置cors跨域
const cors = require('cors')
app.use(cors())

// 配置解析表单数据的中间件
app.use(express.urlencoded({extended: false}))

// 在路由之前封装 res.cc 函数
app.use((req, res, next) => {
    // status默认为1，表示失败的情况
    res.cc = function(err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err
        })
    }
    next()
}) 

// 一定要在路由配置之前解析 Token 的中间件
const expressJWT = require('express-jwt')
const config = require('./config')

app.use(expressJWT({secret: config.jwtSecretKey}).unless({path: [/^\/api/]}))

const userRouter = require('./router/user')
app.use('/api', userRouter)

const joi = require('joi')
app.use((err, req, res, next) => {
    // 验证失败导致的错误
    if (err instanceof joi.ValidationError) return res.cc(err)
    if (err.name === 'UnauthorizedError') return res.cc('身份认证失败！')
    // 未知错误
    res.cc(err)
})

// 启动服务器
app.listen('3007', ()=>{
    console.log('express server running at http://127.0.0.1:3007')
})