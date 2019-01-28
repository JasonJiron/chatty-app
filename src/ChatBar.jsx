import React, {Component} from 'react';

export default class ChatBar extends Component {
  render() {
    console.log('inside ChatBar ', this.props);

    return (
      <div>
        <footer className="chatbar">
          <input 
            className="chatbar-username" 
            placeholder="Your Name (Optional)" 
            defaultValue={this.props.currentUser} />
          <input 
            className="chatbar-message" 
            placeholder="Type a message and hit ENTER" />
        </footer>
      </div>
    )
  }
}
