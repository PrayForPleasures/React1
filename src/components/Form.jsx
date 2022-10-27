import React from "react";
import styles from "../Styles/Message.css";
import { useState, useEffect, useRef } from "react";
import { Typography } from "@material-ui/core";

export const Form = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    console.log("submit form", name, surname, email);
  };

  const myHook = useEffect(() => {
    const robotSaid = document.querySelector(".outputFromUser");

    if (name.length > 0 && surname.length > 0 && email.length > 0) {
      setTimeout(() => {
        robotSaid.textContent = `Robot said: ' Hi, ${name} ${surname}, your email: ${email}! '`;
      }, 2500);
    }
  });

  const refName = useRef(null);
  useEffect(() => {
    refName.current.focus();
  });

  return (
    <Typography>
      <div className="divForForm">
        <form className="formStyle" onChange={myHook}>
          <input
            className="inputTxt"
            ref={refName}
            id="name"
            value={name}
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="inputTxt"
            id="surname"
            value={surname}
            type="text"
            placeholder="Surname"
            onChange={(e) => setSurname(e.target.value)}
          />
          <input
            className="inputTxt"
            id="email"
            value={email}
            type="email"
            placeholder="Example@example.com"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            variant="outlined"
            className="inputSubmit"
            type="submit"
            onClick={submitForm}
          >
            Submit
          </button>
        </form>
        <div className="outputFromUser">Robot has nothing to say =/</div>
      </div>
    </Typography>
  );
};
