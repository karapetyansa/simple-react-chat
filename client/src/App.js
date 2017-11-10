import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

import InputForm from './components/InputForm'
import MessagesList from './components/MessagesList'

const posts = [
  {
    key: 1,
    authorName: 'Вася',
    content: 'Всем привет'
  },
  {
    key: 2,
    authorName: 'Оля',
    content: 'привет'
  },
  {
    key: 3,
    authorName: 'Алёша',
    content: 'выфвафы'
  }
]

// const Test = props => <div>{props.name}</div>

class App extends Component {
  state = { posts: posts, myName: 'Сергей' }
  addMessage = message => {
    this.state.posts.push({
      key: posts.length + 1,
      authorName: this.state.myName,
      content: message
    })
    this.setState({
      posts: this.state.posts
    })
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
        <InputForm addMessage={this.addMessage} />
        <MessagesList posts={this.state.posts} />
      </div>
    )
  }
}

export default App
