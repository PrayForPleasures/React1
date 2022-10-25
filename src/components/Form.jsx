import React from "react";
import styles from "../Styles/Message.css";
import { useState, useEffect } from "react";

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
    const nameId = document.getElementById("name");
    const surnameId = document.getElementById("surname");
    const emailId = document.getElementById("email");

    if (
      nameId.value.length > 0 &&
      surnameId.value.length > 0 &&
      emailId.value.length > 0
    ) {
      setTimeout(() => {
        robotSaid.textContent = `Robot said: ' Hi, ${nameId.value} ${surnameId.value}, your email: ${emailId.value}! '`;
      }, 2500);
    }
  });

  return (
    <div className="divForForm">
      <form className="formStyle" onChange={myHook}>
        <input
          className="inputTxt"
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
        <button className="inputSubmit" type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
      <div className="outputFromUser">Robot has nothing to say =/</div>
    </div>
  );
};
