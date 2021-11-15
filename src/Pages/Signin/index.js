import { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
import style from "./style.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuthenticated, users } = useContext(DataContext);

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      const user = users.filter((data) => data.email === email)[0];

      sessionStorage.setItem("userID", user.id);
      sessionStorage.setItem("userName", user.userName);
      setAuthenticated(true);
    }
  };

  return (
    <form className={style.form} onSubmit={handleLogin}>
      <h2 className={style.title}>Welcome Back.</h2>
      <input type="email" onChange={emailChange} value={email} placeholder="Registered Email" required />
      <input type="password" onChange={passwordChange} value={password} placeholder="Password" required />
      <button type="submit">Sign In</button>
      <span>
        No Account?{" "}
        <Link to="/register" className={style.link}>
          Create One
        </Link>
        .
      </span>
    </form>
  );
};

export default SignIn;
