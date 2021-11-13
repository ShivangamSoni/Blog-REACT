import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");

  const nameChange = (e) => setName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);
  const cPasswordChange = (e) => setCPassword(e.target.value);

  const handleRegister = (e) => {
    e.preventDefault();
  };

  return (
    <form className={style.form} onSubmit={handleRegister}>
      <h2 className={style.title}>Join Now.</h2>
      <input type="text" value={name} onChange={nameChange} placeholder="Name" />
      <input type="email" value={email} onChange={emailChange} placeholder="Email" />
      <input type="password" value={password} onChange={passwordChange} placeholder="Password" />
      <input type="password" value={cPassword} onChange={cPasswordChange} placeholder="Confirm Password" />
      <button type="submit">Register</button>

      <span>
        Already have a Account?{" "}
        <Link to="/signin" className={style.link}>
          SignIn
        </Link>
        .
      </span>
    </form>
  );
};

export default Register;
