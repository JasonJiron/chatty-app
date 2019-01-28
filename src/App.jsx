import React, {Component} from 'react';

class App extends Component {

  state = {
    currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
    messages: [
      {
        username: "Bob",
        content: "Has anyone seen my marbles?",
      },
      {
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
      }
    ]
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
        <ChatBar currentUser={this.state.currentUser.name}/>
      </div>
    );
  }
}


class Message extends Component {
  render() {
    return (
      <div className="message">
        <span className="message-username">{this.props.message.username}</span>
        <span className="message-content">{this.props.message.content}</span>
      </div>
    )
  }
}

class MessageList extends Component {

  render() {

    let MessageDataArr = this.props.messages
    const userMessages = MessageDataArr.map((messageData, index) => {
      return <Message message={messageData}/>
    })


    return (
      <div>
        <main className="messages">
        { userMessages }
        </main>
      </div>
    )
  }
}

class ChatBar extends Component {
  render() {
    return (
      <div>
        <footer className="chatbar">
          <input 
            className="chatbar-username" 
            placeholder="Your Name (Optional)" 
            defaultValue={this.props.currentUser} />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    )
  }
}

export default App;

