/**
 *@description:用户信息的增删改查
 *@author: Zhang Xiao
 *@date: 2023-06-04 15:41:27
 *@version: V1.0.0
**/

const express = require('express')
const userController = require('../controllers/userController')
const upload = require('../util/upload')

const router = express.Router()

//查询所有的用户
router.get('/user', userController.getUsers)

//查询一条用户
router.get('/getUser', userController.getUser)

//删除普通用户
router.delete('/deleteUser', userController.deleteUser)

//修改用户的信息
router.put('/updateUser', userController.updateUser)

//更改用户头像
router.post('/updateImage', upload, userController.uploadUserImage)

//获取用户头像
router.get('/getImage', userController.getUserImage)

module.exports = router
