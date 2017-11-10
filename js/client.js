const form = document.getElementById('form')
const messages = document.getElementById('messages')
form.addEventListener('submit', event => {
  event.preventDefault()
  let input = event.target.elements.input
  const message = document.createElement('li')
  message.innerHTML = `${new Date().toLocaleTimeString()}: ${input.value}`
  input.value = ''
  messages.appendChild(message)
})
