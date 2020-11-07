import React, { useState } from "react";

import api from "../../service/api";
import { Container, Form } from "../Register/styles";

//import LogoImg from '../../assets/logo.svg';

const Register = ({ history }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      alert("Name/Email/password not be empty.");
      return;
    }

    try {
      api.post("register", { name, email, password }).then((response) => {
        if (response.status === 200) alert("Registered user! Please login.");
      });

      history.push("/login");
    } catch (err) {
      console.log(err);
      alert("Error - handleSubmit");
    }
  }

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="text"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Register</button>
      </Form>
      <a href="/">Login</a>
    </Container>
  );
};

export default Register;
