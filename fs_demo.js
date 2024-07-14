const fs = require('fs')
const path = require('path')

// 出现路径拼接错误的问题，是因为使用的./或../开头的相对路径。
// 如果要解决这个问题，可以直接提供完整的绝对路径  ---移植性差，不利于维护
// fs.readFile('D:\\项目\\node\\fs_demo.js','utf8',function(err,result) {
// fs.readFile(__dirname + '/files/成绩.txt', 'utf8', function(err,result) {
fs.readFile(path.join(__dirname, './files/成绩.txt'), 'utf8', function(err,result) {
//fs.readFile('./files/成绩.txt','utf8',function(err,result) {
	if (err) {
		return console.log('文件读取失败！' + err.message)
	}
	
	console.log('文件读取成功，内容是：' + result)
	const arrOld = result.split(' ')
	const arrNew = []
	arrOld.forEach(item=>{
		arrNew.push(item.replace('=','：'))
	})
	const newStr = arrNew.join('\r\n')
	console.log(newStr)

	fs.writeFile('./files/成绩_ok.txt',newStr,function(err){
		if (err) {
			console.log('文件写入失败！' + err.message)
		}
		console.log('文件写入成功！')
	})
})
