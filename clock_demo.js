const fs = require('fs')
const path = require('path')

// 匹配以<style>开始，以</style>结尾的代码段，\s匹配任意空白字符,\S匹配任意非空白字符，*任意多次
const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

fs.readFile(path.join(__dirname, './files/index.html'), 'utf8', function(err, dataStr) {
    if (err) {
        console.log('读取HTML文件失败！' + err.message)
    }

    // 将index.html文件分别拆解出js、css、html文件
    resolveCss(dataStr)
    resolveJs(dataStr)
    resolveHtml(dataStr)
})

function resolveCss(htmlStr) {
    // 使用正则表达式提取需要的内容
    const r1 = regStyle.exec(htmlStr)
    // 将提取出来的样式字符串进行replace操作
    const newCss = r1[0].replace('<style>','').replace('</style>','')
    // 将提取出的css样式写入css文件
    fs.writeFile(path.join(__dirname,'./files/clock/index.css'), newCss, function(err) {
        if (err) {
            return console.log('写入css样式失败！' + err.message)
        }
        console.log('写入样式文件成功！')
    })
}

function resolveJs(htmlStr) {
    const r2 = regScript.exec(htmlStr)
    const newJs = r2[0].replace('<script>', '').replace('</script>','')
    fs.writeFile(path.join(__dirname, './files/clock/index.js'), newJs, function(err){
        if (err) {
            return console.log('写入js样式失败！' + err.message)
        }
        console.log('写入js文件成功！')
    })
}

function resolveHtml(htmlStr) {
    const newHtml = htmlStr.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>')
        .replace(regScript, '<script src="./index.js"></script>')
    
    fs.writeFile(path.join(__dirname, './files/clock/index.html'), newHtml, function(err){
        if (err) {
            return console.log('写入html失败！' + err.message)
        }
        console.log('写入html成功！')
    })
}