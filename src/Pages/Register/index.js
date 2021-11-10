import { Link } from "react-router-dom";
import style from "./style.module.css";

const Register = () => {
  return (
    <form className={style.form}>
      <h2 className={style.title}>Join Now.</h2>
      <input type="text" placeholder="Name" />
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
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
