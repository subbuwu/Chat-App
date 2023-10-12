import React from 'react';

const Message = ({ message, username }) => {
  const isUser = message.username === username;

  return (
    <div className={`message ${isUser ? 'user-message' : 'other-message'}`}>
      {!isUser && <p className='message-username'>{message.username}</p>}
      <div className='message-content'>{message.message}</div>
    </div>
  );
};

export default Message;
