import { useState, useContext, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../../DataContext";
import style from "./style.module.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [formError, setFormError] = useState("");

  const { setAuthenticated, users } = useContext(DataContext);

  const emailChange = (e) => setEmail(e.target.value);

  const passwordChange = (e) => setPassword(e.target.value);

  const validateEmail = useCallback(() => {
    if (!email.trim()) return;

    let emailErrorMsg = "";
    const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!emailRegex.test(email)) {
      emailErrorMsg = "Enter a Valid Email";
    }
    setEmailError(emailErrorMsg);

    return emailErrorMsg === "";
  }, [email]);

  const validatePassword = useCallback(() => {
    if (!password.trim()) return;

    let passwordErrorMsg = "";
    if (password.length < 8 || password.length > 16) {
      passwordErrorMsg = "Password should be between 8 to 16 Characters";
    }
    setPasswordError(passwordErrorMsg);

    return passwordErrorMsg === "";
  }, [password]);

  const validateForm = () => {
    if (!email.trim() || !password.trim()) {
      setFormError("Email & Password are Necessary");
      return false;
    }

    if (!validateEmail() || !validatePassword()) {
      setFormError("Valid Email & Password are Necessary");
      return false;
    }

    setFormError("");
    return true;
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const user = users.filter((data) => data.email === email.trim().toLowerCase())[0];

    if (!user || user.password !== password.trim()) {
      setFormError("Either Email or Password is Incorrect");
      return;
    }

    sessionStorage.setItem("userID", user.id);
    sessionStorage.setItem("userName", user.userName);
    setAuthenticated(true);
  };

  useEffect(() => {
    validateEmail();
  }, [email, validateEmail]);

  useEffect(() => {
    validatePassword();
  }, [password, validatePassword]);

  return (
    <form className={style.form} onSubmit={handleLogin} noValidate={true}>
      <h2 className={style.title}>Welcome Back.</h2>

      {formError ? <span className={style.error}>{formError}</span> : null}

      <div className={style.formGroup}>
        <input type="email" onChange={emailChange} value={email} placeholder="Registered Email" required />
        {emailError ? <span className={style.error}>{emailError}</span> : null}
      </div>

      <div className={style.formGroup}>
        <input type="password" onChange={passwordChange} value={password} placeholder="Password" required />
        {passwordError ? <span className={style.error}>{passwordError}</span> : null}
      </div>

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
