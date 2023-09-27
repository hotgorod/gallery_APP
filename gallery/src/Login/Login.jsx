import React, { useState } from "react";
import css from './Login.module.css'

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(email);
      console.log(password);
    };
  return (
      <div className={css.authFormContainer}>
          <h2>Login</h2>
          <form className={css.loginForm} onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          name="email"
          id="email"
          placeholder="your-email@mail.com"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          placeholder="*******"
        />
        <button type="submit">Log In</button>
      </form>
      
    </div>
  );
};
