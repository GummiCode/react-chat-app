import React, { useState } from 'react';
// import Header from './Header';
import MessagesDisplay from './MessagesDisplay';
// import MessageForm from './MessageForm';
import mockMessages from '../helpers/mockMessages';

const App = () => {

  const [messageHistory, setMessageHistory] = useState(mockMessages);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          React Chat App
        </p>
        {/* <Header /> */}
        <MessagesDisplay messageHistory={messageHistory}/>
        {/* <MessageForm /> */}
      </header>
    </div>
  );
}

export default App;
