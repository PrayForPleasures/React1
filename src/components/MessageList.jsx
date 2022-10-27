import React from "react";
import { useState, useEffect } from "react";

export const MessageList = () => {
  const [messageBody, setMessageBody] = useState([
    {
      author: "Dmitriy",
      message: "'Hi'",
      date: new Date().getFullYear(),
      idx: "1",
    },
    {
      author: "Victor",
      message: "'Hello'",
      date: new Date().getFullYear(),
      idx: "2",
    },
    {
      author: "Zhenya",
      message: "'Hey, you'",
      date: new Date().getFullYear(),
      idx: "3",
    },
  ]);

  return (
    <div className="messageList">
      <div> Message List:</div>
      {messageBody.map((el, idx) => (
        <span key={idx} className="spanStyle">
          {el.author} said: {el.message} at {el.date}
          <br></br>
        </span>
      ))}
    </div>
  );
};
