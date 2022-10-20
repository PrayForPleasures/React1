import React from "react";
import { useState, useCallback, useEffect } from "react";

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageBody, setMessageBody] = useState([
    {
      author: "Dmitriy",
      message: "'Hi'",
      date: new Date().getFullYear(),
    },
    {
      author: "Victor",
      message: "'Hello'",
      date: new Date().getFullYear(),
    },
    {
      author: "Zhenya",
      message: "'Hi, everybody'",
      date: new Date().getFullYear(),
    },
  ]);

  return (
    <div className="messageList">
      <div> Message List:</div>
      {messageBody.map((el, idx) => (
        <span className="spanStyle">
          {el.author} said: {el.message} at {el.date}
          <br></br>
        </span>
      ))}
    </div>
  );
};
