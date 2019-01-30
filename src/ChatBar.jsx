import React, {Component} from 'react';

export default class ChatBar extends Component {

  handleNewMessageOnChange = (event) => {
    let newMessage = event.target.value
    console.log(newMessage);
    
    this.setState({
      content: newMessage
    })
  }

  handleMessageKeyPress = (event) => {
    let newMessage = event.target.value
    if (event.key == 'Enter' && newMessage.length > 0) {
      event.target.value = '';
      this.props.addMessage(newMessage)
    }
  }

  handleNameKeyDown = (event) => {
    let newUser = event.target.value
    if (event.key == 'Enter' && newUser.length > 0) {
      this.props.updateUser(newUser)
    }
  }
  
  render() {
    return (
      <div>
        <footer className="chatbar">

          <input 
            className="chatbar-username" 
            placeholder="Your Name (Optional)" 
            defaultValue={this.props.currentUser}
            onKeyDown={this.handleNameKeyDown} />

          <input 
            type="texts"
            name="newMessage"
            className="chatbar-message" 
            placeholder="Type a message and hit ENTER"
            onChange={this.handleNewMessageOnChange}
            onKeyPress={this.handleMessageKeyPress} />

        </footer>
      </div>
    )
  }
}
