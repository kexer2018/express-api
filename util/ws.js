/**
 * @description: wss连接
 * @author:Zhang Xiao
 * @date: 2023-06-05 11:09:44
 * @version: V1.0.0
 **/
const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3999 })

//广播
function broadcast (date) {
  wss.clients.forEach(function each (client) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(data))
    }
  })
}

//心跳
function heartBeat () {
  this.isAlive = true
}

const interval = setInterval(function ping () {
  wss.clients.forEach(function each (ws) {
    if (ws.isAlive === false) return ws.terminate()
    ws.isAlive = false
    ws.ping()
  })
}, 30000)

//每次的连接都会生成一个wss实例
wss.on('connection', function connection (ws, req) {
  ws.on('message', function message (message) {
    let data = JSON.parse(message)
    switch (data.type) {
      case 'setName':
        (ws.nickName = data.name),
        (ws.nickImage = data.image),
        broadcast({
          name: '系统提示:',
          text: ws.nickName + '连接成功'
        })
        break
      case 'chat':
        broadcast({
          name: ws.nickName,
          text: data.text,
          image: ws.nickImage
        })
        break
      case 'close':
        broadcast({
          name: '系统提示:',
          text: ws.nickName + '已断开连接'
        })
        break
      case 'heart':
        broadcast({
          name: 'heart',
          text: data.text
        })
      default:
        break
    }
  })
  ws.on('pong', heartBeat)
})

wss.on('close', function close () {
  console.log('连接关闭')
  clearInterval(interval)
})

module.exports = wss
