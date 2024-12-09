import { useState } from "react";
import { userService } from "../services/userService";
import styled from "styled-components";

const LoginFormContainer = styled.div`
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-family: Arial, sans-serif;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: -10px;
`;

const SubmitButton = styled.button`
  padding: 10px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

function LoginForm() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    userService.getAllUsers((users) => {
      const user = users.find(
        (u) => u.login === login && u.password === password
      );
      if (user) {
        alert(`Welcome, ${user.login}! Your role is: ${user.roles.join(", ")}`);
      } else {
        setError("Invalid login or password");
      }
    });
  };

  return (
    <LoginFormContainer>
      <Title>Login</Title>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
      >
        <Label htmlFor="login">Login</Label>
        <Input
          type="text"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Enter your login"
        />
        <Label htmlFor="password">Password</Label>
        <Input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {error && <Error>{error}</Error>}
        <SubmitButton type="submit">Login</SubmitButton>
      </Form>
    </LoginFormContainer>
  );
}

export default LoginForm;
