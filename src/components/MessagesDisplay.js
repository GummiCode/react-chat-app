import React from 'react';
import PropTypes from 'prop-types';

const MessagesDisplay = ({ messageHistory }) => (
  <ul className="messages-display">
    {messageHistory.map((message) => {
      return (
        <li key={message.id}>
          <div>
            {message.name}
          </div>
          <div>
            {message.text}
          </div>
        </li>
      )
    })}
  </ul>
);

MessagesDisplay.propTypes = {
  messageHistory: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default MessagesDisplay;