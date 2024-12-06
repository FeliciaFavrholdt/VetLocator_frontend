import { useState } from "react";
import { userService } from "../services/userService";

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
    <div className="login-form-container">
      <h1>Login</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin();
        }}
        className="login-form"
      >
        <label htmlFor="login">Login</label>
        <input
          type="text"
          id="login"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          placeholder="Enter your login"
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
        {error && <p className="error">{error}</p>}
        <button type="submit" className="submit-button">
          Login
        </button>
      </form>
    </div>
  );
}

export default LoginForm;
