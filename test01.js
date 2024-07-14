const time = require('./djn-tools/src/dateFormat')

const dt = new Date()
console.log(time.dateFormat(dt))

// 安装包命令：npm i moment@2.22.2
const moment = require('moment')
console.log(moment().format('YYYY-MM-DD HH:mm:ss'))

const tool = require('./djn-tools')
console.log(tool.dateFormat(dt))

const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
const str = tool.htmlEscape(htmlStr)
console.log(str)

const str2 = tool.htmlUnEscape(str)
console.log(str2)

// console.log(exports)
// console.log(module.exports)
// console.log(exports === module.exports)

// const age = 20

// exports.username = '张三'
// exports.sayHello = function() {
//     console.log('Hello!')
// }
// exports.age = age
// module.exports = {
//      nickname : '小黑',
//      sayHi() {
//         console.log('Hi!')
//      }
// }

