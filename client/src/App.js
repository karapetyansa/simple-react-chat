import React, { Component } from 'react'
import { animateScroll } from 'react-scroll'

import InputForm from './components/InputForm'
import MessagesList from './components/MessagesList'

class App extends Component {
  state = { posts: [], myName: undefined }

  addMessage = ({ id, ...rest }) => {
    this.state.posts.push({
      key: id,
      ...rest
    })
    this.setState({
      posts: this.state.posts
    })
  }

  handleSubmit = message => {
    this.socket.send(
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
    this.socket = new WebSocket(this.props.uri)
    this.socket.onmessage = event => {
      // console.log(event.data.type)
      const message = JSON.parse(event.data)
      if (message.type === 'message') {
        console.log('message', message.type)
        this.addMessage(message.message)
        if (!document.hasFocus()) this.props.ring.play()
      } else if (message.type === 'messages') {
        this.setState({
          posts: message.messages
        })
      }
      console.log('Получены данные ' + event.data)
    }
  }

  componentDidUpdate(nextProps, nextState) {
    animateScroll.scrollToBottom()
  }

  render() {
    return (
      <div className="container" style={{ maxWidth: '400px' }}>
        <h2 className="text-center">Websocket React Chat Example</h2>
        <p className="lead">
          Чат созданный в учебных целях с использованием технологий React,
          Node.js, Bootstrap, Websocket
        </p>
        {!this.state.myName ? (
          <InputForm
            addMessage={this.handleSetName}
            placeHolder="Введите свое имя"
          />
        ) : (
          <div>
            <div className="sticky-top">
              <h3 className="text-info">{this.state.myName}</h3>
            </div>
            <MessagesList posts={this.state.posts} myName={this.state.myName} />
            <InputForm
              addMessage={this.handleSubmit}
              placeHolder="Введите сообщение"
            />
          </div>
        )}
      </div>
    )
  }
}

export default App
