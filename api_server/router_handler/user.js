const db = require('../db/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('../config')

// 注册新用户
exports.regUser = (req, res) => {
    const userinfo = req.body
    // if (!userinfo.username || !userinfo.password) {
    //     return res.send({status: 1, message: '用户名或密码不合法！'})
    // }

    const sqlStr = 'select * from users where username=?'
    db.query(sqlStr, userinfo.username, (err, results) => {
        if (err) {
            return res.cc()
        }

        if (results.length > 0) {
            return res.cc('用户名被占用，请更换其他用户名！')
        }

        // 对密码加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
        
        // 插入新用户
        const sql = 'insert into users set ?'
        db.query(sql, {username: userinfo.username, password: userinfo.password}, (err, results) => {
            if (err) return res.cc()
            if(results.affectedRows !== 1) {return res.cc('注册用户失败，请稍后再试！')}
            res.cc('注册成功！')
        })
    })
}

// 登录
exports.login = (req, res) => {
    const userinfo = req.body
    const sql = "select * from users where username=?"
    db.query(sql, userinfo.username, (err, results) => {
        if (err) return res.cc(err)
        if (results.length !== 1) return res.cc('登录失败！')
        
        // 判断密码是否正确
        const compareResult = bcrypt.compareSync(userinfo.password, results[0].password)
        if (!compareResult) return res.cc('登录失败！')

        // 生成JWT token 注意剔除密码和头像的值，防止信息暴露
        // ES6语法
        const user = {...results[0], password : '', user_pick : ''}
        const tokenStr = jwt.sign(user, config.jwtSecretKey, {expiresIn: config.expiresIn})
        res.send({
            status: 0,
            message: '登录成功！',
            token: 'Bearer ' + tokenStr
        })
    })
    
}