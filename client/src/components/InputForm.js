import React, { Component } from 'react'

class InputForm extends Component {
  handleSubmit = event => {
    event.preventDefault()
    let input = event.target.elements.input
    this.props.addMessage(input.value)
    input.value = ''
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          id="input"
          className="form-control"
          placeholder={this.props.placeHolder}
        />
      </form>
    )
  }
}

export { InputForm }
export default InputForm
