const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
require('./util/ws')

const router = require('./routes')
const app = express()

app.use(express.static(path.join(__dirname, 'public')))

app.use(bodyParser.urlencoded({ extended: true })) // 解析form表单提交的数据application/x-www-form-urlencoded
app.use(bodyParser.json()) // 解析json数据格式
app.use(bodyParser.text()) //解析 text/plain 数据格式

app.use(cors()) // 注入cors模块解决跨域

app.use('/', router)

app.listen(9000, () => {
  console.log('server is running port 9000')
})
