import React from 'react';

let Message = ({message: {username, content, type}}) => {
  if (type === 'incomingNotification') {
    return (
      <div className="message system">
        { content }
      </div>  
    )
  } else {
    return (
      <div className="message">
        <span className="message-username">{ username }</span>
        <span className="message-content">{ content }</span>
      </div>
    )
  }
}

export default Message;