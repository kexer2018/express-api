/**
 *@description: 录入用户信息的SQL语句
 *@author: Zhang Xiao
 *@date: 2023-06-04 17:22:41
 *@version: V1.0.0
 **/

exports.addUserInfo = (vs, deviceType, url, referer, localTime, delay) =>
  `INSERT INTO TRACK (vsManage,deviceType,currentUrl,refererUrl,UserTime,delayTime) VALUES '${vs}','${deviceType}','${url}','${referer}','${localTime}','${delay}');`

exports.addTrackWeb = (vs, deviceType, url, referer, localTime, delay) =>
  `INSERT INTO VUEUSER (vsManage,deviceType,currentUrl,refererUrl,userTime,delayTime) VALUES ('${vs}','${deviceType}','${url}','${referer}','${localTime}','${delay}');`
