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

export default MessagesDisplay;