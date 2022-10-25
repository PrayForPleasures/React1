import React from "react";
import { useState, useCallback, useEffect } from "react";
import { Typography } from "@material-ui/core";

export const MessageList = () => {
  const [messageList, setMessageList] = useState([]);
  const [messageBody, setMessageBody] = useState([
    {
      author: "Dmitriy",
      message: "'Hi'",
      date: new Date().getFullYear(),
      idx: "3",
    },
    {
      author: "Victor",
      message: "'Hello'",
      date: new Date().getFullYear(),
      idx: "3",
    },
    {
      author: "Zhenya",
      message: "'Hi, everybody'",
      date: new Date().getFullYear(),
      idx: "3",
    },
  ]);

  return (
    <div className="messageList">
      <Typography> Message List:</Typography>
      {messageBody.map((el, idx) => (
        <span key={idx} className="spanStyle">
          {el.author} said: {el.message} at {el.date}
          <br></br>
        </span>
      ))}
    </div>
  );
};
