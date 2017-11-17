import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import InputForm from './components/InputForm'
import MessagesList from './components/MessagesList'

class App extends Component {
  state = { posts: [], myName: undefined, socket: undefined }

  addMessage = message => {
    console.log(message)
    this.state.posts.push({
      key: message.id,
      authorName: message.authorName,
      content: message.content
    })
    this.setState({
      posts: this.state.posts
    })
  }

  handleSubmit = message => {
    this.state.socket.send(
      JSON.stringify({
        authorName: this.state.myName,
        content: message
      })
    )
  }

  socket = undefined

  handleSetName = name => {
    this.setState({
      myName: name
    })
    this.state.socket = new WebSocket(this.props.uri)
    this.state.socket.onmessage = event => {
      // console.log(event.data.type)
      const message = JSON.parse(event.data)
      if (message.type === 'message') {
        console.log('message', message.type)
        this.addMessage(message.message)
      } else if (message.type === 'messages') {
        this.setState({
          posts: message.messages
        })
      }
      console.log('Получены данные ' + event.data)
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Добро пожаловать в чат</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        {!this.state.myName ? (
          <InputForm addMessage={this.handleSetName} />
        ) : (
          <div>
            <InputForm addMessage={this.handleSubmit} />
            <MessagesList posts={this.state.posts} />
          </div>
        )}
      </div>
    )
  }
}

export default App
