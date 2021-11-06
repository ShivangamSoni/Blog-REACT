import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./style.module.css";
import Navbar from "../Navbar/index";

const Header = () => {
  const [navActive, setNavActive] = useState(false);

  return (
    <header className={style.header}>
      <div>
        <Link to="/" className={style.brandLink}>
          <h1 className={style.brand}>
            <span>The</span> Siren
          </h1>
        </Link>
        <span onClick={() => setNavActive(!navActive)} className={`${style.hamburger} ${navActive ? "fab fa-mixer" : "fas fa-bars"}`}></span>
      </div>
      <Navbar isActive={navActive} />
    </header>
  );
};

export default Header;
