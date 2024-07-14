const http = require('http')
const fs = require('fs')
const path = require('path')

// 创建web服务器实例
const server = http.createServer()

// 为服务器实例绑定request事件，监听客户端请求
server.on('request', (req, res) => {
    const url = req.url

    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname,'./files/clock/index.html')
    } else {
        fpath = path.join(__dirname,'./files/clock', url)
    }
    
    console.log(fpath)
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end('404 NOT FOUND!')
        res.end(dataStr)
    })

    // let content = '<h1>404 Not Found!</h1>'
    // if (url === '/' || url === '/index.html') {
    //     content = '<h1>首页</h1>'
    // } else if (url === '/about.html') {
    //     content = '<h1>关于页面</h1>'
    // }
    // const method = req.method
    // const str = `您请求的 URL 地址是 ${url}, 请求类型是 ${method}`
    // console.log(str)

    // res.setHeader('Content-Type', 'text/html;charset=utf-8') //防止中文乱码
    // res.end(content)
})

// 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})