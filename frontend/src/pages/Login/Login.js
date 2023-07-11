import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="bg">
      <div className="login__container container">
        <form className="login" onSubmit={handleSubmit}>
          <h3>Login</h3>
          <input
            type="text"
            placeholder="Email:"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password:"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className="btn" disabled={isLoading}>
            Login
          </button>
          <h4>
            Don't have an account?
            <Link to="/signup" className="signupLink">
              Sign up here.
            </Link>
          </h4>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
}
