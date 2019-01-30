import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  state = {
    currentUser: { name: "Bob" }, // optional. if currentUser is not defined, it means the user is Anonymous
    messages: [],
    clientCount: 0
  }

  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onopen = () => {
      console.log('Connected to server');
    }

    this.socket.onmessage = (message) => {
      let parsedMessage = JSON.parse(message.data)
      if (parsedMessage.type === 'clientCount') {
        this.setState({
          count: parsedMessage.payload.count 
        })
      } else {
        this.setState({
          messages: [...this.state.messages, parsedMessage]
        })
      }
    }
  }

  addMessage = (newMessage) => {
    let currentUser = this.state.currentUser.name
    let newMessageObj = {
      username: currentUser, 
      type: "postMessage",
      content: newMessage
    }
    this.socket.send(JSON.stringify(newMessageObj))
  }

  updateUser = (newUser) => {
    let oldUser = this.state.currentUser.name
    let updatedUser = {
      type: "postNotification",
      content: `${oldUser} has changed their name to ${newUser}.`
    }
    this.socket.send(JSON.stringify(updatedUser))

    this.setState({
      currentUser: { 
        name: newUser
      }
    })
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
            <span className="navbar-count">{this.state.count} user online</span>
          </nav>
        </div>
        <MessageList messages={this.state.messages}/>
        <ChatBar 
          currentUser={this.state.currentUser.name}
          addMessage={this.addMessage} 
          updateUser={this.updateUser} />
      </div>
    );
  }
}

export default App;

