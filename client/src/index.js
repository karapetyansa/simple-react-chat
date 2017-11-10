import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const host = window.location.hostname
const uri = `ws://${host}:8081`

const socket = new WebSocket(uri)
socket.onmessage = function(event) {
  console.log('Получены данные ' + event.data)
}
setTimeout(1000, () => socket.send('Привет мир!'))
React.createElement('App')
ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
