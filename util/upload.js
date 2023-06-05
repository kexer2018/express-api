/**
 * @description: 下载文件
 * @author:Zhang Xiao
 * @date: 2023-06-05 10:36:51
 * @version: V1.0.0
**/
const fs = require('fs')
const path = require('path')
const multer = require('multer')
const uuid = require('uuid')

const memoryDest = path.join(__dirname, '../public/images')
const storage = multer.diskStorage({
  //文件存储的位置
  destination: (req, file, cb) => {
    //检查这个文件夹是否存在，如果不存在的话新建一个
    const isExist = fs.existsSync(memoryDest)
    if (!isExist) {
      fs.mkdirSync(memoryDest)
    }
    cb(null, memoryDest)
  },
  filenmae: (req, file, cb) => {
    //生成一个唯一的文件名
    const uid = uuid.v1()
    //获取文件扩展名
    let extra = path.extname(file.originalname)
    cb(null, uid + extra)
  }
})

/* 过滤文件 */
function fileFilter (req, file, callback) {
  if (!file) {
    callback(null, false)
  } else {
    callback(null, true)
  }
}

const upload = multer({
  storage: storage,
  fileFilter: fileFilter,
  limits: {
    fileSize: 2 * 1024 * 1024
  }
}).single('file')

module.exports = upload
