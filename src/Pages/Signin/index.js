import { Link } from "react-router-dom";
import style from "./style.module.css";

const SignIn = () => {
  return (
    <form
      className={style.form}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <h2 className={style.title}>Welcome Back.</h2>
      <input type="email" placeholder="Registered Email" />
      <input type="password" placeholder="Password" />
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
