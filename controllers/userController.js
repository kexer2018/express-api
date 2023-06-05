/**
 *@description: 用户路由的操作
 *@author: Zhang Xiao
 *@date: 2023-06-04 16:00:09
 *@version: V1.0.0
 **/
const dayjs = require('dayjs')
const mysql = require('../database/mysql')
const { CODE_SUCCESS } = require('../util/constants')
const { resolver } = require('../util')
const userService = require('../service/userService')

exports.getUsers = function (req, res) {
  mysql.query(userService.getUsers).then(data => {
    res.json({
      code: CODE_SUCCESS,
      data: resolver(data).map(item =>
        Object.assign(item, {
          createTime: dayjs(item.createTime).format('YYYY-MM-DD')
        })
      )
    })
  })
}

exports.getUser = function (req, res) {
  const { user_name } = req.query
  mysql.query(userService.getCreateTime(user_name)).then(data => {
    res.json({
      code: CODE_SUCCESS,
      data: dayjs(resolver(data[0].createTime)).format('YYYY-MM-DD') //日期格式化
    })
  })
}

exports.deleteUser = function (req, res) {
  const { id } = req.query
  mysql.query(userService.deleteUser(id)).then(data => {
    res.json({
      code: CODE_SUCCESS,
      msg: '删除成功!'
    })
  })
}

exports.updateUser = function (req, res) {
  const { id, user_name, passWord } = req.query
  mysql.query(userService.updateUser(id, user_name, passWord)).then(() => {
    res.json({
      code: CODE_SUCCESS,
      msg: '修改成功!'
    })
  })
}

exports.uploadUserImage = function (req, res) {
  const { user_name } = req.query
  const { filename } = req.file
  mysql.query(userService.updateUserImage(filename, user_name)).then(() => {
    res.json({
      code: CODE_SUCCESS,
      msg: '上传成功!'
    })
  })
}

exports.getUserImage = function (req, res) {
  const { user_name } = req.query
  mysql.query(userService.updateUserImage(user_name)).then(data => {
    res.json({
      code: CODE_SUCCESS,
      data: resolver(data)
    })
  })
}
