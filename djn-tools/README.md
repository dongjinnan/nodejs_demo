## 安装
```
npm install djn-tools
```

## 导入
``` js
const me = require('djn-tools')
```

## 格式化时间
``` js
// 调用 dateFormat 对时间进行格式化
const tool = require('./djn-tools')
const dtStr = tool.dateFormat(dt)
// 结果 2024-07-11 16:54:46
console.log(dtStr)
```

## 转移 HTML 中的特殊字符
``` js
// 带转换的 HTML 字符串
const htmlStr = '<h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>'
// 调用 htmlEscape 进行转换
const str = tool.htmlEscape(htmlStr)
// 转换结果：&lt;h1 title=&quot;abc&quot;&gt;这是h1标签&lt;span&gt;123&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(str)
```

## 还原 HTML 中的特殊字符
``` js
// 待还原的 HTML 字符串
const str2 = tool.htmlUnEscape(str)
// 输出的结果 <h1 title="abc">这是h1标签<span>123&nbsp;</span></h1>
console.log(str2)
···

## 开源协议
ISC