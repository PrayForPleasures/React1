import React from "react";
import styles from "../Styles/Message.css";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";

export const Chat = () => {
  const [messagesChat, setMessagesChat] = useState([
    { name: "Nicole", txt: "first message", id: 501 },
    { name: "Zarina", txt: "second message", id: 502 },
    { name: "Nadezhda", txt: "third message", id: 503 },
    { name: "Scooby", txt: "fourth message", id: 504 },
    { name: "Polina", txt: "fifth message", id: 505 },
  ]);

  return (
    <div className="messageList">
      <div>Chat list:</div>
      {messagesChat.map((el, id) => (
        <span key={id} className="spanStyle">
          {el.name} said: {el.txt}
          <br></br>
        </span>
      ))}
      <List />
      <ListItem />
    </div>
  );
};
