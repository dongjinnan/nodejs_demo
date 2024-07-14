const express = require('express')

// 创建web服务器
const app = express()

const router = require('./router_demo')
app.use('/api', router)  // app.use() 注册全局中间件

// 监听客户端get请求，并响应具体内容
app.get('/user', (req, res) => {
    res.send({name: 'xiaoming', age: 20, gender: '男'})
})

// 监听客户端post请求
app.post('/user', (req, res) => {
    res.send('请求成功')
})

app.get('/', (req, res) => {
    // 通过req.query查询到路径参数，默认是空对象
    console.log(req.query)
    res.send(req.query)
})

// 动态参数用req.params获取
app.get('/user/:id/:name', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})

// 托管静态资源服务器，对外提供访问，前边加访问前缀/abc
app.use('/abc', express.static('./files/clock'))