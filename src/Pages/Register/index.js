import axios from "axios";
import { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from "react-router-dom";
import BASE_URL from "../../Utilities/API";
import style from "./style.module.css";

const Register = () => {
  const navigate = useNavigate();

  // const [image, setImage] = useState({ src: null, type: "" });
  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setCPassword] = useState("");
  // const [imageError, setImageError] = useState("");
  const [nameError, setNameError] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [cPasswordError, setCPasswordError] = useState("");
  const [formError, setFormError] = useState("");
  const [formSuccess, setFormSuccess] = useState("");

  /*
  const imageChange = (e) => {
    const input = e.target;
    const image = input.files[0];

    const type = image.type;

    let url = null;
    if (type.includes("image/")) {
      url = URL.createObjectURL(input.files[0]);
    }

    setImage((prev) => {
      const newState = { ...prev };
      newState.src = url;
      newState.type = type;
      return newState;
    });
  };
  */
  const nameChange = (e) => setName(e.target.value);
  const userNameChange = (e) => setUserName(e.target.value);
  const emailChange = (e) => setEmail(e.target.value);
  const passwordChange = (e) => setPassword(e.target.value);
  const cPasswordChange = (e) => setCPassword(e.target.value);

  /*
  const validateImage = useCallback(() => {
    if (!image.type) return;

    let imageErrorMsg = "";

    if (!image.type.includes("image/")) {
      imageErrorMsg = "Only Image Files are Allowed";
    }
    setImageError(imageErrorMsg);

    return imageErrorMsg === "";
  }, [image]);
  */

  const validateName = useCallback(() => {
    if (!name.trim()) return;

    let nameErrorMsg = "";
    const nameRegex = /^([a-zA-Z]{3,})+(\s([a-zA-Z\s]{1,})+)*$/;
    if (!nameRegex.test(name.trim())) {
      nameErrorMsg = "Name Can only Contain Alphabets.\nIt Should have at least 3 Characters.";
    }
    setNameError(nameErrorMsg);

    return nameErrorMsg === "";
  }, [name]);

  const validateUserName = useCallback(() => {
    if (!userName.trim()) return;

    let userNameErrorMsg = "";
    const userNameRegex = /^(?=.{8,20}$)(?![_])[a-z0-9_]+(?<![_])$/;
    if (!userNameRegex.test(userName.trim())) {
      userNameErrorMsg = "Username Can only Contain Lower Case AlphaNumerics and _\nIt Should be between 8 & 20 Character.\nIt can't start or End with _";
    }
    setUserNameError(userNameErrorMsg);

    return userNameErrorMsg === "";
  }, [userName]);

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

  const validateForm = async () => {
    if (!name.trim() || !userName.trim() || !email.trim() || !password.trim() || !cPassword.trim()) {
      setFormError("All Fields are Necessary");
      return false;
    }

    if (!validateName() || !validateUserName() || !validateEmail() || !validatePassword() || !validateCPassword()) {
      setFormError("All Fields Should Contain Valid Data");
      return false;
    }

    try {
      await axios.get(`${BASE_URL}/api/v1/user/verify/username`, {
        params: {
          username: userName,
        },
      });

      await axios.get(`${BASE_URL}/api/v1/user/verify/email`, {
        params: {
          email,
        },
      });

      setFormError("");
      return true;
    } catch (e) {
      setFormError(e.response.data.message);
      return false;
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const valid = await validateForm();
    if (!valid) return;

    const newUser = { name, email, username: userName, password };

    try {
      const {
        data: { success },
      } = await axios.post(`${BASE_URL}/api/v1/user/register`, newUser, { headers: { "Content-Type": "application/json" } });

      if (success) {
        setFormSuccess("Registered Successfully");
        setTimeout(() => {
          navigate("/signin");
        }, 1000);
      }
    } catch (e) {
      setFormError(e.response.data.message);
    }
  };

  /*
  useEffect(() => {
    validateImage();
  }, [image, validateImage]);
  */

  useEffect(() => {
    validateName();
  }, [name, validateName]);

  useEffect(() => {
    validateUserName();
  }, [userName, validateUserName]);

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

      {/* <div>
        <div className={style.imgContainer}>
          {image.src ? <img src={image.src} alt={name} /> : null}
          <label className={style.imageBtn}>
            {!image.src ? "Add Image" : "Update Image"}
            <input className={style.imageInput} type="file" onChange={imageChange} accept="image/*" required={true} />
          </label>
        </div>
        {imageError ? <span className={style.error}>{imageError}</span> : null}
      </div> */}

      <div className={style.formGroup}>
        <input type="text" value={name} onChange={nameChange} placeholder="Name" />
        {nameError ? <span className={style.error}>{nameError}</span> : null}
      </div>

      <div className={style.formGroup}>
        <input type="text" value={userName} onChange={userNameChange} placeholder="Unique Username" />
        {userNameError ? <span className={style.error}>{userNameError}</span> : null}
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
