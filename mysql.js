const mysql = require('mysql2')

const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'mydb'
})
db.query('SELECT * FROM users', (err, results) => {
    if (err) return console.log(err.message)
    console.log(results)
})

// const user = {username: 'Spider-Man', password: 'pcc321'}
// const sqlStr = 'insert into users (username, password) values (?, ?)'
// db.query(sqlStr, [user.username, user.password], (err, results) => {
//     if (err) return console.log(err.message)
//     if(results.affectedRows === 1) {console.log('插入数据成功！')}
// })

// 插入数据便捷方式
// const user1 = {username: 'Spider-Man2', password: 'pcc4321'}
// const sqlStr1 = 'insert into users set ?'
// db.query(sqlStr1, user1, (err, results) => {
//     if (err) return console.log(err.message)
//     if(results.affectedRows === 1) {console.log('插入数据成功！')}
// })

// const user = {id: 4, username: 'aaa', password: '000'}
// const sqlStr = 'update users set username=?, password=? where id=?'
// db.query(sqlStr, [user.username, user.password, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if(results.affectedRows === 1) {console.log('更新成功！')}
// })

// 更新数据的便捷方式
// const user = {id: 4, username: 'aaaaa', password: '00000'}
// const sqlStr = 'update users set ? where id=?'
// db.query(sqlStr, [user, user.id], (err, results) => {
//     if (err) return console.log(err.message)
//     if(results.affectedRows === 1) {console.log('更新成功！')}
// })

const sqlStr = 'delete from users where id=?'
db.query(sqlStr, 4, (err, results) => {
    if (err) return console.log(err.message)
        if(results.affectedRows === 1) {console.log('删除成功！')}
})

// const connection = mysql.createConnection({
//     host: '127.0.0.1',
//     user: 'root',
//     password: 'root',
//     //port: 3306,
//     database: 'mydb',
//     // charset: 'UTF8_GENERAL_CI',
//     // connectTimeout: 10000,
//     // multipleStatements: false
// })

// connection.connect((err) => {
//     if (err) {
//         console.err('Error connecting to database', err)
//         return;
//     } 
//     console.log('connected to database successfully.')

//     const sql = 'select * from users where age > ?'
//     const params = [18]
//     connection.query(sql, params, (err, results) => {
//         if (err) {
//             console.log('Error executing query.', err)
//             return;
//         }
//         console.log('Query results', results)
//     })
// })

// connection.on('end', ()=>{
//     console.log('database connection closed')
// })

// connection.on('err', (err) => {
//     console.log('Database err:', err)
// })

//connection.end()

