import { useState } from "react";
import "./App.css";

const App = () => {
  const [form, setForm] = useState({ user: "", pass: "" });

  const handleChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username/Email:", form.user);
    console.log("Password:", form.pass);
    // submit logic here
  };

  return (
    <div className="main-container">
      <div className="login-section">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          <label>Username or Email</label>
          <input
            name="user"
            type="text"
            placeholder="Enter your username or email"
            required
            value={form.user}
            onChange={handleChange}
          />

          <label>Password</label>
          <input
            name="pass"
            type="password"
            placeholder="Enter your password"
            required
            value={form.pass}
            onChange={handleChange}
          />

          <button type="submit" className="login-btn">Login</button>
        </form>

        <div className="signup-text">
          Don't have an account? <a href="#">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default App;
