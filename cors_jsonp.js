const express = require('express')
const app = express()

// JSONP: 浏览器端通过<script>标签的src属性，请求服务器上的数据，同时，服务器返回一个函数的调用。这种请求数据的方式叫做JSONP。
// JSONP只支持GET请求
// 必须在配置cors之前配置jsonp接口
app.get('/api/jsonp',(req, res) => {
    // 得到函数的名称
    const funcName = req.query.callback
    // 定义要发送客户端的数据对象
    const data = {name: 'zs', age: 22}
    // 拼接出一个函数的调用
    const scriptStr = `${funcName}(${JSON.stringify(data)})`
    // 把拼接的字符串响应给客户端
    res.send(scriptStr)
})

// 一定要在路由之前，配置cors这个中间件，从而解决接口跨域的问题 npm install cors
// cors在浏览器中有兼容性，只支持XMLHttpRequestLevel2的浏览器，才能正常访问开启了cors的服务端接口（如IE10+、Chrome4+、FireFox3.5+）
// Access-Control-Allow-Origin、Access-Control-Allow-methods、
// 简单请求(客户端与服务器之间只会发生一次请求)、预检请求（两次请求，真正请求之前有OPTION预检）
const cors = require('cors')
app.use(cors())

const router = require('./router')
app.use('/api', router)

app.listen(80, () => {
    console.log('express server running at http://127.0.0.1')
})