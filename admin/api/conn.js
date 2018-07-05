const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',    // 数据库用户
    password: '123456',   // 数据库密码
    database: 'blog'  // 选中数据库
})

connection.connect()

exports.conn = connection

