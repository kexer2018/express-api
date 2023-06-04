/**
 *@description:收集用户信息
 *@author: Zhang Xiao
 *@date: 2023-06-04 15:37:23
 *@version: V1.0.0
 **/
const express = require('express')
const trackController = require('../controllers/trackController')
const router = express.Router()

router.get('/getUserInfo', trackController.getUserInfo)
router.post('/trackweb', trackController.trackweb)

module.exports = router
