import React, {Component} from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
          </nav>
        </div>
        <Message />
        <ChatBar />
      </div>
    );
  }
}

class Message extends Component {
  render() {
    return (
      <div>
        <main className="messages">
          <div className="message">
            <span className="message-username">Anonymous1</span>
            <span className="message-content">I won't be impressed with technology until I can download food.</span>
          </div>
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
          <input className="chatbar-username" placeholder="Your Name (Optional)" />
          <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    )
  }
}

export default App;
