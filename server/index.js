const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8081 })

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    console.log('received: %s', message)
  })
  console.log('connection')
  ws.send('something')
})
