import React from "react";
import styles from "../Styles/Message.css";

export const Form = (props) => {
  return (
    <div className="formStyle">
      <form action="#">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Surname" />
        <input type="email" placeholder="Example@example.com" />
        <input type="submit" />
      </form>
    </div>
  );
};
