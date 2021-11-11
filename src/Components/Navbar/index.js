import { NavLink } from "react-router-dom";
import style from "./style.module.css";

const Navbar = (props) => {
  const links = [
    {
      to: "/",
      label: "Home",
    },
    {
      to: "/category/bollywood",
      label: "Bollywood",
    },
    {
      to: "/category/technology",
      label: "Technology",
    },
    {
      to: "/category/hollywood",
      label: "Hollywood",
    },
    {
      to: "/category/fitness",
      label: "Fitness",
    },
    {
      to: "/signin",
      label: "SignIn",
    },
  ];

  const getLinkClasses = ({ isActive }) => `${style.link} ${isActive ? style.linkActive : ""}`;

  return (
    <nav className={style.nav}>
      <ul className={style.linkList}>
        {links.map((link, index) => (
          <li key={index}>
            <NavLink to={link.to} className={getLinkClasses} onClick={props.toggleNav}>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
