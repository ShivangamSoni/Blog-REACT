import { useContext } from "react";
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import { DataContext } from "../../DataContext";
import style from "./style.module.css";

const Register = () => {
  const { setUser, users } = useContext(DataContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cPasswordError, setCPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  const nameChange = (e) => setName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);
  const cPasswordChange = (e) => setCPassword(e.target.value);

  const validateName = useCallback(() => {
    if (!name.trim()) return;

    let nameErrorMsg = "";
    const nameRegex = /^([a-zA-Z]{3,})+(\s([a-zA-Z\s]{1,})+)*$/;
    if (!nameRegex.test(name.trim())) {
      nameErrorMsg = "Invalid Name: Name Can only Contain Alphabets";
    }
    setNameError(nameErrorMsg);

    return nameErrorMsg === "";
  }, [name]);

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

  const validateCPassword = useCallback(() => {
    if (!cPassword.trim()) return;

    let cPasswordErrorMsg = "";
    if (cPassword !== password) {
      cPasswordErrorMsg = "Password & Confirm Password Don't Match";
    }

    setCPasswordError(cPasswordErrorMsg);

    return cPasswordErrorMsg === "";
  }, [password, cPassword]);

  const validateForm = () => {
    if (!name.trim() || !email.trim() || !password.trim() || !cPassword.trim()) {
      setFormError("All Fields are Necessary");
      return false;
    }

    if (!validateName() || !validateEmail() || !validatePassword() || !validateCPassword()) {
      setFormError("All Fields Should Contain Valid Data");
      return false;
    }

    const user = users.findIndex((u) => u.email === email.toLowerCase());
    if (user !== -1) {
      setFormError(`Email Already registered`);
      return false;
    }

    setFormError("");
    return true;
  };

  const handleRegister = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const id = new Date().getTime();
    const userName = name.trim().toLowerCase().split(" ").join("_");
    const newUser = { id, name, userName, email: email.toLowerCase(), password };

    setUser((prev) => {
      const newState = [...prev];
      newState.push(newUser);
      return newState;
    });

    setFormSuccess("Registered Successfully");
    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

  useEffect(() => {
    validateName();
  }, [name, validateName]);

  useEffect(() => {
    validateEmail();
  }, [email, validateEmail]);

  useEffect(() => {
    validatePassword();
  }, [password, validatePassword]);

  useEffect(() => {
    validateCPassword();
  }, [cPassword, validateCPassword]);

  return (
    <form className={style.form} onSubmit={handleRegister} noValidate={true}>
      <h2 className={style.title}>Join Now.</h2>
      {formError ? <span className={style.error}>{formError}</span> : null}
      {formSuccess ? <span className={style.success}>{formSuccess}</span> : null}

      <div className={style.formGroup}>
        <input type="text" value={name} onChange={nameChange} placeholder="Name" />
        {nameError ? <span className={style.error}>{nameError}</span> : null}
      </div>

      <div className={style.formGroup}>
        <input type="email" value={email} onChange={emailChange} placeholder="Email" />
        {emailError ? <span className={style.error}>{emailError}</span> : null}
      </div>

      <div className={style.formGroup}>
        <input type="password" value={password} onChange={passwordChange} placeholder="Password" />
        {passwordError ? <span className={style.error}>{passwordError}</span> : null}
      </div>

      <div className={style.formGroup}>
        <input type="password" value={cPassword} onChange={cPasswordChange} placeholder="Confirm Password" />
        {cPasswordError ? <span className={style.error}>{cPasswordError}</span> : null}
      </div>

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
