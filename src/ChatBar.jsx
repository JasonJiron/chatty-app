import React, {Component} from 'react';

export default class ChatBar extends Component {

  handleNewMessageOnChange = (event) => {
    let newMessage = event.target.value
    console.log(newMessage);
    
    this.setState({
      content: newMessage
    })
  }

  handleKeyPress = (event) => {
    let newMessage = event.target.value
    if (event.key == 'Enter' && newMessage.length > 0) {
      event.target.value = '';
      this.props.addMessage(newMessage)
    }
  }
  
  render() {
    return (
      <div>
        <footer className="chatbar">
          <input 
            className="chatbar-username" 
            placeholder="Your Name (Optional)" 
            defaultValue={this.props.currentUser} />
          <input 
            type="texts"
            name="newMessage"
            className="chatbar-message" 
            placeholder="Type a message and hit ENTER"
            onChange={this.handleNewMessageOnChange}
            onKeyPress={this.handleKeyPress} />
        </footer>
      </div>
    )
  }
}
