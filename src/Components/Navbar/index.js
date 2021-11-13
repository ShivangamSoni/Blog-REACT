import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import { DataContext } from "../../DataContext";
import style from "./style.module.css";

const Navbar = (props) => {
  const { isAuthenticated, setAuthenticated } = useContext(DataContext);
  const { pathname } = useLocation();
  const isPostPage = pathname.includes("/post");

  const getLinkClasses = ({ isActive }) => `${style.link} ${isActive ? style.linkActive : ""}`;
  const getBtnClasses = ({ isActive }) => `${style.btn} ${isActive ? style.btnActive : ""}`;

  const links = [
    {
      to: "/",
      label: "Home",
      visible: !isPostPage,
      className: getLinkClasses,
    },
    {
      to: "/category/bollywood",
      label: "Bollywood",
      visible: !isPostPage,
      className: getLinkClasses,
    },
    {
      to: "/category/technology",
      label: "Technology",
      visible: !isPostPage,
      className: getLinkClasses,
    },
    {
      to: "/category/hollywood",
      label: "Hollywood",
      visible: !isPostPage,
      className: getLinkClasses,
    },
    {
      to: "/category/fitness",
      label: "Fitness",
      visible: !isPostPage,
      className: getLinkClasses,
    },
    {
      to: "/signin",
      label: "Sign In",
      visible: !isAuthenticated && !isPostPage,
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
      visible: isAuthenticated && !isPostPage,
      className: getBtnClasses,
    },
    {
      to: "/write",
      label: "Write",
      visible: isAuthenticated,
      className: getBtnClasses,
    },
  ];

  return (
    <nav className={style.nav}>
      <ul className={`${style.linkList} ${isPostPage ? style.postPageLinkList : ""}`}>
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
            <button type="button" className={`${style.btn}`} onClick={() => setAuthenticated(false)}>
              Logout
            </button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

export default Navbar;
// export default withAuth(Navbar);
