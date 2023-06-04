/**
 *@description:登录路由
 *@author: Zhang Xiao
 *@date: 2023-06-04 18:06:48
 *@version: V1.0.0
**/
const express = require('express')
const loginController = require('../controllers/loginController')
const router = express.Router()

router.post('/login', loginController.login)
router.post('/register', loginController.register)

module.exports = router
