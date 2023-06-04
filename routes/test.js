/**
 *@description:测试接口
 *@author: Zhang Xiao
 *@date: 2023-06-04 15:33:27
 *@version: V1.0.0
 **/
const express = require('express')
const router = express.Router()

router.get('/list', (req, res, next) => {
  res.json({
    list: [
      {
        name: '12',
        id: 1
      },
      {
        name: '12234',
        id: 2
      }
    ]
  })
})

module.exports = router
