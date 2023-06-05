/**
 * @description: 数据库操作
 * @author:Zhang Xiao
 * @date: 2023-06-05 13:41:35
 * @version: V1.0.0
**/
const mysql = require('mysql')
const pool = mysql.createPool({
  connectionLimit: 10, //最大连接数，默认为10
  host: '150.158.94.72', //数据库服务地址
  port: 3306, //数据库端口号
  user: 'manage', //连接名
  password: '123456',//连接密码
  database: 'manage'//数据库名
})

class Mysql {
  constructor () {}
  query (sql) {
    return new Promise((resolve, reject) => {
      pool.getConnection(function (err, connection) {
        if (err) {
          reject(err)
          throw err
        }
        connection.query(sql, function (error, results, fields) {
          connection.query(sql, function (error, result, fields) {
            if (error) {
              reject(err)
              throw error
            }
            connection.release()
            resolve(results)
          })
        })
      })
    })
  }
}

module.exports = new Mysql()
