import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx';

class App extends Component {

  state = {
    currentUser: {}, // optional. if currentUser is not defined, it means the user is Anonymous
    messages: []
  }

  // componentDidMount() {
  //   console.log("componentDidMount <App />");
  //   setTimeout(() => {
  //     console.log("Simulating incoming message");
  //     // Add a new message to the list of messages in the data store
  //     const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
  //     const messages = this.state.messages.concat(newMessage)
  //     // Update the state of the app component.
  //     // Calling setState will trigger a call to render() in App and all child components.
  //     this.setState({messages: messages})
  //   }, 3000);
  // }

  // function that gets passed to ChatBar that updates App's state

  componentDidMount() {

    this.socket = new WebSocket('ws://localhost:3001')
    this.socket.onopen = () => {
      console.log('Connected to server');
    }
    this.socket.onmessage = (message) => {
      let parsedMessage = JSON.parse(message.data)
      this.setState({
        messages: [...this.state.messages, parsedMessage]
      })
    }
  }

  addMessage = (newMessage) => {
    let currentUser = this.state.currentUser.name
    let newMessageObj = {
      username: currentUser, 
      content: newMessage
    }
    this.socket.send(JSON.stringify(newMessageObj))
  }

  updateUser = (newUser) => {
    console.log('usernName: ', newUser);
    this.setState({
      currentUser: newUser
    })
  }

  render() {
    return (
      <div>
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
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

