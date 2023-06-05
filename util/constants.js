/**
 * @description: 定义一些常数
 * @author:Zhang Xiao
 * @date: 2023-06-05 10:30:11
 * @version: V1.0.0
**/
module.exports = {
  CODE_ERROR: -1, //请求响应失败的code码
  COCODE_SUCCESS: 0, //请求响应成功的code码
  CODE_TOKEN_EXPIRED: 401, //授权失败
  PRIVATE_KEY: 'zhang', //自定义jwt加密的私钥
  JWT_EXPIRED: 60 * 60 * 24 //JWT过期时间，单位：秒
}
