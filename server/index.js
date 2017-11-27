const http = require('http')
const static = require('node-static')
const WebSocket = require('ws')

const fileServer = new static.Server('../client/build')
http
  .createServer(function(request, response) {
    request
      .addListener('end', function() {
        fileServer.serve(request, response, function(e, res) {
          if (e && e.status === 404) {
            // If the file wasn't found
            fileServer.serveFile('/not-found.html', 404, {}, request, response)
          }
        })
      })
      .resume()
  })
  .listen(8080)

const wss = new WebSocket.Server({ port: 8081 })

const messages = []

wss.on('connection', function connection(ws) {
  ws.on('message', function incoming(message) {
    const newMessage = {
      key: messages.length,
      time: new Date().toLocaleTimeString(),
      ...JSON.parse(message)
    }
    messages.push(newMessage)
    wss.clients.forEach(el =>
      el.send(JSON.stringify({ type: 'message', message: newMessage }))
    )
    console.log('received: %s', newMessage)
  })
  console.log('connection')
  ws.send(
    JSON.stringify({
      type: 'messages',
      messages: messages
    })
  )
})
