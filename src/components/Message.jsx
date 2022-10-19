import React from "react";
import styles from "../Styles/Message.css";

export const Message = (props) => {
  return (
    <div className="message">
      Hi, my name is {props.name} and I'm {props.age}!
    </div>
  );
};
