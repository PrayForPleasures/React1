import React from "react";
import styles from "../Styles/Message.css";
import { useState, useEffect } from "react";

export const Form = ({ data, setData, setMessage }) => {
  const { name, surname, email } = data;

  const submitForm = (e) => {
    e.preventDefault();
    if (name.length > 0 || surname.length > 0 || email.length > 0) {
      setMessage((prevstate) => [...prevstate, { name, surname, email }]);
    }
    setData({
      name: "",
      surname: "",
      email: "",
    });
  };

  return (
    <div>
      <form className="formStyle" onSubmit={submitForm}>
        <input
          className="inputTxt"
          value={name}
          type="text"
          placeholder="Name"
          onChange={(e) => setData({ ...prevstate, name: e.target.value })}
        />
        <input
          className="inputTxt"
          value={surname}
          type="text"
          placeholder="Surname"
          onChange={(e) => setData({ ...prevstate, surname: e.target.value })}
        />
        <input
          className="inputTxt"
          value={email}
          type="email"
          placeholder="Example@example.com"
          onChange={(e) => setData({ ...prevstate, email: e.target.value })}
        />
        <button className="inputSubmit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
