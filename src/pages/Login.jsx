import "./Login.css";
import { useState } from "react";
import { Header } from "../components/Header";
import { Dashboard } from "./Dashboard";
import data from "../services/user.json";
import { useNavigate } from "react-router-dom";

export function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    const foundUser = data.users.find(
      (datas) => datas.email === user && datas.password === password,
    );
    if (foundUser) {
      localStorage.setItem("currentUser", JSON.stringify(foundUser));

      navigate("/dashboard");
    } else {
      alert("Invalid email or password");
    }
  }

  return (
    <>
      <Header />

      <div className="login-container">
        <h2>Login</h2>

        <form className="login-form" onSubmit={handleLogin}>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            required
            value={user}
            onChange={(e) => setUser(e.target.value)}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Login</button>

          <div className="login-links">
            <a href="/forgot-password">Forgot Password?</a>
            <a href="/register">Don't have an account? Register</a>
          </div>
        </form>
      </div>
    </>
  );
}
