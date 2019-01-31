import React, {Component} from 'react';
import Message from './Message.jsx'

export default class MessageList extends Component {

  render() {
    let MessageDataArr = this.props.messages
    let userMessages = MessageDataArr.map((messageData) => {
      return <Message key={messageData.id} message={messageData} />
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

