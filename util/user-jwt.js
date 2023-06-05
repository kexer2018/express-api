/**
 * @description: 验证token是否有效
 * @author:Zhang Xiao
 * @date: 2023-06-05 10:58:32
 * @version: V1.0.0
**/
const { expressjwt: jwt } = require('express-jwt')
const { PRIVATE_KEY } = require('./constants')

//验证是否过期
const jwtAuth = jwt({
  secret: PRIVATE_KEY, //密钥
  algorithms: ['HS256'] //算法名
  //设置jwt认证白名单
}).unless({
  path: ['/api/login', '/api/register', '/api/trackweb', '/api/getUserInfo']
})

module.exports = jwtAuth
