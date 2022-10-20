import { useState, useCallback, useEffect } from "react";
import { Form } from "./components/Form";
import { Message } from "./components/Message";

const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageBody, setMessageBody] = useState([
    {
      author: "Dmitriy",
      message: "Hi!",
    },
    {
      author: "Victor",
      message: "Hello!",
    },
    {
      author: "Zhenya",
      message: "Hi, everybody!",
    },
  ]);

  return (
    <div className="App">
      <Message name="Dmitriy" age="32" />
      <div className="messageList">
        <div> Message List:</div>
        {messageBody.map((el, idx) => (
          <span className="spanStyle">
            {el.author} said: {el.message}
            <br></br>
          </span>
        ))}
      </div>
      <Form />
    </div>
  );
};

export default App;
