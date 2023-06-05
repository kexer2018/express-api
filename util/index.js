/**
 * @description: 转化json数据
 * @author:Zhang Xiao
 * @date: 2023-06-05 10:34:34
 * @version: V1.0.0
**/

exports.resolver = (data) => {
    return JSON.parse(JSON.stringify(data))
}
