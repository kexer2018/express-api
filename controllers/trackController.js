/**
 *@description: 获取用户信息
 *@author: Zhang Xiao
 *@date: 2023-06-04 17:02:19
 *@version: V1.0.0
 **/
const mysql = require('../database/mysql')
const { CODE_SUCCESS } = require('../util/constants')
const trackService = require('../service/trackService')

exports.getUserInfo = (req, res) => {
  const params = JSON.parse(req.query.data)
  const { vs, deviceType, url, referer, localTime, delay } = params
  mysql
    .query(
      trackService.addUserInfo(vs, deviceType, url, referer, localTime, delay)
    )
    .then(() => {
      res.json({
        code: CODE_SUCCESS
      })
    })
}

exports.trackweb = function trackweb (req, res) {
  const params = JSON.parse(req.body)
  const { browserType: deviceType, appName: vs } = params.baseInfo
  const { url, referer, tiggerTime: localTime, delay } = params.eventInfo[0]
  mysql
    .query(
      trackService.addTrackWeb(vs, deviceType, url, referer, localTime, delay)
    )
    .then(() => {
      res.json({
        code: CODE_SUCCESS
      })
    })
}
