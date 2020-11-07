import React, { useEffect, useState } from "react";

import api from "../../service/api";
import { Container, Form } from "./styles";

//import LogoImg from '../../assets/logo.svg';

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState(() => {
    const storageUser = localStorage.getItem("@codechallenge:user");
    if (storageUser) {
      return JSON.parse(storageUser);
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem("@codechallenge:user", JSON.stringify(user));
  }, [user]);

  async function handleSubmit(event) {
    event.preventDefault();
    if (!email || !password) {
      alert("Email/password not be empty.");
      return;
    }

    try {
      const response = await api.post("login", { email, password });
      setUser(response.data);

      history.push("/dashboard");
    } catch (err) {
      console.log(err);
      alert("Error - Incorrect email/password combination.");
    }
  }

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
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
        <button type="submit">Login</button>
      </Form>
      <a href="register">Register</a>
    </Container>
  );
};

export default Login;
