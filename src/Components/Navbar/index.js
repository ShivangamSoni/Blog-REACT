import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const Navbar = (props) => {
  const linkClasses = (isActive) => `${style.link} ${isActive ? style.linkActive : ""}`;
  return (
    <nav className={`${style.nav} ${props.isActive ? style.active : ""}`}>
      <ul className={style.linkList}>
        <li>
          <NavLink exact to="/" className={linkClasses}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/technology" className={linkClasses}>
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/bollywood" className={linkClasses}>
            Bollywood
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/sports" className={linkClasses}>
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/hollywood" className={linkClasses}>
            Hollywood
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/fitness" className={linkClasses}>
            Fitness
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/food" className={linkClasses}>
            Food
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={linkClasses}>
            SignUp
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
