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

  return (
    <div>
      <form className="formStyle" onSubmit={submitForm}>
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
        <button className="inputSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
