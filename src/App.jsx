import React, {Component} from 'react';

class App extends Component {

  state = {
    currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
    messages: [
      {
        username: "Bob",
        content: "Has anyone seen my marbles?",
        id: "11AB3"
      },
      {
        username: "Anonymous",
        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good.",
        id: "48GR9"
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


let Message = ({message}) => {
  return (
    <div className="message">
      <span className="message-username">{message.username}</span>
      <span className="message-content">{message.content}</span>
    </div>
  )
}

class MessageList extends Component {

  render() {

    let MessageDataArr = this.props.messages
    const userMessages = MessageDataArr.map((messageData) => {
      return <Message key={messageData.id} message={messageData}/>
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

