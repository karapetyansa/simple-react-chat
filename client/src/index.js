import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const host = window.location.hostname
const uri = `ws://${host}:8081`
const ring = new Audio('http://androidhost.org/get/UmQzv')
ring.volume = 0.3
// setTimeout(1000, () => socket.send('Привет мир!'))

ReactDOM.render(<App uri={uri} ring={ring} />, document.getElementById('root'))
registerServiceWorker()
