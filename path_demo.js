const path = require('path')

const pathStr = path.join('/a','/b/c','../','./d','e')
console.log(pathStr)

const pathStr1 = path.join('/a','/b/c','../../','./d','e')
console.log(pathStr1)

const pathStr2 = path.join(__dirname, './files/成绩.txt')
console.log(pathStr2)

const fpath = 'a/b/c/index.html'
const fullName = path.basename(fpath)
console.log(fullName)

const nameWithoutExt = path.basename(fpath, '.html')
console.log(nameWithoutExt)

const fext = path.extname(fpath)
console.log(fext)


