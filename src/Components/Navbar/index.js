import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const Navbar = (props) => {
  // const linkClasses = (isActive) => `${style.link} ${isActive ? style.linkActive : ""}`;
  return (
    <nav className={`${style.nav} ${props.isActive ? style.active : ""}`}>
      <ul className={style.linkList}>
        <li>
          <NavLink to="/" className={style.link}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/technology" className={style.link}>
            Technology
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/bollywood" className={style.link}>
            Bollywood
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/sports" className={style.link}>
            Sports
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/hollywood" className={style.link}>
            Hollywood
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/fitness" className={style.link}>
            Fitness
          </NavLink>
        </li>
        <li>
          <NavLink to="/category/food" className={style.link}>
            Food
          </NavLink>
        </li>
        <li>
          <NavLink to="/signup" className={style.link}>
            SignUp
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
