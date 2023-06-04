/**
 *@description:路由
 *@author: Zhang Xiao
 *@date: 2023-06-04 15:40:49
 *@version: V1.0.0
**/
const express = require('express')
const jwtAuth = require('../util/user-jwt')
const testRouter = require('./test')
const userRouter = require('./user')
const loginRouter = require('./login')
const trackRouter = require('./track')

const router = express.Router()

router.use(jwtAuth) //引入认证模块

router.use('/api', testRouter) //测试路由
router.use('/api', userRouter) //用户路由
router.use('/api', loginRouter) //登录路由
router.use('/api', trackRouter) //信息收集路由

/* 自定义统一异常处理中间件，需要放在代码最后 */
router.use((err, req, res, next) => {
  console.log('err===', err)
  if (err && err.name === 'UnauthorizedError') {
    const { status = 401, message } = err
    //抛出401异常
    res.status(status).json({
      code: status,
      msg: 'token 失效,请重新登录',
      data: null
    })
  } else {
    const { output } = err || {}
    //错误码和错误的信息
    const errCode = (output && output.statusCode) || 500
    const errMsg =
      (output && output.payload && output.payload.error) || err.message
    res.status(errCode).json({
      code: errCode,
      msg: errMsg
    })
  }
})

module.exports = router
