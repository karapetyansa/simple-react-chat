import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'

const host = window.location.hostname
const uri = `ws://${host}:8081`

// setTimeout(1000, () => socket.send('Привет мир!'))

ReactDOM.render(<App uri={uri} />, document.getElementById('root'))
registerServiceWorker()
