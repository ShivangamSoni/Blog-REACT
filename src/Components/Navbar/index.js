import { NavLink } from "react-router-dom";
import withAuth from "../../Authentication/withAuth";
import style from "./style.module.css";

const Navbar = ({ isAuthenticated, ...props }) => {
  const getLinkClasses = ({ isActive }) => `${style.link} ${isActive ? style.linkActive : ""}`;
  const getBtnClasses = ({ isActive }) => `${style.btn} ${isActive ? style.btnActive : ""}`;

  const links = [
    {
      to: "/",
      label: "Home",
      visible: true,
      className: getLinkClasses,
    },
    {
      to: "/category/bollywood",
      label: "Bollywood",
      visible: true,
      className: getLinkClasses,
    },
    {
      to: "/category/technology",
      label: "Technology",
      visible: true,
      className: getLinkClasses,
    },
    {
      to: "/category/hollywood",
      label: "Hollywood",
      visible: true,
      className: getLinkClasses,
    },
    {
      to: "/category/fitness",
      label: "Fitness",
      visible: true,
      className: getLinkClasses,
    },
    {
      to: "/signin",
      label: "Sign In",
      visible: !isAuthenticated,
      className: getBtnClasses,
    },
    {
      to: "/register",
      label: "Get Started",
      visible: !isAuthenticated,
      className: getBtnClasses,
    },
    {
      to: "/profile",
      label: "Profile",
      visible: isAuthenticated,
      className: getLinkClasses,
    },
    {
      to: "/write",
      label: "Write",
      visible: isAuthenticated,
      className: getLinkClasses,
    },
  ];

  return (
    <nav className={style.nav}>
      <ul className={style.linkList}>
        {links.map((link, index) =>
          link.visible ? (
            <li key={index}>
              <NavLink to={link.to} className={link.className} onClick={props.toggleNav}>
                {link.label}
              </NavLink>
            </li>
          ) : null,
        )}

        {isAuthenticated ? (
          <li>
            <button type="button" className={`${style.btn}`} onClick={() => localStorage.removeItem("userId")}>
              Logout
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default withAuth(Navbar);
