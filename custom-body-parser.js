const qs = require('querystring')

// 自定义中间件
const bodyParser = (req, res, next) => {
    // 监听req的data事件，获取客户端发送到服务器的数据。可能分批次发送，需要拼接才能得到完整的数据
    let str = ''
    req.on('data', (chunk) => {
        str += chunk
    })

    // 监听req的end事件, 此时str是完整的数据
    req.on('end', () => {
        console.log(str)
        const body = qs.parse(str) // 解析数据转为对象
        console.log(body)

        req.body= body
        next()
    })
}

module.exports = bodyParser