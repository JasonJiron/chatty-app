import React, {Component} from 'react';

export default class MessageList extends Component {

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

let Message = ({message: {username, content}}) => {

  // if the content is a incoming notification 
  
  
  
  // if the content is a post notification

  return (
    <div className="message">
      <span className="message-username">{username}</span>
      <span className="message-content">{content}</span>
    </div>
  )
}
