const express = require('express')
const app = express()

// 有跨域请求可选JWT认证
// npm install jsonwebtoken express-jwt
// Authorization: Bearer token
const jwt = require('jsonwebtoken')  // 生成token字符串
const expressJWT = require('express-jwt') //解析token字符串还原成json对象

const secretKey = 'my No1 ^-^'

// 解析token中间件，以/api/开头的不需要访问权限
// 注意：只要配置成功了 express-jwt 这个中间件，就可以把解析出来的用户信息，挂载到 req.user 属性上
app.use(expressJWT({secret: secretKey}).unless({path: [/^\/api\//]}))

app.use(express.urlencoded({extended: false}))

app.post('/api/login', (req, res) => {
    if (req.body.username !== 'admin' || req.body.password !== '000000') {
        return res.send({status: 1, msg: '登录失败'})
    }

    // 生成JWT 字符串，并通过token属性发送给客户端，3个参数分别为：用户信息对象、加密密钥、配置对象（可配置当前token的有效期）
    // 注意不要添加密码到jwt中
    const tokenStr = jwt.sign({username: req.body.username}, secretKey, {expiresIn: '60s'})

    res.send({status: 200, message: '登录成功', token: tokenStr})
})

app.get('/admin/getInfo', (req, res) => {
    console.log(req.user)
    res.send(req.user)
})

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
        return res.send({
            status: 401,
            message: '无效的token'
        })
    }
    
    res.send({
        status: 500,
        message: '未知错误！'
    })
})

app.listen('80', ()=>{
    console.log('express server running at http://127.0.0.1')
})
